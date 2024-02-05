import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [
    '/',
    // '/crafting-seamless-customer-journeys',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    "/api/webhooks(.*)",
],
ignoredRoutes: [
    '/api/webhook/clerk',
    '/api/webhook/stripe',
],
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};