import React from 'react'
import Button from '@material-ui/core/Button'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import { useMutation } from '@apollo/react-hooks'
import { UPDATE_DEVICE} from '../../queries'


const UpdateDevice = (props) => {
  const { id,year,brand,model,price, characterId,onButtonClick} = props
  const [UpdateDevice] = useMutation(UPDATE_DEVICE)

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        UpdateDevice({
          variables: {
            id, year,brand,model,price,characterId
          }
        })
        onButtonClick()
      }}
    >
      <TextField
        label='Year'
        defaultValue='2019'
        placeholder='i.e. 2019'
        type='number'
        margin='normal'
        variant='outlined'
        style={{ display: 'flex', margin: '10px' }}
      />
      <TextField
        label='brand'
        defaultValue='Apple'
        placeholder='i.e. Apple'
        margin='normal'
        variant='outlined'
        style={{ display: 'flex', margin: '10px' }}
      />
      <TextField
        label='Model'
        defaultValue='iPhone'
        placeholder='i.e. iPhone'
        margin='normal'
        variant='outlined'
        style={{ display: 'flex', margin: '10px' }}
      />
      <TextField
        label='Price'
        defaultValue='1000'
        placeholder='i.e. 5000'
        type='number'
        margin='normal'
        variant='outlined'
        style={{ display: 'flex', margin: '10px' }}
      />
      <Select
        native
        value='some id'
        input={
          <OutlinedInput name='character' id="outlined-age-native-simple" />
        }
        style={{ display: 'flex', margin: '10px' }}
      >
        <option value='id'>John Smith</option>
      </Select>
      <Button
        type='submit'
        variant='contained'
        color='primary'
        style={{ margin: '10px' }}
      >
        Update Device
      </Button>
      <Button
        variant='contained'
        color='secondary'
        style={{ margin: '10px' }}
      >
        Cancel
      </Button>
    </form>
  )
}
export default UpdateDevice