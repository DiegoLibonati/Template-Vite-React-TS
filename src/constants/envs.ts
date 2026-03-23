import type { Envs } from "@/types/envs";

const envs: Envs = {
  redirectIfRouteNotExists: import.meta.env.VITE_REDIRECT_IF_ROUTE_NOT_EXISTS === "true",
  templateApiUrl: import.meta.env.VITE_TEMPLATE_API_URL as string,
};

export default envs;
