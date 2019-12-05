import React from 'react'

import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from 'react-router-dom'
import RemoveDevice from '../buttons/RemoveDevice'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import UpdateDevice from '../forms/UpdateDevice'

const Device = (props) => {
  const { editMode, id, year, brand, model, price, onInputChange ,onButtonClick} = props
  const fullDescription = `${year} ${brand} ${model} ${price}`
  return (
    <div>
      {
        editMode ?
          <UpdateDevice
            id={id}
            year={year}
            brand={brand}
            model={model}
            price={price}
            editMode={editMode}
            onButtonClick={onButtonClick}
            onInputChange={onInputChange}
          />
          :
          <ListItem>
            <ListItemText
              primary={fullDescription}
            />
            <Button
              onClick={onButtonClick}
              variant='contained'
              style={{ margin: '5px' }}
            >
              Edit
            </Button>
             <RemoveDevice
              id={id}
              year={year}
              brand={brand}
              model={model}
              price={price}
              
            />
             
       
   
            
          </ListItem>
          
      }
    </div>
  )
}

export default Device
