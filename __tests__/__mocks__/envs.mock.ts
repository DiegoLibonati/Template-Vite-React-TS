import type { Envs } from "@/types/envs";

export const mockEnvs: Envs = {
  redirectIfRouteNotExists: false,
  templateApiUrl: "http://localhost:3000",
};

export const mockEnvsWithRedirect: Envs = {
  redirectIfRouteNotExists: true,
  templateApiUrl: "http://localhost:3000",
};
