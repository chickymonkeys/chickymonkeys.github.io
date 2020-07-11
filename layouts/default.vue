<template>
  <div class="container" :class="[currentPage, { loaded }]">
    <pizzi-header></pizzi-header>
    <Nuxt class="inner-container" />
    <pizzi-footer></pizzi-footer>
  </div>
</template>

<script>
  import PizziFooter from "~/components/PizziFooter";
  import PizziHeader from "~/components/PizziHeader";


  export default {
    data: () => ({
      loaded: false
    }),
    computed: {
      currentPage () {
        return this.$route.name
      }
    },
    mounted() {
      this.$nextTick(() => {
          this.$nextTick(() => {
            requestAnimationFrame(() => {
              this.loaded = true
            })
          })
      })
    },
    components: {
      PizziFooter,
      PizziHeader
    }

  }
</script>

<style lang="scss">
@import '~/assets/scss/variables';

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
  align-items: center;
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
}
</style>
