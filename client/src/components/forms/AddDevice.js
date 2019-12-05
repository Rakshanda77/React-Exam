import React from 'react'

import Button from '@material-ui/core/Button'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import { useMutation } from '@apollo/react-hooks'
import { useQuery } from '@apollo/react-hooks'

import { ADD_DEVICE, GET_DEVICES } from '../../queries';

const AddDevice = ({id, year, brand, model, price,characterId }) => {

  const [addDevice] = useMutation(
    ADD_DEVICE,
    {
      update(cache, { data: { addDevice } }) {
        const { devices } = cache.readQuery({ query: GET_DEVICES })
        cache.writeQuery({
          query: GET_DEVICES,
          data: { devices: devices.concat([addDevice])}
        })
      }
    }
  )
  const { loading, error, data } = useQuery(GET_DEVICES)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  console.log(data)
 return (
      
        <form onSubmit={e => {
          e.preventDefault()
          addDevice({
            variables: {
              id,year,brand,model,price,characterId
            },
            optimisticResponse: {
              __typename: 'Mutation',
              addDevice: {
                __typename: 'Device',
                id,
                year,
                brand,
                model,
                price,
                characterId

              }
            }
          })
        }}
        className="Deviceform">
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
        label='Brand'
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
        defaultValue='1500'
        placeholder='i.e. 1500'
        type='number'
        margin='normal'
        variant='outlined'
        style={{ display: 'flex', margin: '10px' }}
      />
      <Select
        native
        defaultValue='1'
        value='1'
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
        style={{ marginTop: '20px', alignItems: 'center', marginLeft: '10px' }}
      >
        Add Device
      </Button>
    </form>
  )
}

export default AddDevice