import { Account as TAccount } from "../api/account/Account";

export const ACCOUNT_TITLE_FIELD = "cellphone";

export const AccountTitle = (record: TAccount): string => {
  return record.cellphone || record.id;
};
