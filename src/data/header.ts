import { PHONE } from "../config";

export const MENU_ITEMS = [
  {
    name: "Menu",
    href: "/#menu",
  },
  {
    name: "Reservations",
    href: "/#reservations",
  },
  {
    name: "Call",
    href: `tel:${PHONE.replace(/\D/g, "")}`,
  },
];
