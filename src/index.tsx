import * as React from 'react'
import styles from './styles.module.css'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'

interface Props {
  componentToCreate: ComponentCreate
  onChangeElement: Function
}

interface ComponentCreate {
  align: String
  element: Array<{
    type: string
    text: string
    id: string
    name: string
  }>
}

export const CreateElement = ({
  componentToCreate,
  onChangeElement
}: Props) => {
  return (
    <div>
      {/*componentToCreate.element.map((component) => {
        return createElement(component, onChangeElement)
      })*/}

      {componentToCreate.element.map((component) =>
        createMaterialElement(component, onChangeElement)
      )}
    </div>
  )
}

function createElement(
  component: { type: string; text: string; id: string; name: string },
  onChangeElement: Function
) {
  switch (component.type) {
    case 'input':
      return (
        <div key={component.id}>
          <input
            key={component.id}
            type='text'
            id={component.id}
            name={component.name}
            className={styles.input}
            onChange={(e) => onChangeElement(e, component.id)}
          />
          {component.text}
        </div>
      )
    case 'button':
      return (
        <button
          key={component.id}
          type='button'
          className={styles.button}
          onChange={(e) => onChangeElement(e, component.id)}
        >
          {component.text}
        </button>
      )
    case 'password':
      return (
        <div key={component.id}>
          <input
            key={component.id}
            type='password'
            id={component.id}
            name={component.name}
            className={styles.password}
            onChange={(e) => onChangeElement(e, component.id)}
          />
          {component.text}
        </div>
      )
    case 'checkbox':
      return (
        <div key={component.id}>
          <input
            key={component.id}
            type='checkbox'
            id={component.id}
            name={component.name}
            className={styles.password}
            onChange={(e) => onChangeElement(e, component.id)}
          />
          {component.text}
        </div>
      )
    default:
      return ''
  }
}

function createMaterialElement(
  component: { type: string; text: string; id: string; name: string },
  onChangeElement: Function
) {
  switch (component.type) {
    case 'input':
      return (
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id={component.id}
          key={component.id}
          label='Email Address'
          autoFocus
          onChange={(e) => onChangeElement(e, component.id)}
        />
      )
    case 'button':
      return (
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          id={component.id}
          key={component.id}
          onChange={(e) => onChangeElement(e, component.id)}
        >
          {component.text}
        </Button>
      )
    case 'password':
      return (
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          type='password'
          id={component.id}
          key={component.id}
          autoComplete='current-password'
          onChange={(e) => onChangeElement(e, component.id)}
        />
      )
    case 'checkbox':
      return (
        <div key={component.id}>
          <Checkbox
            value='remember'
            color='primary'
            onChange={(e) => onChangeElement(e, component.id)}
          />
          {component.text}
        </div>
      )
    default:
      return ''
  }
}
