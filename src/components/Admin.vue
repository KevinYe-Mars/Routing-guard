<template>
    <h1>Admin</h1>
</template>

<script>
export default { 
    // data(){
    //     return{
    //         name:'henry'
    //     }
    // },
    //组件中的守卫，进入组件之前的守卫
    // beforeRouteEnter: (to, from, next) => {
        // alert('hello'+this.name);
        //进入组件之前的守卫拿不到data的数据，在next()的回调中可以拿到数据
        // next(na=>{
        //     alert('hello'+na.name);
        // })
        //next是异步的
    // }
    //组件守卫只能选一个，要么是进入组建之前，要么是进入组建之后
    // beforeRouteLeave (to, from, next) {
    //     if(confirm('确定离开吗')==true){
    //         next()
    //     }else{
    //         next(false)
    //     }
    // }
}
</script>
