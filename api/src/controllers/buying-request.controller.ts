import { IBuyingRequestInput } from "@graphql/types";
import BuyingRequest from "@models/BuyingRequest";
import { uploadImages } from "@repositories/uploads.repository";
import {
	BUYING_REQUESTS_GET_LIMIT,
	errorResponse,
	generateSlug,
	successResponse
} from "@utils";
import ProductName from "../models/ProductName";

function setBrGallery(data: Promise<unknown>[], br: BuyingRequest) {
	let doneCount = 0;

	data.forEach(async d => {
		d.then(img => {
			++doneCount;
			const currentImgs = br.getDataValue("gallery") || [];
			br.set("gallery", [...currentImgs, img]);

			if (doneCount >= data.length - 1) {
				br.save();
			}
		});
	});
}

class BuyingRequestController {
	async getBuyingRequests(companyId: number, offset: number) {
		const { rows, count } = await BuyingRequest.findAndCountAll({
			offset,
			limit: BUYING_REQUESTS_GET_LIMIT,
			where: { companyId }
		});

		return {
			buyingRequests: rows,
			totalDataCount: count
		};
	}

	// @TODO Make this thing typed
	async createBuyingRequest({
		gallery,
		companyName,
		...buyingRequestInput
	}: IBuyingRequestInput) {
		try {
			const { name, productName } = buyingRequestInput;

			// Check duplicate
			const duplicateBr = await BuyingRequest.findOne({
				where: {
					name
				}
			});

			const duplicateProductName: ProductName = await ProductName.findOne(
				{
					where: { name: productName }
				}
			);

			// Creating product name for later use
			if (duplicateProductName)
				duplicateProductName.set(
					"searchedCount",
					duplicateProductName.getDataValue("searchedCount") + 1
				);
			else {
				const newProductName = await ProductName.create({
					name: productName,
					searchedCount: 0
				});
				newProductName.save();
			}

			if (duplicateBr) return errorResponse("DUPLICATE_BR");

			const newBuyingRequest = await BuyingRequest.create({
				...buyingRequestInput,
				slug: generateSlug(buyingRequestInput.name),
				status: "OPEN"
			});

			const brGallery = await uploadImages(companyName, gallery);

			setBrGallery(brGallery, newBuyingRequest);

			(await newBuyingRequest).save();
			return successResponse();
		} catch (error) {
			console.log(error);
			return errorResponse(error);
		}
	}
}

export default BuyingRequestController;