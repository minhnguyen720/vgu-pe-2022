export type GeneralInputNames = "name" | "endDate" | "location" | "description";

export type DetailsInputNames =
  | "productName"
  | "minBudget"
  | "maxBudget"
  | "minOrder"
  | "unit"
  | "gallery";

// All general input names | key
export const requiredGeneralInputNames: GeneralInputNames[] = [
  "name",
  "endDate",
  "location",
];

// All details input names | key
export const requiredDetailsInputNames: DetailsInputNames[] = [
  "productName",
  "minBudget",
  "maxBudget",
  "minOrder",
  "unit",
];

export const GENERAL_FORM_INDEX = 1;
export const DETAILS_FORM_INDEX = 2;
export const CHECK_FORM_INDEX = 3;