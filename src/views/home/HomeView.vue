<template>
    <div class="w-screen h-screen relative flex flex-col flex-1 bg-#EFEFEF">
        <HeaderView class="z-10"></HeaderView>
        <BodyView></BodyView>
    </div>
</template>

<script lang='ts' setup>
import HeaderView from './HeaderView.vue'
import BodyView from './BodyView.vue'
</script>

<style lang='less' scoped></style>