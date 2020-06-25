<template>
  <div>
    <page-title>Teaching</page-title>
    <div class="fl-column aself-start standard-padding">
      <div class="publication">
        <div class="copy small">
          <nuxt-content :document="teaching" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "~/components/PageTitle"
export default {
  components: {
    PageTitle
  },
  async asyncData ({ $content }) {
  const teaching = await $content('teaching').fetch()
  console.log(teaching)
    return {
      teaching
    }
  },
  head () {
    return {
      title: `Teaching`,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';

.publication {
  width: 100%;
  padding: 3vw 0;
}

.container {
  padding: 10vw 0;
  box-sizing: border-box;

  > div {
    align-items: center;
  }
}

.title {
  margin-bottom: 2vw;
  position: relative;
}

.copy {
  padding-right: 10vw;
}

.external {
  background: transparent;
  border-radius: 4px;
  color: $plain-text;
  padding: 1vw 2vw;
  display: inline-block;
  border: 2px solid $plain-text;
  margin-top: 2vw;
  transition: all 0.3s ease-out;

  &,
  &:visited {
    text-decoration: none;
  }

  &:hover {
    background-color: $plain-text;
    color: $secondary-blue;
  }
}
</style>
