import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AccountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="cellphone" source="cellphone" />
        <TextInput label="email" source="email" type="email" />
      </SimpleForm>
    </Create>
  );
};
