import { LOCAL_STORAGE_TEMPLATE_KEY } from "@/constants/vars";

describe("vars", () => {
  it("should export LOCAL_STORAGE_TEMPLATE_KEY with value 'template'", () => {
    expect(LOCAL_STORAGE_TEMPLATE_KEY).toBe("template");
  });

  it("should export LOCAL_STORAGE_TEMPLATE_KEY as a string", () => {
    expect(typeof LOCAL_STORAGE_TEMPLATE_KEY).toBe("string");
  });
});
