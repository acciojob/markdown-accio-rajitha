import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown"; 
import '../styles/App.css'

function App() {
  const [markdownText, setMarkdownText] = useState("");
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500); 
  }, []);

  const handleChange = (e) => {
    setMarkdownText(e.target.value);
  };

  return (
    <div className="app">
      <div className="textarea">
        <textarea
          value={markdownText}
          onChange={handleChange}
          placeholder="Write markdown here..."
        />
      </div>

      <div className="preview">
        {loading ? (
          <p className="loading">Now I can render any React component on any DOM node I want using ReactDOM.render</p>
        ) : (
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        )}
      </div>
    </div>
  );
}

export default App;

