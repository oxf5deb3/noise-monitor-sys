import HttpClient from 'http'
import BaseApi from 'base'

const userApi={
  getId:()=>HttpClient.get('getId',{}),
  ...BaseApi
}

export default  userApi;
