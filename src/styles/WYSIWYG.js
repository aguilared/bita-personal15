import React, { useState } from "react";
import dynamic from "next/dynamic";
// Components
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
//import "./WYSIWYG.scss";

const WYSIWYGEditor = (props) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  if (typeof window === "undefined") {
    return null; //return nothing on the server-side
  }
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    console.log("PROPS ==> Editor ", props);
    console.log("EditorState ", editorState);
    return props.onChange(
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  };

  return (
    <React.Fragment>
      <div className="editor">
        <Editor
          placeholder="Tell a event..."
          editorState={editorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          onEditorStateChange={onEditorStateChange}
        />
      </div>
    </React.Fragment>
  );
};

export default WYSIWYGEditor;
