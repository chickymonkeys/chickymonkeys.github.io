<template>
  <div
    class="container"
    :class="[currentPage, { loaded }]"
  >
    <pizzi-header />
    <div class="inner-container">
      <slot />
    </div>
    <pizzi-footer />
  </div>
</template>

<script setup lang="ts">
const loaded = shallowRef(false)
const route = useRoute()
const currentPage = computed(() => route.name)

onMounted(() => {
  nextTick(() => {
    nextTick(() => {
      requestAnimationFrame(() => {
        loaded.value = true
      })
    })
  })
})
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.container {
  background-color: $secondary;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media all and (max-width: 768px) {
    position: relative;
  }
}

.inner-container {
  flex-grow: 2;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-bottom: 8vw;

  @media all and (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 0;
    flex-grow: 0;
    margin: 8vw 0 15vw;

    .index & {
      margin-bottom: 4vw;
    }
  }

  .index & {
    @media all and (min-width: 769px) {
      justify-content: center;
      align-items: center;
      padding-bottom: 0;
      flex-grow: 0;
    }
  }

}
</style>
