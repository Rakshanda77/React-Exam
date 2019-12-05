import React from 'react'

import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import UpdateCharacter from '../forms/UpdateCharacter'
import RemoveCharacter from '../buttons/RemoveCharacter'
import { Link } from 'react-router-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Devices from '../lists/Devices'
import Device from '../listItems/Device'

const Character = (props) => {
  const { editMode, id, firstName, lastName, onButtonClick, onInputChange } = props
  const fullName = `${firstName} ${lastName}`
  return (
    <div>
      {
        editMode ?
          <UpdateCharacter
            id={id}
            firstName={firstName}
            lastName={lastName}
            editMode={editMode}
            onButtonClick={onButtonClick}
            onInputChange={onInputChange}
          />
          :
          <ListItem>
            <ListItemText
              primary={fullName}
            />
            <Button
              onClick={onButtonClick}
              variant='contained'
              style={{ margin: '5px' }}
            >
              Edit
            </Button>
            <RemoveCharacter
              id={id}
              firstName={firstName}
              lastName={lastName}
            />
           
          </ListItem>
          
         
      }
         <Device/>
      
    </div>
  )
}

export default Character
