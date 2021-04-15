import React, { useEffect, useState } from 'react'
import { fetchGroceries, addGrocery, deleteGrocery, } from '../modules/groceryServices'
import Checkbox from '@material-ui/core/Checkbox';
import Delete from '@material-ui/icons/DeleteOutlined'
import Icon from '@material-ui/core/Icon';
import { IconButton, TextField } from '@material-ui/core';
import { motion, AnimatePresence } from 'framer-motion'
import { listVariants, staggerVariants } from '../modules/animations'

const GroceryList = () => {
  const [groceries, setGroceries] = useState([])
  const [input, setInput] = useState()
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    fetchGroceries(setGroceries)
  }, [update])

  return (
    <>
      <form style={styles.input}>
        <TextField color='secondary' label="Hvaaa skal vi have?" value={input} onChange={(e) => setInput(e.target.value)} />
        <IconButton color='secondary' onClick={() => addGrocery(input, setUpdate, update)}>
          <Icon>add_circle</Icon>
        </IconButton>
      </form>
      <AnimatePresence>
        <motion.ul style={styles.listContainer} variants={staggerVariants}
          initial='initial' animate='animate' exit='exit'
        >
          {groceries.map(item => {
            return (
              <motion.li key={item.id} style={styles.grocery}
                variants={listVariants}
              >
                <div style={{ display: 'flex', alignItems: 'center', }}>
                  <Checkbox />
                  <p>{item.name}</p>
                </div>
                <Delete style={{ padding: 10, cursor: 'pointer' }} onClick={() => deleteGrocery(item.id, setUpdate, update)} />
              </motion.li>
            )
          }).reverse()
          }
        </motion.ul>
      </AnimatePresence>
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
    margin: '25px 0',
    flex: 1,

  }
}
