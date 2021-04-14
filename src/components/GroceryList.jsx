import React, { useEffect, useState } from 'react'
import { fetchGroceries, addGrocery, deleteGrocery, } from '../modules/groceryServices'
import Checkbox from '@material-ui/core/Checkbox';
import Delete from '@material-ui/icons/DeleteOutlined'
import Icon from '@material-ui/core/Icon';
import { IconButton, TextField } from '@material-ui/core';

const GroceryList = () => {
  const [groceries, setGroceries] = useState([])
  const [input, setInput] = useState()
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    fetchGroceries(setGroceries)
  }, [update])

  const addNewItem = async () => {
    await addGrocery(input)
    setUpdate(!update)
  }

  const deleteItem = async (id) => {
    await deleteGrocery(id)
    setUpdate(!update)
  }

  return (
    <>
      <form style={styles.input}>
        <TextField color='secondary' label="Hvaaa skal vi have?" value={input} onChange={(e) => setInput(e.target.value)} />
        <IconButton color='secondary' onClick={addNewItem}>
          <Icon>add_circle</Icon>
        </IconButton>
      </form>
      <ul style={styles.listContainer}>
        {groceries.map(item => {
          return (
            <li key={item.id} style={styles.grocery}>
              <div style={{ display: 'flex', alignItems: 'center', }}>
                <Checkbox />
                <p>{item.name}</p>
              </div>
              <Delete style={{ padding: 10, cursor: 'pointer' }} onClick={() => deleteItem(item.id)} />
            </li>
          )
        }).reverse()
        }
      </ul>
    </>
  )
}

export default GroceryList

const styles = {
  listContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  grocery: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #333',
    margin: '7px 10px',
    borderRadius: 5,
    justifyContent: 'space-between'
  },
  input: {
    textAlign: 'center',
    margin: '25px 0'

  }
}
