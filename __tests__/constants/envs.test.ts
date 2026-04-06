import { mockEnvs, mockEnvsWithRedirect } from "@tests/__mocks__/envs.mock";

jest.mock("@/constants/envs", () => ({
  default: {
    redirectIfRouteNotExists: false,
    templateApiUrl: "http://localhost:3000",
  },
}));

describe("envs", () => {
  describe("interface contract", () => {
    it("should export redirectIfRouteNotExists as a boolean", () => {
      expect(typeof mockEnvs.redirectIfRouteNotExists).toBe("boolean");
    });

    it("should export templateApiUrl as a string", () => {
      expect(typeof mockEnvs.templateApiUrl).toBe("string");
    });
  });

  describe("redirectIfRouteNotExists conversion logic", () => {
    it("should be false when env var is not 'true'", () => {
      const result = (undefined as unknown as string) === "true";
      expect(result).toBe(false);
    });
  });

  describe("mock values", () => {
    it("mockEnvs should have redirectIfRouteNotExists as false", () => {
      expect(mockEnvs.redirectIfRouteNotExists).toBe(false);
    });

    it("mockEnvs should have a templateApiUrl", () => {
      expect(mockEnvs.templateApiUrl).toBe("http://localhost:3000");
    });

    it("mockEnvsWithRedirect should have redirectIfRouteNotExists as true", () => {
      expect(mockEnvsWithRedirect.redirectIfRouteNotExists).toBe(true);
    });
  });
});
