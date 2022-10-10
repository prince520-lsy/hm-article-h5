<template>
    <div>
        <van-nav-bar title="用户注册" />
        <van-form @submit="onSubmit">
            <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]" />
            <div style="margin: 16px;">
                <van-button block type="primary" native-type="submit">提交</van-button>
            </div>
        </van-form>
        <div class="text-right">
            <router-link to="/login">有账号，去登陆</router-link>
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