import React, { useEffect, useState } from 'react'
import { fetchGroceries, addGrocery, deleteGrocery, } from '../modules/groceryServices'
import Checkbox from '@material-ui/core/Checkbox';
import Delete from '@material-ui/icons/DeleteOutlined'

const GroceryList = () => {
  const [groceries, setGroceries] = useState([])
  const [input, setInput] = useState()

  useEffect(() => {
    fetchGroceries(setGroceries)
  }, [])

  return (

    <>

      <ul style={styles.listContainer}>
        {groceries.map(item => {
          return (
            <li key={item.id} style={styles.grocery}>
              <div style={{ display: 'flex', alignItems: 'center', }}>
                <Checkbox />
                <p>{item.name}</p>
              </div>
              <Delete style={{ padding: 10, cursor: 'pointer' }} onClick={() => deleteGrocery(item.id)} />
            </li>
          )
        })
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
  }
}
