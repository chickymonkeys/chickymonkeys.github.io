<template>
  <div>
    <page-title ref="title">Research</page-title>
    <div class="fl-column aself-start standard-padding">
      <div class="publication" ref="publications" v-for="res in research" :key="res.title">
        <div class="title-container">
          <component :is="res.title_link ? 'a' : 'div'" :href="res.title_link ? res.title_link : null"
            class="title small">{{ res.title }}</component>
          <div class="coauthors copy small" v-if="res.coauthors">
            with
            <span class="coauthor" v-for="(c, index) in res.coauthors" :key="c.name">
              <a v-if="c.coauthor.link" :href="c.coauthor.link">{{ c.coauthor.name }}</a>
              <span v-else>{{ c.coauthor.name }}</span>{{ getLigature(res.coauthors, index) }}
            </span>
          </div>
          <div class="links" v-if="res.links && res.links.length" ref="links">
            <a class="link" target="_blank" v-for="link in res.links" :href="link.link">{{ link.label }}</a>
          </div>
        </div>
        <div class="copy small">
          <nuxt-content :document="res" />
        </div>
        <a v-if="res.cta" class="external copy small" :href="res.cta">Read Me</a>
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
  async asyncData({ $content }) {
    const research = await $content('research').sortBy('date', 'desc').fetch()
    return {
      research
    }
  },
  head() {
    return {
      title: `Research`,
    }
  },
  methods: {
    getLigature(a, i) {
      if (a.length === 1) { // single co-author case
        return '.'
      } else { // more than one co-authors cases
        if (i < (a.length - 2)) return ', '
        if (i === (a.length - 2)) return ' and '
        // in any other case
        return '.'
      }
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

    if (process.client) {
      anime({
        targets: document.querySelector('footer'),
        opacity: 1,
        duration: 600,
        delay: 300,
      })
    }
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


    if (process.client) {
      anime({
        targets: document.querySelector('footer'),
        opacity: 0,
        duration: 100,
      })
    }
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
  padding: 3vw 0 1.5vw;
  width: 100%;
  opacity: 0;

  @media all and (max-width: 768px) {
    padding: 6vw 0 3vw;
  }
}

.container {
  padding: 10vw 0;
  box-sizing: border-box;

  >div {
    align-items: center;
  }
}

.title-container {
  margin-bottom: 2vw;
  position: relative;

  a,
  a:hover,
  a:visited {
    color: $primary;
  }
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

.links {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  gap: 12px;
  font-size: 14px;

  .link {
    padding: 5px 14px;
    border-radius: 2em;
    background-color: $tertiary;
    text-align: center;
    display: inline-block;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.25s ease-out;

    &:hover {
      color: $secondary;
      background-color: $primary;
    }
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
    color: $secondary;
  }
}
</style>
