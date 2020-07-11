<template>
  <h1 class="huge-title page-title standard-padding">
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
  padding-bottom: 0;

  &::before {
    display: none;
  }
}
</style>