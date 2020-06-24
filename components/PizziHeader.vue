<template>
  <div class="header">
    <nav>
      <nuxt-link to="/">home</nuxt-link>
      <nuxt-link to="/research">research</nuxt-link>
      <nuxt-link to="/teaching">teaching</nuxt-link>
    </nav>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  @import '~assets/scss/variables';
  .header {
    padding: 2vw 3vw;

  }
  nav  {
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;
    position: relative;

    &::after {
      position: absolute;
      bottom: -2px;
      height: 2px;
      width: 100%;
      left: 0;
      content: '';
      background-color: none;
    }

  }

  a, a:visited {
    color: white;
    line-height: 1.4;
    font-size: 1.75vw;
    text-decoration: none;
    display: inline-block;
    position: relative;
    transition: color 0.3s ease-out;

    &:hover {
      color: $primary-orange;

      &::after {
        transform: scaleX(1);
      }
    }

    &:not(:last-child) {
      margin-right: 2vw;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      bottom: -2px;
      height: 2px;
      background: currentColor;
      transform-origin: center;
      transform: scaleX(0);
      transition: transform 0.2s ease-out;
    }
  }
</style>
