<template>
    <div>


        <router-view></router-view>
        <van-tabbar route>
            <van-tabbar-item replace to="/article" icon="notes-o">面经</van-tabbar-item>
            <van-tabbar-item replace to="/collection" icon="star-o">收藏</van-tabbar-item>
            <van-tabbar-item replace to="/favorite" icon="like-o">喜欢</van-tabbar-item>
            <van-tabbar-item replace to="myself" icon="manager-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>