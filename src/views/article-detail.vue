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
                <h1 class="article-title">{{article.stem}}</h1>
                <!-- 时间 -->
                <div class="article-state">
                    {{article.createdAt}}| {{article.views}}浏览量 | {{article.likeCount}} 点赞数
                </div>
                <!-- 作者 -->
                <div class="author-info">
                    <img class="avatar" :src="article.avatar" alt="" />
                    <span>{{article.creator}}</span>
                </div>
            </div>
            <!-- 面经内容 -->
            <div class="article-content" v-html="article.content"></div>
        </div>

        <!-- 点赞/收藏 -->
        <div class="like-container" :class="{active:article.likeFlag===1}" @click="like">
            <van-icon class="operation-icon" name="like-o" />
        </div>
        <div class="collect-container" @click="collet" :class="{active:article.collectFlag===1}">
            <van-icon class="operation-icon" name="star-o" />
        </div>
    </div>
</template>
  
<script>
import { getArticleDetail, likeOrCollect } from '../api/article'
export default {
    created() {
        this.loadArticle()
    },
    data() {
        return {
            article: {}
        }
    },
    methods: {
        //点赞
        async like() {
            await likeOrCollect({
                id: this.$route.params.id,
                optType: 1
            })
            this.loadArticle()
        },
        //收藏
        async collet() {
            await likeOrCollect({
                id: this.$route.params.id,
                optType: 2
            })
            this.loadArticle()
        },
        async loadArticle() {
            let res = await getArticleDetail(this.$route.params.id)
            console.log(res);
            this.article = res.data.data
        }
    },



};
</script>
  
<style scoped lang="less">
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

.like-container,
.collect-container {
    position: fixed;
    bottom: 100px;
    display: flex;
    width: 45px;
    height: 45px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: 5px 5px 25px #ccc;
    background-color: #fff;

    &.active {
        background-color: #FEC635;

        .operation-icon {
            color: #fff;
        }
    }
}

.like-container {
    right: 16px;
}

.collect-container {
    right: 78px;
}

.operation-icon {
    font-size: 22px;
    color: grey;
}
</style>