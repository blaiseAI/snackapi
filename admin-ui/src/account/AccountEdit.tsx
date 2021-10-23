import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="cellphone" source="cellphone" />
        <TextInput label="email" source="email" type="email" />
      </SimpleForm>
    </Edit>
  );
};
