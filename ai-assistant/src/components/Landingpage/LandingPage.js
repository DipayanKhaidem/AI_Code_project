import React from 'react';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <header className="Landingnavbar">
        <div className="logo">PDF Summarizer and Code Generator</div>
        <nav className="nav-links">
          <a href="#features-section">Features</a>
          <a href="#how-it-works">How it Works</a>
          <a href="/auth">Try Now</a>
        </nav>
      </header>

      <section className="hero">
        <h1><span className="highlight">AI-Powered</span> PDF Analysis</h1>
        <p>
          Transform lengthy documents into concise summaries with intelligent question-answering capabilities.
          Upload, ask, and get instant insights from your PDFs.
        </p>
        {/* <a href="/summarizer" className="cta-button">Start Analyzing</a> */}
      </section>
      <section className="features-section" id="features-section">
        <h2>Why Choose PDF Summarizer?</h2>
        <p className="subtitle">Powerful AI technology meets intuitive design for seamless document analysis</p>
        <div className="features">
          <div className="feature-card">
            <div className="icon">🤖</div>
            <h3>AI-Powered</h3>
            <p>Advanced NLP to understand and summarize complex documents with remarkable accuracy.</p>
          </div>
          <div className="feature-card">
            <div className="icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Get comprehensive summaries and answers in seconds, not hours of manual reading.</p>
          </div>
          <div className="feature-card">
            <div className="icon">🎯</div>
            <h3>Precise Answers</h3>
            <p>Ask specific questions and receive contextual responses instantly.</p>
          </div>
        </div>
      </section>
<section className="multilingual-section">
  <h2>Speak Your Language</h2>
  <p>
    Whether you're fluent in English or prefer Manipuri, our AI assistant understands both. 
    Ask questions, summarize content, and interact naturally in either language.
  </p>
</section>

      <section className="how-it-works" id="how-it-works">
        <h2>How It Works</h2>
        <p className="subtitle">Three simple steps to unlock insights from your documents</p>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h4>Upload PDF</h4>
            <p>Upload your document (up to 10MB) to our secure platform.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h4>Ask Questions</h4>
            <p>Ask specific questions or request a general summary.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h4>Get Insights</h4>
            <p>Receive intelligent answers and summaries powered by AI.</p>
          </div>
        </div>
      </section>
            <section className="code-generator">
        <h2>AI Code Generator</h2>
        <p className="subtitle">
          Instantly generate clean, functional code in multiple languages using natural language prompts.
        </p>
        <div className="code-gen-content">
          <div className="code-box">
            <h3>Natural Prompt Input</h3>
            <p>Describe the functionality you need, and get production-ready code instantly.</p>
          </div>
          <div className="code-box">
            <h3>Multi-language Support</h3>
            <p>Supports JavaScript, Python, Java, C++, and more — tailored to your project needs.</p>
          </div>
          <div className="code-box">
            <h3>Built-in Debugger</h3>
            <p>Detects and suggests fixes for errors with intelligent LLM feedback.</p>
          </div>
        </div><br></br>
        {/* <a href="/code-generator" className="cta-button">Try Code Generator</a> */}
      </section>

    </div>
  );
}
