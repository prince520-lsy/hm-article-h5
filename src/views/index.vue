<template>
    <div>
        <!-- 子页面 -->
        <!-- router-view告诉路由，子页面应该渲染在这里 -->
        <router-view></router-view>
        <van-tabbar route active-color="#FA6D1D">
            <van-tabbar-item replace to="/article" icon="notes-o">面经</van-tabbar-item>
            <van-tabbar-item replace to="/collection" icon="star-o">收藏</van-tabbar-item>
            <van-tabbar-item replace to="/favorite" icon="like-o">喜欢</van-tabbar-item>
            <van-tabbar-item replace to="/myself" icon="manager-o">我的</van-tabbar-item>
        </van-tabbar>
        <!-- 底栏 -->
    </div>
</template>
  
<script>
export default {};
</script>
  
<style>

</style>