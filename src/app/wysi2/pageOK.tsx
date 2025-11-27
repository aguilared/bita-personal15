"use client";
import * as React from "react";

import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useForm, Controller } from "react-hook-form";
import dayjs from "dayjs";

interface CreateFormValues {
  id: number;
  bitacora_id: number;
  tipo_event_id: number;
  events_id: number;
  description: string;
  event_date: string;
  image: boolean;
}

const dateBitacora = new Date();
const convertDate1 = (date: any) => dayjs(date).format("YYYY/MM/DD hh:mm");

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const { handleSubmit, control } = useForm<CreateFormValues>({
    defaultValues: {
      tipo_event_id: 0,
      events_id: 0,
      description: "",
      event_date: convertDate1(dateBitacora),
      image: true,
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data: CreateFormValues) => {
    const contentState = stateToHTML(editorState.getCurrentContent());
    data.description = contentState; // Assign HTML content to description
    console.log("Form data:", data);
    handleClose(); // Close the dialog after submit
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {" "}
        {/* Add onSubmit */}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
              onBlur={() => field.onBlur()} // Important for validation
              onChange={() =>
                field.onChange(stateToHTML(editorState.getCurrentContent()))
              }
            />
          )}
        />
      </form>
    </div>
  );
}
