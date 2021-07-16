import React, {useState, useEffect} from 'react';
import Editor from './Editor';

function App() {
    const [html, setHtml]=useState('')
    const [css, setCss]=useState('')
    const [js, setJs]=useState('')
    const [srcDoc, setSrcDoc]=useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
            <html>
                <body>${html}</body>
                <style>${css}</style>
                <script>${js}</script>
            </html>
        `)
        }, 250)
    }, [html, css, js])

    return (
        <>
        <div id="body">
            <div id="th1" className="tophalf"/*"display editor"*/>
                <Editor 
                    language="xml" 
                    displayName="HTML"
                    value={html}
                    onChange={setHtml}
                />
                <br></br>
                <Editor 
                    language="css" 
                    displayName="CSS"
                    value={css}
                    onChange={setCss}
                />
                <br></br>
                <Editor 
                    language="javascript" 
                    displayName="JAVASCRIPT"
                    value={js}
                    onChange={setJs}
                />
            </div>
            <div id="bh1" className="bottomhalf"/*"display"*/>
                <iframe
                    srcDoc={srcDoc}
                    title="screen"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
        </>
    )
}

export default App;