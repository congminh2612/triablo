import { atom } from "jotai";

export const modalHeader = atom({
  isOpen: false,
  open: () => ({ isOpen: true }),
  close: () => ({ isOpen: false }),
});
