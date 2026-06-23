const { mask, unmask, isValid } = require("./index");

describe("mask()", () => {
  it("applies full mask to 11 digits", () => {
    expect(mask("12345678909")).toBe("123.456.789-09");
  });

  it("applies partial mask while typing — 3 digits", () => {
    expect(mask("123")).toBe("123");
  });

  it("applies partial mask while typing — 4 digits", () => {
    expect(mask("1234")).toBe("123.4");
  });

  it("applies partial mask while typing — 7 digits", () => {
    expect(mask("1234567")).toBe("123.456.7");
  });

  it("accepts an already-masked string", () => {
    expect(mask("123.456.789-09")).toBe("123.456.789-09");
  });

  it("ignores digits beyond 11", () => {
    expect(mask("123456789099999")).toBe("123.456.789-09");
  });

  it("returns empty string for non-string input", () => {
    expect(mask(null)).toBe("");
    expect(mask(undefined)).toBe("");
    expect(mask(12345678909)).toBe("");
  });
});

describe("unmask()", () => {
  it("removes all non-digit characters", () => {
    expect(unmask("123.456.789-09")).toBe("12345678909");
  });

  it("returns the value unchanged when already unmasked", () => {
    expect(unmask("12345678909")).toBe("12345678909");
  });

  it("returns empty string for non-string input", () => {
    expect(unmask(null)).toBe("");
    expect(unmask(undefined)).toBe("");
  });
});

describe("isValid()", () => {
  it("returns true for a valid CPF (unmasked)", () => {
    expect(isValid("52998224725")).toBe(true);
  });

  it("returns true for a valid CPF (masked)", () => {
    expect(isValid("529.982.247-25")).toBe(true);
  });

  it("returns false for a CPF with all identical digits", () => {
    expect(isValid("111.111.111-11")).toBe(false);
    expect(isValid("00000000000")).toBe(false);
  });

  it("returns false when CPF has fewer than 11 digits", () => {
    expect(isValid("1234567")).toBe(false);
  });

  it("returns false for a CPF with invalid check digits", () => {
    expect(isValid("12345678900")).toBe(false);
  });

  it("returns false for empty string", () => {
    expect(isValid("")).toBe(false);
  });

  it("returns true when a check digit remainder equals 10 (edge case → digit 0)", () => {
    expect(isValid("10000000108")).toBe(true);
  });
});
