import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const cartAtom = atomWithStorage("cart", []);
export const modalCart = atom({
  isOpen: false,
  open: () => ({ isOpen: true }),
  close: () => ({ isOpen: false }),
});
