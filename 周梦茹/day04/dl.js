function fn(name,pwd) {
    axios.get(`http://shiyansong.cn:8888/api/private/v1/login?username=${name}&password=${pwd}`).then(res=>{
        // console.log(res);
        if(res.data.meta.status !==200 ) {
            alert("登录失败")
        }else{
            localStorage.token=res.data.data.token
            alert("登录成功")
        }
        // console.log(res);
    })
}
export default fn