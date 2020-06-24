<template>
  <div class="container" :class="{ loaded }">
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
  @import "~/assets/scss/variables";

  .container {
    background-color: $secondary-blue;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .inner-container {
    flex-grow: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
