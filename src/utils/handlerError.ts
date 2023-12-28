import type { CmdError } from '@/apis/axios'
import { message } from 'ant-design-vue'
import { AxiosError } from 'axios'

const isAxiosError = (error: any): error is AxiosError => {
  return error.config
}

const isCmdError = (error: any): error is CmdError => {
  return error.isCmdError
}

export const handleError = (error: unknown) => {
  if (isAxiosError(error)) {
    // console.error('isAxiosError')
    message.error('AxiosError' + error.message)
  } else if (isCmdError(error)) {
    // console.error(error.message)
    message.error('CmdError' + error.message)
  } else {
    // console.error(error)
    message.error(error?.message || '未知错误')
  }
}
