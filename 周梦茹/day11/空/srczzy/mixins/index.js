export const mixins={
    data(){
        return {
            arr:JSON.parse(localStorage.getItem('arr'))
        }
    },
    watch:{
        arr:{
            handler(val){
                localStorage.setItem('arr',JSON.stringify(val))
            },
            deep:true
        }
    },
    methods:{
        add(){
            this.arr.push(6)
        },
        del(index){
            this.arr.splice(index,1)
        }
    }
}