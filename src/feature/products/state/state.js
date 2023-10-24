import { atom } from "jotai";

const openSideBarAtom = atom(false);
const modalAtom = atom({
  isOpen: false,
  payload: null,
  toggle: (current) => ({ isOpen: !current.isOpen }),
  open: (payload) => ({ isOpen: true, payload }),
  close: () => ({ isOpen: false }),
});

export { openSideBarAtom, modalAtom };
