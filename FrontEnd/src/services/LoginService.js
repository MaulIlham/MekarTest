import Axios from "axios"
import { BaseUrl } from "../shared/BaseUrl"

const signIn=async(account)=>{
    const {data} =await Axios.post(BaseUrl+'/api/auth/signin',account)
    return data
}

export{
    signIn
}
