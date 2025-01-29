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
import dayjs from "dayjs";

// ... (interfaces y funciones convertDate1)

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const [htmlContent, setHtmlContent] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setHtmlContent(""); // Limpiar el contenido al cerrar
    setEditorState(() => EditorState.createEmpty()); // Limpiar el editor
  };

  const handleSave = () => {
    const contentState = stateToHTML(editorState.getCurrentContent());
    setHtmlContent(contentState);
    handleClose();
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      <Button variant="outlined" onClick={handleClickOpen}>
        Mostrar Contenido
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Contenido del Editor</DialogTitle>
        <DialogContent>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />{" "}
          {/* Mostrar el HTML */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
