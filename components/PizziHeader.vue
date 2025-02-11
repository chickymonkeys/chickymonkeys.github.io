<template>
  <div class="header">
    <div
      class="row centered disappear"
      :class="{ secondaryPage: notHomepage }"
    >
      <NuxtLink
        to="/"
        class="pizzi-smol"
        aria-label="Go to homepage"
      >
        <NuxtImg
          src="/img/pizziboi.png"
          alt="Alessandro Pizzigolotto"
          sizes="sm:15vw md:15vw lg:6vw xl:6vw"
        /> AP
      </NuxtLink>
    </div>
    <div class="row">
      <nav>
        <NuxtLink
          :class="{ active: $route.path === '/' }"
          to="/"
          aria-label="Go to homepage desktop"
        >home</NuxtLink>
        <NuxtLink
          :class="{ active: $route.path === '/research' }"
          to="/research"
          aria-label="Research page"
        >research
        </NuxtLink>
        <a
          href="/files/Pizzigolotto_CV.pdf"
          target="_blank"
        >cv</a>
        <NuxtLink
          :class="{ active: $route.path === '/teaching' }"
          to="/teaching"
          aria-label="Teaching page"
        >teaching
        </NuxtLink>
      </nav>
      <a
        href="mailto:alpi@econ.ku.dk"
        class="mail-link"
        aria-label="Write me an email"
      >alpi@econ.ku.dk</a>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const notHomepage = computed(() => route.path !== '/')
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.mail-link {
  @media all and (max-width: 768px) {
    display: none;
  }
}

.row {
  display: flex;
  justify-content: space-between;

  @media all and (max-width: 768px) {
    justify-content: center;
  }

  &.centered {
    justify-content: center;
  }

  &.disappear {
    position: relative;
    margin-top: -5.3vw;
    opacity: 0;
    transition: margin-top 0.3s ease-out, opacity 0.2s 0.1s ease-out;

    @media all and (max-width: 768px) {
      margin-top: -20vw;
    }

    &.secondaryPage {
      margin-top: 0;
      opacity: 1;
    }
  }
}

.header {
  padding: 2vw 3vw;

  @media all and (max-width: 768px) {
    padding: 5vw;
  }
}

nav {
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
}

a,
a:visited {
  color: $plain-text;
  line-height: 1.4;
  font-size: 1.75vw;
  text-decoration: none;
  display: inline-block;
  position: relative;
  transition: color 0.3s ease-out;
  z-index: 1;

  @media all and (max-width: 768px) {
    font-size: 4.5vw;
    font-weight: bold;
  }

  &:not(:last-child) {
    margin-right: 2vw;

    @media all and (max-width: 768px) {
      margin-right: 4.5vw;
    }
  }

  nav & {

    &:hover,
    &.active:first-child {
      color: $primary;

      &::after {
        transform-origin: left center !important;
        transform: scaleX(1) !important;
      }
    }

    &::after {
      content: '';
      position: absolute;
      left: -10px;
      width: calc(100% + 20px);
      bottom: 0em;
      height: 1.4em;
      background: $tertiary;
      transform-origin: left center;
      z-index: -1;
      transform: scaleX(0);
      transition: transform 0.2s ease-out;
    }

    &.active:not(:first-child) {
      &::after {
        transform-origin: right center;
        transform: scaleX(0);
      }
    }
  }
}

a.pizzi-smol {
  font-family: $fontSerif;
  font-weight: 900;
  color: $primary;
  font-size: 3vw;
  margin-bottom: 1vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (max-width: 768px) {
    font-size: 8vw;
    margin-bottom: 5vw;
    justify-content: space-between;
    width: 100%;
    padding-left: 0vw;
  }

  img {
    margin-right: 10px;
    width: 6vw;
    height: 6vw;
    border-radius: 50%;
    border: 2px solid $tertiary;
    background: linear-gradient(135deg, #{$primary-darker}, #{$primary});

    @media all and (max-width: 768px) {
      width: 15vw;
      height: 15vw;
      order: 2;
      border-radius: 10px;
      border: none;
    }
  }
}
</style>
