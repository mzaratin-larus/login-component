import React from 'react'

import { CreateElement } from 'component'
import 'component/dist/index.css'

const App = () => {
  const componentToCreate = {
    align: 'vertical',
    element: [
      {
        type: 'input',
        text: '',
        id: 'id1',
        name: 'name1',
        mandatory: true
      },
      {
        type: 'button',
        text: 'testo di esempio',
        id: 'id2',
        name: 'name2',
        mandatory: false
      },
      {
        type: 'password',
        text: '',
        id: 'id3',
        name: 'name3',
        mandatory: true
      },
      {
        type: 'checkbox',
        text: '',
        id: 'id4',
        name: 'name4',
        mandatory: true
      }
    ]
  }

  return (
    <CreateElement
      componentToCreate={componentToCreate}
      onChangeElement={handleElement}
    />
  )
}

function handleElement(event: Function, id: String) {
  console.log(id, event)
}

export default App
