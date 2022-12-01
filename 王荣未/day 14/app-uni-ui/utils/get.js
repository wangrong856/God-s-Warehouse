export function get(url, data) {
  let obj = new Promise((resolve, reject) => {
    uni.$http.get(url, data).then(({data:res}) => {
       resolve(res)
    }).catch((error) => {
       reject(error)
    })
  })
  return obj
}