import { USER_ROLE } from "./role.constants";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface IProduct {
  _id: string;
  title: string;
  price: string;
  ratings: string;
  brand: string;
  category: string;
  image: string;
  description: string;
  flashSale: boolean;
  flashSaleOffer?: string;
  discount?: string;
}

export type TOrder = {
  _id: string;
  product: string;
  price: string;
  quantity: string;
  payment: string;
  status: string;
};

export type TUserRole = keyof typeof USER_ROLE;



export interface IDrawerMenuItem {
  title: string;
  path: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
}
