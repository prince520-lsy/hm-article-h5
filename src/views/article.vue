<template>
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
        <article-item></article-item>
    </div>
</template>

<script>

import { getArticleList } from '../api/article'
export default {
    data() {
        return {
            active: 0,
            current: 1,

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
</style>





