import axios from 'axios'
import {resolvePath} from "vue-router/src/util/path";

axios.defaults.timeout=60000;
axios.defaults.withCredentials=true;
axios.defaults.baseURL="/api/services/";
axios.interceptors.response.use(response=>{
  if(response.status===200){
    return response.data;
  }else{
    Promise.reject(response);
  }
})


export default {
  post:async function(url,params){
    return new Promise((resolve,reject)=>{
      axios.post(url,JSON.stringify(params),{
        headers:{"Content-Type":'application/json'}
      })
        .then(res=>{
          resolve(res);
        })
        .catch(err=>{
          reject(err.data?err.data:err);
        })

    });
  },
  get:async function(url,params){
    return new Promise((resolve,reject)=>{
      axios.get(url,{params})
        .then(res=>{
          resolve(res.data);
        })
        .catch(err=>{
          reject(err.data?err.data:err);
        })

    })
  }
}
