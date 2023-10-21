import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const html_code = document.querySelector('.html-code textarea');
    const css_code = document.querySelector('.css-code textarea');
    const js_code = document.querySelector('.js-code textarea');
    const result = document.querySelector('#result');

    function run() {
      localStorage.setItem('html_code', html_code.value);
      localStorage.setItem('css_code', css_code.value);
      localStorage.setItem('js_code', js_code.value);

      result.contentDocument.body.innerHTML = `<style>${localStorage.css_code}</style>` + localStorage.html_code;
      result.contentWindow.eval(localStorage.js_code);
    }

    const handleKeyUp = () => run();

    if (html_code && css_code && js_code) {
      html_code.addEventListener('keyup', handleKeyUp);
      css_code.addEventListener('keyup', handleKeyUp);
      js_code.addEventListener('keyup', handleKeyUp);
    }

    if (html_code) html_code.value = localStorage.html_code;
    if (css_code) css_code.value = localStorage.css_code;
    if (js_code) js_code.value = localStorage.js_code;
  }, []);

  return (
    
    <div className="code-editor">
      <div className="code">
        <div className="html-code">
          <h1> <img src="./images/html2.png" alt="" srcSet="" /> HTML </h1>
          <textarea></textarea>
        </div>

        <div className="css-code">
          <h1> <img src="./images/CSS2.png" alt="" srcSet="" /> CSS </h1>
          <textarea></textarea>
        </div>

        <div className="js-code">
          <h1> <img src="./images/js3.png" alt="" srcSet="" /> JavaScript </h1>
          <textarea spellCheck="false"></textarea>
        </div>
      </div>

      <iframe src=""  id="result" title='Result'></iframe>
    </div>
  );
}

export default App;
