import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("login", "features/auth/login.tsx"),
  route("register", "features/auth/register.tsx"),
  route("profile", "features/profile/Profile.tsx"),
] satisfies RouteConfig;
