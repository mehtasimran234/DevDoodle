import { useCallback, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { githubDark } from "@uiw/codemirror-theme-github";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { AiOutlineFullscreenExit, AiOutlineFullscreen } from "react-icons/ai";
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { FiCopy } from "react-icons/fi";

const Editor = (props) => {
  const { language, displayName, value, onChange, color } = props;
  const [open, setOpen] = useState(true);

  // Functions to manipulate the content of editor
  const handleChange = useCallback((value, viewUpdate) => {
    onChange(value);
  }, []);

  const getIconFromLanguage = (language, color) => {
    switch (language) {
      case "html":
        return <SiHtml5 color={color} size={25} />;
      case "css":
        return <SiCss3 color={color} size={25} />;
      case "javascript":
        return <SiJavascript color={color} size={25} />;
    }
  };

  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className='editor-title'>
        {getIconFromLanguage(language, color)}
        {displayName}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            className='btn btn-copy'
            onClick={() => {
              navigator.clipboard.writeText(value);
              alert("Copied to clipboard");
            }}
          >
            <FiCopy />
          </button>
          <button
            className='btn'
            onClick={() => setOpen((prevOpen) => !prevOpen)}
          >
            {open ? <AiOutlineFullscreenExit /> : <AiOutlineFullscreen />}
          </button>
        </div>
      </div>
      <CodeMirror
        value={value}
        className='code-mirror-wrapper'
        extensions={[eval(language)()]}
        theme={githubDark}
        onChange={handleChange}
        height='100%'
        basicSetup={{
          allowMultipleSelections: false,
          crosshairCursor: false,
          lineWrapping: true,
          lint: true,
          lineNumbers: true,
        }}
      />
    </div>
  );
};
export default Editor;
