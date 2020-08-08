<template>
  <div>
    <page-title ref="title">Teaching</page-title>
    <div class="fl-column aself-start standard-padding">
      <div class="publication" ref="publications" v-for="t in teaching" :key="t.subject">
        <div class="copy small">
          <span>
            <strong>{{ t.semester }}</strong>
            {{ t.subject}}
            <br />
            <em>{{ t.role }}</em>
          </span>
          <span>
            <strong>{{ t.institution }}</strong>
            <br />
            {{ t.degree }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import anime from 'animejs'
  import PageTitle from "~/components/PageTitle"

  export default {
    components: {
      PageTitle
    },
    async asyncData ({ $content }) {
      const teaching = await $content('teaching').sortBy('date','desc').fetch()
      console.log(teaching)
      return {
        teaching
      }
    },
    head() {
      return {
        title: `Teaching`,
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
        duration: 100,
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
  width: 100%;
  padding: 1vw 0;
  opacity: 0;

  &:first-child {
    padding-top: 3vw;

    @media all and (max-width: 768px) {
      padding-top: 8vw;
    }
  }

  @media all and (max-width: 768px) {
    padding: 3vw 0;
  }
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

strong {
  display: inline-block;
  margin-right: 0.5em;
}

em {
  display: inline-block;
  margin-right: 0.5em;
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
    color: $secondary;
  }
}

.page-title {
  opacity: 0;
}
</style>
