<template>
  <Motion
    :initial="{ x: 30, opacity: 0 }"
    :animate="{ x: 0, opacity: 1 }"
    :transition="{ duration: 0.7 }"
    as="h1"
    class="huge-title page-title standard-padding"
  >
    <slot />
  </Motion>
</template>

<script setup lang="ts"></script>

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
