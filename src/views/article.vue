<template>
    <div>
        <van-nav-bar>
            <template #left>
                <van-tabs v-model="active">
                    <van-tab title="推荐">推荐</van-tab>
                    <van-tab title="最新">最新</van-tab>

                </van-tabs>

            </template>
            <template #right>左</template>
        </van-nav-bar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 2
        }
    }
}
</script>

<style>

</style>