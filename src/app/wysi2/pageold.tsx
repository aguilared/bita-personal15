"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
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

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const createFormDefaultValues: DefaultValues<CreateFormValues> = {
    tipo_event_id: 0,
    events_id: 0,
    description: "",
    event_date: convertDate1(dateBitacora),
    image: true,
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (editorState) => {
    const contentState = stateToHTML(editorState.getCurrentContent());
    // JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    console.log(contentState);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Abrir Modal a ver
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Usar Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
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
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    &nbsp;Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
