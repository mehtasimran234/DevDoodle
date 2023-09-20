import { useState } from "react";
import Editor from "./Editor";
import Header from "./Header";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  const srcDoc = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
  `;

  return (
    <>
      <Header />
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
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          width='100%'
          height='100%'
          frameBorder='0'
        />
      </div>
    </>
  );
}

export default App;
