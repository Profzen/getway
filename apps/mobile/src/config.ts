export const API_BASE =
	(process.env.EXPO_PUBLIC_WEB_API_URL as string) ||
	(process.env.EXPO_PUBLIC_API_BASE_URL as string) ||
	'http://127.0.0.1:3000'
