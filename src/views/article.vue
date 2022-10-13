<!-- <template>
    <div>
        <van-nav-bar>
            <template #left>
                <van-tabs v-model="active">
                    <van-tab title="推荐">推荐</van-tab>
                    <van-tab title="最新">最新</van-tab>

                </van-tabs>

            </template>
            <template #right><span class="article-logo">面经</span></template>
        </van-nav-bar>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <article-item v-for="item in articleList" :key="item.id" :article="item"></article-item>
        </van-list>
    </div>
</template>

<script>

import { getArticleList } from '../api/article'
export default {
    data() {
        return {
            active: 0,
            current: 1,
            articleList: [],
            finished: false,
            loading: true,

        }
    },
    created() {
        this.loadArticleList();
    },
    methods: {
        async loadArticleList() {
            const res = await getArticleList({
                current: this.current,
                sorter: this.active === 0 ? "weight_desc" : "",
            })
            console.log(res);
            if (this.current === 1) {
                this.articleList = res.data.data.rows;

            } else {
                this.articleList = [...this.articleList, ...res.data.data.rows]
            }

            this.loading = false;

        },
        onload() {
            this.current++;
            this.loadArticleList()
        }
    }

}
</script>

<style scoped>
.article-logo {
    font-size: 30px;
    color: orange;
    font-weight: 700;
}
</style> -->

<template>
    <div>
        <!-- 顶部导航条 -->
        <!-- fixed: 固定在顶部 -->
        <!-- placeholder：顶部占位 -->
        <van-nav-bar fixed placeholder>
            <template #left>
                <van-tabs v-model="active" @change="change">
                    <van-tab title="推荐" title-class="abc"></van-tab>
                    <van-tab title="最新"></van-tab>
                </van-tabs>
            </template>
            <template #right> <span class="article-logo">面经</span> </template>
        </van-nav-bar>

        <!-- v-model控制是否加载中 -->
        <!-- finished，如果为true，就是没有更多数据 -->
        <!-- load事件，表示滚动到底部 -->
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="loadMore">
            <!-- 面经列表 -->
            <article-item v-for="item in articleList" :key="item.id" :article="item"></article-item>
        </van-list>
    </div>
</template>

<script>
// 强调！我们的接口在article，不在user里面
import { getArticleList } from "../api/article";
export default {
    data() {
        return {
            active: 0,
            current: 1,
            articleList: [],
            loading: true,
            finished: false,
        };
    },
    created() {
        // 调用接口，拉取数据
        this.loadArticleList();
    },
    methods: {
        // 由于有多处都需要加载列表数据
        // 所以把获取面经列表封装成方法
        async loadArticleList() {
            // 调用接口
            const res = await getArticleList({
                // 要加载第几页的数据
                current: this.current,
                // 排序
                // active如果为0，就是推荐，否则就是最新
                sorter: this.active === 0 ? "weight_desc" : "",
            });
            // 做一个判断，如果是第一页，就直接读数据
            // 如果不是第一页，把接口返回的数据拼接到当前列表
            // this.articleList = res.data.data.rows;
            if (this.current === 1) {
                this.articleList = res.data.data.rows;
            } else {
                // 如果加载不是第一页，把数据拼接到当前列表
                this.articleList = [...this.articleList, ...res.data.data.rows];
            }
            // 关闭加载中
            this.loading = false;
        },
        // 滚动到列表底部，加载更多数据
        loadMore() {
            // 加载下一页数据
            this.current++;
            // 加载数据
            this.loadArticleList();
        },
        change() {
            this.current = 1;
            this.loadArticleList()
        }
    },
};
</script>

<style scoped>
.article-logo {
    font-size: 30px;
    color: #fa6d1d;
    font-weight: 900;
}
</style>





