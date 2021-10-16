import BuyingRequest from "@models/BuyingRequest";
import { IProjectInput } from "../graphql/types";
import Project from "../models/Project";
import { uploadImage } from "../repositories/uploads.repository";
import {
	errorResponse,
	PROJECTS_GET_LIMIT,
	RESPONSE_MESSAGE,
	successResponse
} from "../utils";

function setBuyingRequestsProject(
	buyingRequests: BuyingRequest[],
	projectId: number
) {
	buyingRequests.forEach(br => {
		const currentProjects = br.getDataValue("projectIds");
		br.setDataValue(
			"projectIds",
			!currentProjects ? [projectId] : [...currentProjects, projectId]
		);
		br.save();
	});
}

class ProjectController {
	async getProjects(companyId: number, offset: number) {
		const { rows: projects, count } = await Project.findAndCountAll({
			where: { companyId },
			offset: offset,
			limit: PROJECTS_GET_LIMIT
		});

		return { projects, count };
	}

	async addToProject(projectId: number, brIds: number[]) {
		try {
			const project = await Project.findOne({ where: { id: projectId } });

			const currentBrs = project.getDataValue("buyingRequests");

			project.setDataValue(
				"buyingRequests",
				!!currentBrs?.length ? [...currentBrs, ...brIds] : brIds
			);
			project.save();

			return successResponse();
		} catch (e) {
			console.log(e);
			return errorResponse();
		}
	}

	async createProject(project: IProjectInput) {
		const duplicateProject = await Project.findOne({
			where: { name: project.name, companyId: project.companyId }
		});
		if (duplicateProject) return errorResponse(RESPONSE_MESSAGE.DUPLICATE);

		const newProject = await Project.create(project);
		if (project.image) {
			uploadImage(project.companyName, project.image).then(
				projectImage => {
					newProject.setDataValue("image", projectImage);
				}
			);
		}

		newProject.save();

		const buyingRequests = await BuyingRequest.findAll({
			where: { id: project.buyingRequests }
		});

		setBuyingRequestsProject(buyingRequests, newProject.getDataValue("id"));
		console.log("Returning response");

		return successResponse();
	}
}

export default ProjectController;
