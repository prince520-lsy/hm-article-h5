<!-- <template>
    <div>
        <div class="user-info">
            <div class="avatar"><img src="../assets/logo.png" alt=""></div>
            <div class="username">jack</div>

        </div>

        <van-grid>
            <van-grid :column-num="3" class="grid">
                <van-grid-item icon="clock-o" text="Text" />
                <van-grid-item icon="bookmark-o" text="Text" />
                <van-grid-item icon="thumb-circle-o" text="Text" />
            </van-grid>

        </van-grid>



        <div>
            <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" />
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant';

export default {
    data() {
        return {

            showShare: false,
            options: [
                { name: '微信', icon: 'wechat' },
                { name: '微博', icon: 'weibo' },
                { name: '复制链接', icon: 'link' },
                { name: '分享海报', icon: 'poster' },
                { name: '二维码', icon: 'qrcode' },
            ],
        };
    },
    methods: {
        onSelect(option) {
            Toast(option.name);
            this.showShare = false;
        },
    },
};
</script>

<style scroped lang="less">
.user-info {
    display: flex;
}

.avatar img,
.username {
    width: 30px;
    height: 30px;
}

.private-icon {
    display: flex;
}

.grid {
    width: 100%;
}
</style> -->
<template>
    <div class="page-container">
        <div class="user-info">
            <img class="avatar" :src="user.avatar" alt="头像" />
            <span class="user-name">{{user.username}}</span>
        </div>

        <van-grid clickable :column-num="3">
            <van-grid-item icon="clock-o" text="历史记录" />
            <van-grid-item icon="bookmark-o" text="我的收藏" to="/collection" />
            <van-grid-item icon="thumb-circle-o" text="我的点赞" to="/favorite" />
        </van-grid>

        <van-cell-group class="operation-list">
            <van-cell title="推荐分享" is-link />
            <van-cell title="意见反馈" is-link />
            <van-cell title="关于我们" is-link />
            <van-cell title="退出登录" is-link />
        </van-cell-group>
    </div>
</template>
  
<script>
import { Toast } from 'vant';
import { getUserInfo } from '../api/user'
export default {
    async created() {
        let res = await getUserInfo()
        console.log(res);
        this.user = res.data.data
    },
    data() {
        return {
            user: {},
            showShare: false,
            options: [
                { name: '微信', icon: 'wechat' },
                { name: '微博', icon: 'weibo' },
                { name: '复制链接', icon: 'link' },
                { name: '分享海报', icon: 'poster' },
                { name: '二维码', icon: 'qrcode' },
            ],

        };
    },
    methods: {
        onSelect(option) {
            Toast(option.name);
            this.showShare = false;
        },

    },
};
</script>
  
<style scoped>
.page-container {
    height: calc(100vh - 50px);
    padding-left: 8px;
    padding-right: 8px;
    background-color: #f5f5f5;
}

.user-info {
    display: flex;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
}

.avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
}

.user-name {
    margin-left: 8px;
    font-weight: bold;
    font-size: 22px;
}

.operation-list {
    margin-top: 16px;
}
</style>