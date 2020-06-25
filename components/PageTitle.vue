<template>
  <h1 class="huge-title page-title">
    <slot />
  </h1>
</template>


<style lang="scss" scoped>
.page-title {
  border-left: none;
  padding-left: none;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: auto;

  &::before {
    display: none;
  }
}
</style>