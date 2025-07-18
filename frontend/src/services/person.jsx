import axios from 'axios'

const url = '/api/persons'

const getPersons = () => {
    const req = axios.get(url)
    return req.then(res => res.data)
}

const addPersons = (data) => {
    const req =  axios.post(url, data)
    return req.then(res => res.data)
}

const updatePerson = (id, person) => {
    const req = axios.put(`${url}/${id}`, person)
    return req.then(res => res.data)
}
const deletePerson = (id)  => {
    return axios.delete(`${url}/${id}`)
}


export { getPersons, addPersons, updatePerson, deletePerson}