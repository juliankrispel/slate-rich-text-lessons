import React, { useState } from 'react'
import './App.css'
import { Editor } from 'slate-react'
import Plain from 'slate-plain-serializer'

const initialValue = Plain.deserialize('Press cmd + b to toggle bold')

const boldPlugin = {
  onKeyDown: (event, editor, next) => {
    // has the user pressed cmd + b
    if (event.key === 'b' && event.metaKey) {
      return editor.toggleMark('bold')
    }

    return next()
  },
  renderMark: (props, editor, next) => {
    if (props.mark.type === 'bold') {
      return <strong>{props.children}</strong>
    }

    return next()
  }
}

const italicPlugin = {
  onKeyDown: (event, editor, next) => {
    // has the user pressed cmd + i
    if (event.key === 'i' && event.metaKey) {
      return editor.toggleMark('italic')
    }

    return next()
  },
  renderMark: (props, editor, next) => {
    if (props.mark.type === 'italic') {
      return <i>{props.children}</i>
    }

    return next()
  }
}

function App() {
  const [value, setValue] = useState(initialValue)
  return <div className="App">
    <Editor
      value={value}
      plugins={[ boldPlugin, italicPlugin ]}
      onChange={({ value }) => setValue(value)}
    />
  </div>
}

export default App
