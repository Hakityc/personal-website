<template>
  <div class="flex flex-col gap-1">
    <h1 class="text-11.5 font-not-italic font-700 lh-normal tracking--0.1725 text-primary">For you</h1>
    <a-input
      v-model:value="inputValue"
      class="w-45 rounded-5 border-rd-5 bg-#E8E8E8 blog-header-input"
    >
      <template #prefix>
        <div>
          <i-simple-line-icons:magnifier></i-simple-line-icons:magnifier>
        </div>
      </template>
    </a-input>
  </div>
</template>

<script lang='ts' setup>
const inputValue = ref('')
</script>

<style>
.blog-header-input input {
  background-color: #E8E8E8;
}
</style>