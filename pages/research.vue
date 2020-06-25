<template>
  <div>
    <page-title ref="title">Research</page-title>
    <div class="fl-column aself-start standard-padding">
      <div class="publication" ref="publications" v-for="res in research" :key="res.title">
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
import anime from 'animejs'

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
  },
  mounted() {
    anime({
      targets: this.$refs.title.$el,
      translateX: [30, 0],
      opacity: 1,
      duration: 700,
      easing: 'easeOutSine'
    })
    anime({
      targets: this.$refs.publications,
      translateY: [30, 0],
      opacity: 1,
      duration: 700,
      delay: 200 + anime.stagger(400),
      easing: 'easeOutSine'
    })
  },
  beforeRouteLeave(to, from, next) {
    anime({
      targets: this.$refs.title.$el,
      translateX: [0, 30],
      opacity: 0,
      duration: 100,
    })
    const a = anime({
      targets: this.$refs.publications,
      translateY: [0, 30],
      opacity: 0,
      duration: 100
    })

    a.finished.then(() => {
      next()
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';

.publication {
  border-bottom: 2px solid $plain-text;
  padding: 3vw 0;
  width: 100%;
  opacity: 0;

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

.page-title {
  opacity: 0;
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
