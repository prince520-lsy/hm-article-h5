<template>
    <div>
        <!-- 顶部导航栏 -->
        <van-nav-bar title="面经详情">
            <template #left>
                <span class="back" @click="$router.back()">返回</span>
            </template>
        </van-nav-bar>
        <div class="content-container">
            <!-- 作者信息 -->
            <div>
                <!-- 标题 -->
                <h1 class="article-title">诗经</h1>
                <!-- 时间 -->
                <div class="article-state">
                    20220-01-20 00:00:00| 282浏览量 | 145 点赞数
                </div>
                <!-- 作者 -->
                <div class="author-info">
                    <img class="avatar"
                        src="https://ts1.cn.mm.bing.net/th?id=OIP-C.x09r5tGxTyGiAchyk-KCjQAAAA&w=99&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
                        alt="" />
                    <span>佚名</span>
                </div>
            </div>
            <!-- 面经内容 -->
            <div class="article-content">关关雎鸠，在河之洲，窈窕淑女，君子好逑</div>
        </div>

        <!-- 点赞/收藏 -->
        <div>点赞</div>
        <div>收藏</div>
    </div>
</template>
  
<script>
export default {};
</script>
  
<style scoped>
.back {
    color: #fa6d1d;
}

.content-container {
    padding-left: 16px;
    padding-right: 16px;
}

.article-title {
    margin-top: 16px;
    margin-bottom: 16px;
}

.article-state {
    color: #999;
}

.author-info {
    display: flex;
    margin-top: 16px;
    align-items: center;
}

.avatar {
    width: 50px;
    height: 50px;
    margin-right: 8px;
    border-radius: 50%;
}

.article-content {
    margin-top: 16px;
}
</style>