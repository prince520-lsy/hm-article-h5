<template>
    <div>
        <van-nav-bar title="我的收藏" fixed placeholder />
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="loadMore">
            <!-- 面经列表 -->
            <article-item v-for="item in articleList" :key="item.id" :article="item"></article-item>
        </van-list>
    </div>
</template>
  
<script>
// 导入封装的获取点赞/收藏列表接口
import { getLikeOrCollectList } from "../api/article";
export default {
    data() {
        return {
            loading: true,
            finished: false,
            articleList: [],
            current: 1,
        };
    },
    created() {
        this.loadList();
    },
    methods: {
        async loadList() {
            const res = await getLikeOrCollectList({
                optType: 2,
                page: this.current,
            });
            console.log("点赞列表", res);
            this.articleList = res.data.data.rows;

            // 关闭加载
            this.loading = false;

            // 判断是否有更多数据
            this.finished = this.current >= res.data.data.pageTotal;
        },
        loadMore() { },
    },
};
</script>
  
<style>

</style>