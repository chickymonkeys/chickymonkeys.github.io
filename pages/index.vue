<template>
  <div>
    <div class="fl-row center standard-padding">
      <div class="text-container">
        <div class="huge-title" ref="title">
          <span>
            Alessandro
            <br />Pizzigolotto
          </span>
        </div>
        <div class="copy" ref="copy">
          <nuxt-content :document="page" />
        </div>
      </div>
      <div class="pizzi-pic" ref="image">
        <img src="/img/pizziboi.png" alt="pizziboi status symbol" />
      </div>
    </div>
  </div>
</template>

<script>
  import anime from 'animejs'

  export default {
    head() {
      return {
        title: `Home`,
      }
    },
    mounted() {
      const title = this.$refs.title
      const copy = this.$refs.copy
      const image = this.$refs.image
      this.$nextTick(() => {
        requestAnimationFrame(() => {
          anime( {
            targets: title,
            translateY: ['-0.5em', 0],
            opacity: 1,
            duration: 600,
            delay: 150,
            easing: 'easeOutSine'
          })
          anime({
            targets: copy,
            translateX: ['-0.5em', 0],
            opacity: 1,
            duration: 600,
            delay: 300,
            easing: 'easeOutSine'
          })
          anime({
            targets: image,
            translateX: [40, 0],
            opacity: 1,
            duration: 600,
            delay: 450,
            easing: 'easeOutSine'
          })
        })
      })
    },
    beforeRouteLeave(to, from, next) {

      const title = this.$refs.title
      const copy = this.$refs.copy
      const image = this.$refs.image


      anime( {
        targets: title,
        translateY: '-0.5em',
        opacity: 0,
        duration: 100
      })
      anime({
        targets: copy,
        translateX: '-0.5em',
        opacity: 0,
        duration: 100
      })
      const a = anime({
        targets: image,
        translateX: '0.5em',
        opacity: 0,
        duration: 100
      })

      a.finished.then(() => {
        next()
      })
    },
    async asyncData ({ $content }) {
      const page = await $content('home').fetch()
        return {
          page
        }
      }
  }
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';

.fl-row.center {
  padding-top: 4vw;

  @media all and (max-width: 768px) {
    padding-top: 0;
    padding-bottom: 10vw;
  }
}

.container {
  padding: 10vw 0;
  box-sizing: border-box;

  > div {
    align-items: flex-start;

    @media all and (max-width: 768px) {
      align-items: flex-start;
      padding-top: 10vw;
    }
  }
}

.pizzi-pic {
  flex: 0 0 28vw;
  background: linear-gradient(135deg, #{$primary-darker}, #{$primary});
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  align-self: center;

  @media all and (max-width: 768px) {
    width: 23.5vw;
    height: 23.5vw;
    position: absolute;
    top: 0;
    right: 8vw;
  }

  img {
    width: 100%;
    height: auto;

    @media all and (max-width: 768px) {
      height: 100%;
      object-fit: cover;
    }
  }
}

// animation settings
.huge-title {
  transform: translateY(-0.5em);
  opacity: 0;
  position: relative;
}
.copy {
  transform: translateY(-0.5em);
  opacity: 0;
  position: relative;
}
.pizzi-pic {
  transform: translateX(0.5em);
  opacity: 0;
}
</style>
