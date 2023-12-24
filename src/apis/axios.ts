import _axios, { type AxiosResponse } from 'axios'
import Mock from 'mockjs'

export interface CmdData {
  code: number
  data: any
  message: string
}

export interface CmdError {
  isCmdError: true
  code: number
  data: any
  message: string
}

const instance = _axios.create({
  baseURL: '/api',
})

const instanceMock = _axios.create({
  baseURL:'https://mock.apifox.com/m1/3808301-0-default'
})

instance.interceptors.request.use((config) => {
  return config
})

instance.interceptors.response.use((response: AxiosResponse<CmdData>) => {
  if (response.data.code !== 0) {
    return Promise.reject({
      isCmdError: true,
      ...response.data,
    })
  }
  response.data = response.data.data
  return response
})

export const axios = instance
export const axiosMock = instanceMock