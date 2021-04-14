import axios from 'axios'

axios.defaults.baseURL = 'https://knudens-indkob.herokuapp.com/api'

const fetchGroceries = async (setGroceries) => {
  let response = await axios.get('/groceries')
  setGroceries(response.data.groceries)
}

const addGrocery = async (value) => {
  if (!value) {
    return
  }
  await axios.post('/groceries', { name: value })
}

const deleteGrocery = async (id) => {
  await axios.delete(`/groceries/${id}`)
}

export { fetchGroceries, addGrocery, deleteGrocery }