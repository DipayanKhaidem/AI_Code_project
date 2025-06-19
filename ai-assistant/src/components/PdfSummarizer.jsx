import React ,{useRef, useState} from 'react';

const PdfSummarizer=()=>{
    const [pdfFile,setPdfFile]=useState(null);
    const [question, setQuestion]=useState('');
    const [answer, setAnswer]=useState('');
    const fileInputRef=useRef(null); //ref to hidden input
    const [promptLanguage, setPromptLanguage]=useState('english');

    const handleFileChange=(e)=>{
        setPdfFile(e.target.files[0]);
    };

    const handleQuestionSubmit=()=>{
        if(question.trim()){
            setAnswer("This is a sample answer. Replace with model output");
        }
    };

    const handleSelectClick=()=>{
        if(fileInputRef.current){
        fileInputRef.current.click();
        }
    };

    return(
        <div className='container'>
            <h2>PDF Summarizer</h2>

            <div className='card'>
                <p><strong>Upload your pdf</strong></p>
                <input type='file' accept='.pdf' onChange={handleFileChange}  ref={fileInputRef} style={{display:'none'}}/>
                <button className='upload-btn' onClick={handleSelectClick}>Select PDF</button>

                {pdfFile && <p className='file-info'>{pdfFile.name}</p>}
                <p>Maximum file size:10mb</p>

                
                    <div style={{marginTop:'2rem'}}>
                        <label htmlFor='language'><strong>Prompt Language:</strong></label>
                        <select id="language" value={promptLanguage} onChange={(e)=>setPromptLanguage(e.target.value)} style={{marginBottom:'1rem',display:'block',padding:'0.5rem',fontSize:'1rem'}}>
                            <option value="english">English</option>
                            <option value="manipuri">Manipuri</option>
                        </select>
                        <label htmlFor='question'><strong>Ask a question related to the PDF</strong></label>
                        <textarea id='question' rows='3' value={question} onChange={(e)=>setQuestion(e.target.value)}
                        placeholder='Enter your question here ...'/>
                        <button className='generate-btn' onClick={handleQuestionSubmit}>Get Answer</button>
                    </div>

                    {answer &&(
                        <div style={{marginTop:'1rem'}}>
                            <strong>Answer:</strong>
                            <p>{answer}</p>
                        </div>
                    )}
                    
            </div>
        </div>
    );
}
export default PdfSummarizer;
// }
// export default function PdfSummarizer(){
//     return(
//         <div className="card">
//             <h2>PDF SUMMARIZER & QA</h2>
//             <div className="upload-box">
//                 <span className="icon">📄</span>
//                 <p><strong>Upload your pdf</strong></p>
//                 <p>Drag and drop your pdf here, or click to select</p>
//                 <button className="upload-btn">Select PDF</button>
//                 <p className="file-info">Maximum file size:10MB</p>
//            </div>
//         </div>
//     );
