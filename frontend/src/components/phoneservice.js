import axios from 'axios'

const baseUrl = "/api/persons"


const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const addNew = (newPerson) => {
  const request = axios.post(baseUrl, newPerson)
  return request.then(response => response.data)
}

const removePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

const update = (id,newPerson) => {
  const request = axios.put(`${baseUrl}/${id}`, newPerson)
  return request.then(response=>response.data)
  
}

export default {getAll, addNew, removePerson, update}