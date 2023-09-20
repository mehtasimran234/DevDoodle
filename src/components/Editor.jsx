import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { less } from "@codemirror/lang-less";

const Editor = (props) => {
  const { language, displayName, value, onChange } = props;

  const handleChange = (editor, data, value) => {
    console.log(123);
    onChange(value);
  };

  return (
    <div className='editor-container'>
      <div className='editor-title'>
        {displayName}
        <button>OC</button>
      </div>
      <CodeMirror
        value={value}
        className='code-mirror-wrapper'
        extensions={[eval(language)()]}
        theme={dracula}
        options={{
          lineWrapping: true,
          lint: true,
          lineNumbers: true,
        }}
        onChange={handleChange}
        height='100%'
      />
    </div>
  );
};
export default Editor;
