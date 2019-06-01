import React, { useState } from 'react'
import './App.css'
import { Editor } from 'slate-react'
import Plain from 'slate-plain-serializer'

const initialValue = Plain.deserialize('Hello World')

function App() {
  const [value, setValue] = useState(initialValue)
  return <div className="App">
    <Editor
      value={value}
      onChange={({ value }) => setValue(value)}
    />
  </div>
}

export default App
