export const PAGE_NAME_INTO_LABEL = {
  [""]: "HOMEPAGE_PAGE_SEARCH_LABEL",
  ["nhu-cau-thu-mua"]: "TENDER_PAGE_SEARCH_LABEL",
  ["danh-ba-cong-ty"]: "COMPANY_PAGE_SEARCH_LABEL",
  ["san-pham-dich-vu"]: "PRODUCT_SERVICE_PAGE_SEARCH_LABEL",
  ["ho-tro"]: "SUPPORT_PAGE_SEARCH_LABEL",
};

// Fetch Limit
export const BUYING_REQUESTS_GET_LIMIT = 8;

export enum ERole {
  SUPER_ADMIN = "SUPER_ADMIN",
  COMPANY_OWNER = "COMPANY_OWNER",
  COMPANY_STAFF = "COMPANY_STAFF",
  GUESS = "GUESS",
}

// AUTH
export const roles = {
  SUPER_ADMIN: "SUPER_ADMIN",
  COMPANY_OWNER: "COMPANY_OWNER",
  COMPANY_STAFF: "COMPANY_STAFF",
  GUESS: "GUESS",
};

export const AUTH_ERRORS = {
  USER_NOT_FOUND: "USER_NOT_FOUND",
};

export const FILE_SIZE_LIMIT = 20000000;
export const LIMIT = 10;

export const MILLION_COUNT = 7;
export const BILLION_COUNT = 10;

export const MILLION = 1000000;
export const BILLION = 1000000000;

// cookie
export const ROLE = "ROLE";
export const TOKEN = "token";
export const PERMISSIONS = "permissions";
export const AUTH_CRED = "AUTH_CRED";
export const LOGGED_IN_USER = "LOGGED_IN_USER";

// Settings
export const MOBILE_SIZE = { min: 300, max: 480 };
