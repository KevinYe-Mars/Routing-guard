<template>
    <div>
        <div class="row md5">
            <div class="col-4">
                <div class="list-group md5">
                    <router-link class="nav-link" tag="li" :to="{name:'historyLink'}">
                        <a class="list-group-item list-group-item-active">历史订单</a>
                    </router-link>
                    <router-link class="nav-link" tag="li" :to="{name:'contactLink'}">
                        <a class="list-group-item list-group-item-active">联系我们</a>
                    </router-link>
                    <router-link class="nav-link" tag="li" :to="{name:'orderingguideLink'}">
                        <a class="list-group-item list-group-item-active">点餐文档</a>
                    </router-link>
                    <router-link class="nav-link" tag="li" :to="{name:'deliveryLink'}">
                        <a class="list-group-item list-group-item-active">快递信息</a>
                    </router-link>
                </div>
            </div>
            <div class="col-8">
                <!-- 导航所对应的内容 -->
                <router-view></router-view>
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
}
</script>
<style lang="less" scoped>
    .list-group-item{
        color:#7C7C7D;
        &:hover{
            color:#007bff;
            background-color: rgb(250, 250, 250);
        }
    }
</style>
