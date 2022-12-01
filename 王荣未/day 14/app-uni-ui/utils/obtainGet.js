import { get } from "./get.js"

export async function obtainGet(url,data,title = "请求失败", duration = 1500){
  if(!url)return uni.showToast({title: title,duration: duration,icon: 'none'})
  let {message,meta} = await get(url,data)
  if (meta.status !== 200 && meta.status !== 201) {
    return uni.showToast({
      title: title,
      duration: duration,
      icon: 'none'
    });
  }
  return message
}
