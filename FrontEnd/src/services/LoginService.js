import Axios from "axios"
import { BaseUrl } from "../shared/BaseUrl"

const signIn=async(user)=>{
    const {data} =await Axios.post(BaseUrl+'/api/auth/signin',{username:user.userName, password:user.password})
    return data
}

export{
    signIn
}