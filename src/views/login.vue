<template>
    <div>
        <van-nav-bar title="面经登录" />
        <van-form @submit="onSubmit">
            <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" autocomplete="off"
                :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]" />
            <div style="margin: 16px;">
                <van-button block type="warning" native-type="submit" color="fa6d1d">登录</van-button>
            </div>
        </van-form>
        <div class="text-right">
            <router-link to="/register">注册账号</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''

        }
    },
    methods: {
        onSubmit(values) {
            console.log('submit', values);
        },
    },
}
</script>

<style scoped>
.text-right {
    margin-right: 16px;
    text-align: right;
}
</style>