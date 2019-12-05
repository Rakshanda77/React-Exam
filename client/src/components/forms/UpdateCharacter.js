import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { UPDATE_CHARACTER } from '../../queries'

const UpdateCharacter = (props) => {
  const { id, firstName, lastName, onButtonClick, onInputChange } = props
  const [UpdateCharacter] = useMutation(UPDATE_CHARACTER)

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        UpdateCharacter({
          variables: {
            id, firstName, lastName
          }
        })
        onButtonClick()
      }}
    >
      <TextField
        label='First Name'
        defaultValue={firstName}
        placeholder='i.e. John'
        onChange={e => onInputChange('firstName', e.target.value)}
        margin='normal'
        variant='outlined'
        style={{ margin: '10px' }}
      />
      <TextField
        label='Last Name'
        defaultValue={lastName}
        placeholder='i.e. Smith'
        onChange={e => onInputChange('lastName', e.target.value)}
        margin='normal'
        variant='outlined'
        style={{ margin: '10px' }}
      />
      <Button
        type='submit'
        variant='contained'
        color='primary'
        style={{ margin: '10px' }}
      >
        Update Character
      </Button>
      <Button
        onClick={onButtonClick}
        variant='contained'
        color='secondary'
        style={{ margin: '10px'}}
      >
        Cancel
      </Button>
      
    </form>
  )

}

export default UpdateCharacter
