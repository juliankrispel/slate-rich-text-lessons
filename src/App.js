import React, { useState } from 'react'
import './App.css'
import { Editor } from 'slate-react'
import Plain from 'slate-plain-serializer'

const initialValue = Plain.deserialize('One\nTwo\nThree')

function App() {
  const [value, setValue] = useState(initialValue)
  return <div className="App">
    <Editor
      renderBlock={(props, editor, next) => {
        return <li>{props.children}</li>
      }}
      renderDocument={(props) => {
        return <main>
          <h1 contentEditable={false}>My sweet document</h1>
          <ul>
            {props.children}
          </ul>
        </main>
      }}
      value={value}
      onChange={({ value }) => setValue(value)}
    />
  </div>
}

export default App
