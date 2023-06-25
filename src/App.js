import {useState} from 'react'
import {marked} from 'marked'
import "./App.css"

function App() {
  const [mark,setMark] = useState(` 
  # Welcome to my React Markdown Previewer! 
  ## Write anything here to see on the right side
  [Example page](https://www.example.com)

  \`code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`
  - First item
  - Second item
  - Third item
  > blockquote

  ![alt text](image.jpg)

  **bold text**
  `)

  marked.setOptions({
    breaks:true
  })
  return (
    <div className="App">
      <div className='container'>
        <textarea id="editor" value={mark} onChange={ e=>{setMark(e.target.value)}}></textarea>
        <article id="preview" 
        dangerouslySetInnerHTML={{
          __html: marked(mark),
         }}></article>
      </div>
    </div>
  );
}

export default App;
