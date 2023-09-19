import CodeMirror from "@uiw/react-codemirror";
import { material } from "@uiw/codemirror-theme-material";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { less } from "@codemirror/lang-less";

const Editor = (props) => {
  const { language, displayName, value, onChange } = props;

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div className='editor-container'>
      <div className='editor-title'>
        {displayName}
        <button>OC</button>
      </div>
      <CodeMirror
        value="console.log('hello world!');"
        className='code-mirror-wrapper'
        height='200px'
        extensions={[eval(language)()]}
        theme={material}
        basicSetup={{
          foldGutter: true,
          dropCursor: false,
          allowMultipleSelections: false,
          indentOnInput: false,
        }}
        onBeforeInput={handleChange}
      />
    </div>
  );
};
export default Editor;
