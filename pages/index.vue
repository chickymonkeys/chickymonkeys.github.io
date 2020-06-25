<template>
  <div>
    <div class="fl-row center">
      <div class="text-container">
        <transition name="slide-fade">
          <div class="huge-title">
            <span>
              Alessandro
              <br />Pizzigolotto
            </span>
          </div>
        </transition>
        <div class="copy">
          <nuxt-content :document="page" />
        </div>
      </div>
      <div class="pizzi-pic">
        <img src="/img/pizziboi.png" alt="pizziboi status symbol" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: `Home`,
      }
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
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.container {
  padding: 10vw 0;
  box-sizing: border-box;

  > div {
    align-items: center;

    @media all and (max-width: 768px) {
      align-items: flex-start;
      padding-top: 10vw;
    }
  }
}

.pizzi-pic {
  flex: 0 0 40vw;
  background: linear-gradient(
    to right,
    #{$primary-orange-darkest},
    #{$primary-orange-darker}
  );
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  align-self: center;

  @media all and (max-width: 768px) {
    width: 25vw;
    height: 25vw;
    position: absolute;
    top: 0vw;
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
</style>
