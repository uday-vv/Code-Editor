import React, {useState, useEffect} from 'react';
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage';

function App() {
    const [html, setHtml]=useLocalStorage('html', '')
    const [css, setCss]=useLocalStorage('css', '')
    const [js, setJs]=useLocalStorage('js', '')
    

    const [open, setOpen] = useState(true)

    const srcDoc = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `

    
    return (
        <>
            <div id="body">
                <div id="th1" className="display type-space"/*"top half display editor"*/>
                    <Editor 
                        language="xml" 
                        displayName="HTML"
                        value={html}
                        onChange={setHtml}
                    />
                    <br></br>
                    
                    <div id="bh1" className="display">
                        
                    <iframe id="iframe"
                        title="output"
                        srcDoc={srcDoc}
                        sandbox="allow-scripts"
                        frameBorder="0"
                        width="100%"
                        height="100%"
                    />
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}

export default App;