import { MainMenu } from "src/app/models/menu";

export const topMenu: Array<MainMenu> = [
  { label: "Vendors", link: "vendors", icon: "store_front" },
  { label: "Order History", link: "order_history", icon: "list_alt" },
  { label: "Location", link: "location", icon: "location_on" },
  { label: "Account", link: "account", icon: "person" },
  
  { label: "Admin", link: "admin", icon: "person" },
];
export const bottomMenu: Array<MainMenu> = [
  { label: "Logout", link: "logout", icon: "logout" },
  
];
