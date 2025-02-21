import { tv } from "tailwind-variants";

export const button = tv({
    base: "",
    variants: {
      type: {
        primary: "",
        inverse: "",
      },
      size: {
        large: "",
        small: "",
      },
    },
  });