"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

import { EditorState, ContentState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import PropTypes from "prop-types";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// Components
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

//import "./WYSIWYG.scss";

const WYSIWYGEditor = (props) => {
  //const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText(props.selected))
  );
  if (globalThis.window === undefined) {
    return null; //return nothing on the server-side
  }
  //console.log("PROPS1 ==> Editor ", props);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    console.log("PROPS333 a ==> Editor ", props);
    console.log(
      "PROPS333 HTML ==> Editor ",
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
    return props.onChange(
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  };

  return (
    <div className="editor">
      <Editor
        editorState={editorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
};

WYSIWYGEditor.propTypes = {
  onChange: PropTypes.func,
  selected: PropTypes.string,
};

WYSIWYGEditor.defaultProps = {
  onChange: () => {},
  selected: "",
};
export default WYSIWYGEditor;
