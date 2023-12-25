interface Module {
  [key: string]: {
    default:string
  }
}

const en:Module  = import.meta.glob('./en/*.ts', { eager: true })
const zhCN:Module = import.meta.glob('./zh-CN/*.ts', { eager: true })

export const messages = {
  en: Object.assign({},...Object.keys(en).map(key => ({ [key.slice(5, -3)]: en[key].default }))),
  'zh-CN': Object.assign({},...Object.keys(zhCN).map(key => ({ [key.slice(8, -3)]: zhCN[key].default })))
  // en: {
  //   ...en
  // },
  // 'zh-CN':zhCN
}
console.log(en,messages)