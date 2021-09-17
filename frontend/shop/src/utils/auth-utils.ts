import Cookie from "js-cookie";
import SSRCookie from "cookie";
import { AUTH_CRED, ROLE, TOKEN } from "./constants";

const cookieDomain = { domain: `.${process.env.NEXT_PUBLIC_DOMAIN}` };

const isDevelopment = process.env.NODE_ENV === "development";

export function setAuthCredentials(token: string, role: string) {
	const authCred = { token, role };
	Cookie.set(
		AUTH_CRED,
		JSON.stringify({ ...authCred }),
		!isDevelopment ? { ...cookieDomain } : {}
	);
}

export function removeAuthCredentials() {
	Cookie.remove(AUTH_CRED, !isDevelopment ? { ...cookieDomain } : {});
}

export function getAuthCredentials(context?: any): {
	token: string | null;
	role: string | null;
} {
	let authCred;
	if (context) {
		authCred = parseSSRCookie(context)[AUTH_CRED];
	} else {
		authCred = Cookie.get(AUTH_CRED);
	}

	if (authCred) {
		return JSON.parse(authCred);
	}

	return { token: null, role: null };
}

export function parseSSRCookie(context: any) {
	return SSRCookie.parse(context.req.headers.cookie ?? "");
}

export function hasAccess(
	_allowedRoles: string[],
	_userPermissions: string[] | undefined | null
) {
	if (_userPermissions) {
		return Boolean(
			_allowedRoles?.find((aRole) => _userPermissions.includes(aRole))
		);
	}
	return false;
}

export function isAuthenticated(_cookies: { token: string; role: string }) {
	return _cookies.token && _cookies.role;
}
