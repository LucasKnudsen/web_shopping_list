import axios from 'axios'

axios.defaults.baseURL = 'https://knudens-indkob.herokuapp.com/api'

const fetchGroceries = async (setGroceries) => {
  let response = await axios.get('/groceries')
  setGroceries(response.data.groceries)
}

const addGrocery = async (value, setUpdate, update) => {
  if (!value) {
    return
  }
  await axios.post('/groceries', { name: value })
  setUpdate(!update)
}

const deleteGrocery = async (id, setUpdate, update) => {
  await axios.delete(`/groceries/${id}`)
  setUpdate(!update)
}

export { fetchGroceries, addGrocery, deleteGrocery }