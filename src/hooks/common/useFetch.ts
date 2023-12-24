import { axios ,axiosMock, CmdError } from '@/apis/axios'
import { handleError } from '@/utils/handlerError'

export const useFetch = (isMock:boolean = false) => {
  const request = isMock ? axiosMock : axios
  const get = <T>(url: string, params?: Record<string, unknown>) => { 
    const data = ref<T|undefined>()
    const loading = ref<boolean>(false)
    const error = ref<CmdError>()
    const run = async () => {
      loading.value = true
      try {
        const res = await request.get(url, { params })
        data.value = res.data.data
      } catch (err:any) {
        error.value = err
        handleError(err)
        console.error(err)
      } finally {
        loading.value = false
      }
    }
    return {
    data,
    run,
    loading,
    error
  }
  }
  const post = <T>(url: string, params?: Record<string, unknown>) => {
    const data = ref<T|undefined>()
    const loading = ref<boolean>(false)
    const error = ref<CmdError>()
    const run = async () => {
      loading.value = true
      try {
        const res = await request.post(url, params)
        data.value = res.data.data
      } catch (err:any) {
        error.value = err
        handleError(err)
        console.error(err)
      } finally {
        loading.value = false
      }
    }
    return {
      data,
      run,
      loading,
      error
    }
  }
  const put = <T>(url: string, params?: Record<string, unknown>) => {
    const data = ref<T|undefined>()
    const loading = ref<boolean>(false)
    const error = ref<CmdError>()
    const run = async () => {
      loading.value = true
      try {
        const res = await request.put(url, params)
        data.value = res.data.data
      } catch (err:any) {
        error.value = err
        handleError(err)
        console.error(err)
      } finally {
        loading.value = false
      }
    }
    return {
      data,
      run,
      loading,
      error
    }
  }
  const patch = <T>(url: string, params?: Record<string, unknown>) => {
    const data = ref<T|undefined>()
    const loading = ref<boolean>(false)
    const error = ref<CmdError>()
    const run = async () => {
      loading.value = true
      try {
        const res = await request.patch(url, params)
        data.value = res.data.data
      } catch (err:any) {
        error.value = err
        handleError(err)
        console.error(err)
      } finally {
        loading.value = false
      }
    }
    return {
      data,
      run,
      loading,
      error
    }
  }
  const del = <T>(url: string, params?: Record<string, unknown>) => {
    const data = ref<T|undefined>()
    const loading = ref<boolean>(false)
    const error = ref<CmdError>()
    const run = async () => {
      loading.value = true
      try {
        const res = await request.delete(url, { params })
        data.value = res.data.data
      } catch (err:any) {
        error.value = err
        handleError(err)
        console.error(err)
      } finally {
        loading.value = false
      }
    }
    return {
      data,
      run,
      loading,
      error
    }
  }
  return {
    get,
    post,
    put,
    patch,
    del
  }
}