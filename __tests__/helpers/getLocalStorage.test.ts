import { getLocalStorage } from "@/helpers/getLocalStorage";

describe("getLocalStorage", () => {
  afterEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it("should return null when the key does not exist", () => {
    const result = getLocalStorage("nonexistent-key");
    expect(result).toBeNull();
  });

  it("should return the parsed object value when the key exists", () => {
    const value = { name: "John", age: 30 };
    localStorage.setItem("user", JSON.stringify(value));

    const result = getLocalStorage("user");

    expect(result).toEqual(value);
  });

  it("should return a parsed string value", () => {
    localStorage.setItem("name", JSON.stringify("hello"));

    const result = getLocalStorage("name");

    expect(result).toBe("hello");
  });

  it("should return a parsed number value", () => {
    localStorage.setItem("count", JSON.stringify(42));

    const result = getLocalStorage("count");

    expect(result).toBe(42);
  });

  it("should return a parsed boolean value", () => {
    localStorage.setItem("active", JSON.stringify(true));

    const result = getLocalStorage("active");

    expect(result).toBe(true);
  });

  it("should return a parsed array value", () => {
    const arr = [1, 2, 3];
    localStorage.setItem("list", JSON.stringify(arr));

    const result = getLocalStorage("list");

    expect(result).toEqual(arr);
  });

  it("should call localStorage.getItem with the provided key", () => {
    const getSpy = jest.spyOn(Storage.prototype, "getItem");

    getLocalStorage("my-key");

    expect(getSpy).toHaveBeenCalledWith("my-key");
  });

  it("should call localStorage.getItem exactly once", () => {
    const getSpy = jest.spyOn(Storage.prototype, "getItem");

    getLocalStorage("my-key");

    expect(getSpy).toHaveBeenCalledTimes(1);
  });
});
