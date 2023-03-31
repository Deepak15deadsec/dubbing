// import axios from "./axios.config";
import axios from 'axios'
import Cookies from 'js-cookie'

const getRequest = async (endPoint: string,token:string) => {
  const { data } = await axios({
    url:`${process.env.REACT_APP_SERVER_ENDPOINT}${endPoint}`,
    method:"GET",
    headers:{
      "Authorization": `Bearer ${token}`
    }
  });
  return data;
};

const updateRequest = async ({endPoint, payload}:{endPoint:string, payload:{}}) => {
  const { data } = await axios({
    url:`${process.env.REACT_APP_SERVER_ENDPOINT}${endPoint}`,
    method:"PUT",
    headers:{
      "Authorization": `Bearer ${Cookies.get("key")}`
    },
    data:payload
  })

  return data;
}

const deleteRequest = async ({endPoint, id}:{endPoint:string, id:string}) => {
  const { data } = await axios({
    url:`${process.env.REACT_APP_SERVER_ENDPOINT}${endPoint}/${id}`,
    method:"DELETE",
    headers:{
      "Authorization": `Bearer ${Cookies.get("key")}`
    },
  });
  return data;
}

export { getRequest, updateRequest, deleteRequest };
