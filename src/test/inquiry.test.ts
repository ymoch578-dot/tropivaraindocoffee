import { describe, expect, it } from "vitest";
import { validateInquiry } from "@/lib/inquiry";
import { products } from "@/data/products";
import { BUSINESS_EMAIL, whatsappLink } from "@/config/contact";

const ok = { name: "A", company: "B", email: "a@b.co", product: "Excelsa Grade 1", message: "Need 2 tons monthly" };

describe("inquiry rules", () => {
  it("requires all fields", () => {
    expect(Object.keys(validateInquiry({ name: "", company: "", email: "", product: "", message: "" }))).toHaveLength(5);
  });
  it("rejects invalid email", () => {
    expect(validateInquiry({ ...ok, email: "abc" }).email).toBe("invalidEmail");
  });
  it("accepts a valid inquiry", () => {
    expect(validateInquiry(ok)).toEqual({});
  });
  it("uses the business email", () => {
    expect(BUSINESS_EMAIL).toBe("salestropivaraindonesia@gmail.com");
  });
  it("has no WhatsApp link until a number is configured", () => {
    expect(whatsappLink("hi")).toBeNull();
  });
  it("catalog has 15 products across 8 origins with no price field", () => {
    expect(products).toHaveLength(15);
    expect(new Set(products.map((p) => p.originId)).size).toBe(8);
    expect(products.some((p) => "price" in p)).toBe(false);
  });
});
