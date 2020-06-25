<template>
  <div>
    <page-title>Research</page-title>
    <div class="fl-column aself-start standard-padding">
      <div class="publication" v-for="res in research" :key="res.title">
        <div class="title-container">
          <div class="title small">{{res.title}}</div>
          <div class="coauthor" v-if="res.coauthor">with {{ res.coauthor }}</div>
        </div>
        <div class="copy small">
          <nuxt-content :document="res" />
        </div>
        <a v-if="res.cta" href="res.cta" class="external copy small">Read Me</a>
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
  const research = await $content('research').sortBy('date','desc').fetch()
    return {
      research
    }
  },
  head () {
    return {
      title: `Research`,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';

.publication {
  border-bottom: 2px solid $plain-text;
  padding: 3vw 0;
  width: 100%;

  @media all and (max-width: 768px) {
    padding: 6vw 0;
  }
}

.container {
  padding: 10vw 0;
  box-sizing: border-box;

  > div {
    align-items: center;
  }
}

.title-container {
  margin-bottom: 2vw;
  position: relative;
}

.copy {
  padding-right: 10vw;

  @media all and (max-width: 768px) {
    padding-right: 0;
  }
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

  @media all and (max-width: 768px) {
    padding: 3vw 6vw;
    margin-top: 6vw;
  }

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
