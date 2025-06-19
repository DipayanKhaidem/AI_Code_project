import React, { useState } from 'react';
import './CodeGenerator.css';

const CodeGenerator = () => {
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [generatedCode, setGeneratedCode] = useState('');

  const handleGenerate = () => {
    setGeneratedCode(`// Sample generated ${language} code:\nconsole.log("Hello from AI Assistant!");`);
  };

  const handleOptimize = () => {
    setGeneratedCode((prevCode) => `// Optimized version\n${prevCode}`);
  };

  return (
    <div className="codegen-container">
      <div className="codegen-left">
        <label className="small-label">Language:</label>
        <select
          className="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="c++">C++</option>
        </select>

        <textarea
          className="description-box"
          rows="10"
          placeholder="Describe the code you want to generate..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <center><button className="generate-btn" onClick={handleGenerate}>Generate Code</button></center>
      </div>

      <div className="codegen-right">
        <h3>Generated Code</h3>
        <pre className="code-box">
          {generatedCode || '// Code will appear here...'}
        </pre>
        <center><button className="optimize-btn" onClick={handleOptimize}>Optimize Code</button></center>
      </div>
    </div>
  );
};

export default CodeGenerator;
