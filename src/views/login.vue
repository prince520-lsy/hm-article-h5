<template>
    <div>
        <!-- 顶栏 -->
        <van-nav-bar title="面经登录" />
        <!-- 表单 -->
        <van-form @submit="onSubmit">
            <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]" />
            <div style="margin: 16px">
                <van-button block type="primary" native-type="submit" color="#FA6D1D">登录</van-button>
            </div>
            <div class="text-right">
                <router-link to="/register">注册账号</router-link>
            </div>
        </van-form>
        <!-- 去登录 -->
    </div>
</template>
  
<script>
import { Notify } from "vant";
import { login } from "../api/user";
import { saveToken } from "../utils/token";
export default {
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        async onSubmit() {
            // 调用登录接口
            const res = await login({
                username: this.username,
                password: this.password,
            });
            // 提示用户，登录成功
            Notify({ type: "success", message: "登录成功" });
            // 存储token
            saveToken(res.data.data.token);
            // 跳转首页
            this.$router.push("/");
        },
    },
};
</script>
  
<style scoped>
.text-right {
    margin-right: 16px;
    text-align: right;
}
</style>