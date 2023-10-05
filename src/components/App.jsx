import { useState, useEffect } from "react";
import Editor from "./Editor";
import Header from "./Header";
import useLocalStorage from "../hooks/useLocalStorage";

function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSrcDoc(
        `
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
        `
      );
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [html, css, js]);

  return (
    <>
      <Header />
      <div className='section section-top'>
        <Editor
          language='html'
          displayName='HTML'
          value={html}
          onChange={setHtml}
          color='#E44D27'
        />
        <Editor
          language='css'
          displayName='CSS'
          value={css}
          onChange={setCss}
          color='#1F8FE7'
        />
        <Editor
          language='javascript'
          displayName='JS'
          value={js}
          onChange={setJs}
          color='#FFFF00'
        />
      </div>
      <div className='section'>
        <iframe
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          frameBorder='0'
          width='100%'
          height='100%'
        />
      </div>
    </>
  );
}

export default App;
