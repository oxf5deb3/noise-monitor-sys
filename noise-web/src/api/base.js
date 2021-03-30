import  HttpClient from 'base'

const BaseApi={
  getBranchList:(params)=>HttpClient.post('aa',params),
}
export  default  BaseApi;
