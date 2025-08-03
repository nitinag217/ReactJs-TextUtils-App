import React from 'react'
import textHandlers from './Utility/TextHandlers';
import handleCopyToClipboard from './Utility/TextCopyHandler';

export default function TextForm({heading = "Enter Text Here"}: {heading?: string}) {

    const [text, setText] = React.useState("");
    const [copyButtonText, setCopyButtonText] = React.useState("Copy to Clipboard");

  return (
    <div>
        <div className="container my-3">
            <h1>{heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows={8} value={text} onChange={(e) => setText(textHandlers.handleChange(e))}></textarea>
            </div>
            <div className="d-flex flex-wrap flex-column flex-sm-row">
                <button className="btn btn-info mb-2 mb-sm-0 me-sm-2" onClick={() => handleCopyToClipboard(text, setCopyButtonText)}>{copyButtonText}</button>
                <button className="btn btn-primary mb-2 mb-sm-0 me-sm-2" onClick={() => setText(textHandlers.handleUppercase(text))}>Convert to Uppercase</button>
                <button className="btn btn-primary mb-2 mb-sm-0 me-sm-2" onClick={() => setText(textHandlers.handleLowercase(text))}>Convert to Lowercase</button>
                <button className="btn btn-primary mb-2 mb-sm-0 me-sm-2" onClick={() => setText(textHandlers.handleTitleCase(text))}>Convert to Title Case</button>
                <button className="btn btn-secondary" onClick={() => setText(textHandlers.handleClear())}>Clear</button>
            </div>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.trim() === '' ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
        </div>
    </div>
  )
}