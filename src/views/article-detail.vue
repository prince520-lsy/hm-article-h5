<template>
    <div>
        <van-nav-bar title="面经详情" left-text="返回" bind:click-left="onClickLeft">
            <template #left>
                <span class="back" @click="$router.back()">返回</span>
            </template>
        </van-nav-bar>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.back {
    color: orange;
}
</style>