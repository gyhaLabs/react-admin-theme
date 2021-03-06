// @ts-ignore
import RichTextInput from "ra-input-rich-text";
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Create,
  Datagrid,
  DeleteButton,
  Edit,
  EditButton,
  FileField,
  FileInput,
  Filter,
  List,
  RichTextField,
  SelectInput,
  Show,
  ShowButton,
  SimpleForm,
  // DisabledInput,
  SimpleShowLayout,
  TextField,
  TextInput,
} from "react-admin";

const PostFilter = (props: any) => {
  return (
    <Filter {...props}>
      <TextInput label="Search" source="title" alwaysOn />
    </Filter>
  );
};

export const PostList = (props: any) => (
  <List {...props} filters={<PostFilter />}>
    <Datagrid>
      <TextField source="title" />
      <RichTextField source="body" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" />
    </Datagrid>
  </List>
);

export const PostShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <RichTextField source="body" />
      <FileField source="file.src" title="file.title" />
    </SimpleShowLayout>
  </Show>
);

export const PostCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <RichTextInput source="body" />
      <FileInput source="file" label="File" accept="application/pdf">
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Create>
);

export const PostEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      {/* <DisabledInput source="id" /> */}
      <TextInput source="title" />
      <RichTextInput source="body" />
      <SelectInput
        source="rating"
        choices={[
          { id: 1, name: "Good" },
          { id: 2, name: "Okay" },
          { id: 3, name: "Bad" },
        ]}
      />
      <FileInput source="file" label="File" accept="application/pdf">
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Edit>
);
