import { BaseUrl } from "../shared/BaseUrl"
import {myHeaders} from "../shared/MyHeaders"
import Axios from "axios";

const getUsers = async () => {
  const { data } = await Axios.get(`${BaseUrl}/api/user`,
    {
      headers: myHeaders
    })
  return data
}

const getUserById = async (id) => {
    const { data } = await Axios.get(`${BaseUrl}/api/user/${id}`,
      {
        headers: myHeaders
      })
    return data
}

const saveUser = async (user) => {
  const {data} = await Axios.post(`${BaseUrl}/api/user`,user,
    {
      headers: myHeaders
    })
  return data
}

const updateUser = async (user) => {
  const {data} = await Axios.put(`${BaseUrl}/api/user`,user,
    {
      headers: myHeaders
    })
  return data
}

const deleteUserById = async (id) => {
  const {data} = await Axios.delete(`${BaseUrl}/api/user/${id}`,
    {
      headers: myHeaders
    })
  return data
}

export {
  getUsers,
  getUserById,
  saveUser,
  updateUser,
  deleteUserById,
}
