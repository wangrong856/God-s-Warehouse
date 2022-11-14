function fn(name,pwd){
    axios.get(`http://123.57.143.201:8888/api/private/v1/login?username=${name}&password=${pwd}`).then(res=>{
        if(res.data.meta.status !==200){
            alert('登录失败')
        }else{
            // 获取token值
            localStorage.token =res.data.data.token
            alert('成功')
        }
    // console.log(res);
        
    })
}
export default fn