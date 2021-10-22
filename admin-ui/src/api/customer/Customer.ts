import { Address } from "../address/Address";
import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type Customer = {
  address?: Address | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  phone: string | null;
  reviewsId?: Array<Review>;
  updatedAt: Date;
};
