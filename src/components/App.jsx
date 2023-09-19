import { useState } from "react";
import Editor from "./Editor";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  return (
    <>
      <div className='section section-top'>
        <Editor
          language='html'
          displayName='HTML'
          value={html}
          onChange={setHtml}
        />
        <Editor
          language='less'
          displayName='CSS'
          value={css}
          onChange={setCss}
        />
        <Editor
          language='javascript'
          displayName='JS'
          value={js}
          onChange={setJs}
        />
      </div>
      <div className='section'>
        <iframe
          title='output'
          sandbox='allow-scripts'
          width='100%'
          height='100%'
          color='blue'
        />
      </div>
    </>
  );
}

export default App;
