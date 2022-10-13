<template>
    <div class="artile-item">
        <!-- 作者部分 -->
        <div class="author-info">
            <img class="avatar" :src="article.avatar" alt="头像" />
            <div>
                <h3 class="article-title">{{ article.stem }}</h3>
                <p class="article-author">
                    {{ article.creator }}|{{ article.createdAt }}
                </p>
            </div>
        </div>
        <!-- 内容部分 -->
        <p class="article-content">
            {{ article.content }}
        </p>
        <!-- 文章状态 -->
        <div class="author-state">
            点赞 {{ article.likeCount }} | 浏览 {{ article.views }}
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        article: Object,
    },
    computed: {
        cleanContent() {
            return this.article.content.replace(/<[^>]*/g, '')
        }
    }
};
</script>
  
<style scoped>
.artile-item {
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
}

.author-info {
    display: flex;
}

.avatar {
    width: 50px;
    height: 50px;
    margin-right: 16px;
    border-radius: 50%;
}

.article-title {
    margin-top: 0;
    margin-bottom: 4px;
}

.article-author {
    margin-top: 0;
    margin-bottom: 0;
    color: #999;
}

.article-content {
    margin-top: 8px;
    margin-bottom: 8px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.author-state {
    color: #999;
}
</style>