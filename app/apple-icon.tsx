import { brandIconContentType, createBrandIcon } from "@/lib/brand-icon";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = brandIconContentType;

export default function AppleIcon() {
  return createBrandIcon(size.width);
}
