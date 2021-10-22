import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";

export const ReviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="comment" multiline source="comment" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="customerId"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="stars" source="stars" />
      </SimpleForm>
    </Edit>
  );
};
