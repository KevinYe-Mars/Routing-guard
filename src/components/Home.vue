<template>
    <div class="row">
        <div id="home" class="col-sm-12 text-center">
            <div class="background">
                <h1>欢迎大家品尝piaaz</h1>
                <h2>这里有你喜欢的piaaz</h2>
                <button @click="goto" class="btn btn-success">let's go</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods:{
        goto(){
            // this.$router.go(-1)
            //跳转到上一次浏览的页面
            //this.$router.replace('/menu')
            //指定跳转的地址
            // this.$router.push('/menu')
            //通过push进行跳转
        }
    }
}
</script>
<style lang="less" scoped>
#home{
    background: url('../assets/timg.jpg');
    height: 85vh;
    padding: 10%;
    .background{
        background: #eee;
        opacity: 0.8;
        max-width: 70vw;
        margin: 0 auto;
        padding: 20px 0;
        h1,h2{
            margin: 6%;
        }
    }
}
</style>
