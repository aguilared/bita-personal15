"use client";
import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  useForm,
  Controller,
  SubmitHandler,
  DefaultValues,
} from "react-hook-form";
import WYSIWYGEditor from "@/styles/WYSIWYG";
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
const convertDate1 = (date: any) => {
  return dayjs(date).format("YYYY/MM/DD hh:mm");
};

const AddBlog = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleChange = (editorState: {
    getCurrentContent: () => Draft.Model.ImmutableData.ContentState;
  }) => {
    const contentState = stateToHTML(editorState.getCurrentContent());
    // JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    console.log(contentState);
  };

  const createFormDefaultValues: DefaultValues<CreateFormValues> = {
    tipo_event_id: 0,
    events_id: 0,
    description: "",
    event_date: convertDate1(dateBitacora),
    image: true,
  };

  const {
    register: registerCreateField,
    handleSubmit: handleCreateFormSubmit,
    control,
    formState: { errors },
  } = useForm<CreateFormValues>({
    defaultValues: createFormDefaultValues,
  });

  return (
    <div className="container">
      <div className="card-wrapper-tutorial">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">New Code Snippet</h4>
            <form autoComplete="off">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  type="text"
                  className="form-control"
                  placeholder="title"
                  name="title"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="body">Body</label>
                <Editor
                  defaultEditorState={editorState}
                  onEditorStateChange={(editorState) => {
                    setEditorState(editorState);
                    handleChange(editorState);
                  }}
                  wrapperClassName="wrapper-class"
                  editorClassName="editor-class"
                  toolbarClassName="toolbar-class"
                />
              </div>

              <div className="md:w-11/12 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="description"
                >
                  Descripcion evento1
                </label>
                <Controller
                  name="description"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <Editor
                      defaultEditorState={editorState}
                      onEditorStateChange={(editorState) => {
                        setEditorState(editorState);
                        handleChange(editorState);
                      }}
                      wrapperClassName="wrapper-class"
                      editorClassName="editor-class"
                      toolbarClassName="toolbar-class"
                    />
                  )}
                />
                {errors.description && (
                  <p className="text-red-600 text-1xl font-bold">
                    This field is required
                  </p>
                )}{" "}
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  &nbsp;Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
