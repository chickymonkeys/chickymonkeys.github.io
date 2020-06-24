<template>
  <div>
    <div class="fl-row center">
      <div class="text-container">
        <div class="title">
          <span>
            Alessandro
            <br />Pizzigolotto
          </span>
        </div>
        <div class="copy">
          Welcome to my website! I am currently a Doctoral Candidate of the
          <a
            href="https://www.nhh.no/en/departments/economics/"
          >Department of Economics</a> at the
          <a href="https://www.nhh.no/en/">Norwegian School of Economics (NHH)</a>. I am also affiliated with the
          <a
            href="https://www.nhh.no/en/research-centres/fair/"
          >Centre for Empirical Labor Economics (FAIR-CELE)</a>. <br>
          <br />My research focuses on the use of micro-econometric methods to investigate topics at the intersection of culture economics, household finance and political economy.
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
  head () {
    return {
      title: `Home`,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
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

.title {
  margin-bottom: 2vw;
  padding-left: 30px;
  position: relative;

  @media all and (max-width: 768px) {
    padding-left: 20px;
    font-size: 9vw;
    line-height: 1.1em;
    margin-bottom: 7vw;
    margin-top: 2vw;
  }

  span {
    display: inline-block;
    opacity: 0;
    transform: translateX(10%);
    transition: all 0.4s 0.3s ease-out;

    .loaded & {
      opacity: 1;
      transform: none;
    }
  }

  &:before {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    content: '';
    border-left: 0px solid currentColor;
    transition: border-left-width 0.3s ease-out;
    .loaded & {
      border-left-width: 10px;
    }
  }
}

.text-container {
  padding-right: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 0 20vw;
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

.copy {
  opacity: 0;
  transform: translateY(20%);
  transition: all 0.3s 0.7s ease-out;
  .loaded & {
    transform: none;
    opacity: 1;
  }

  @media all and (max-width: 768px) {
    font-size: 4vw;
    line-height: 1.3em;
  }
}

a, a:visited {
  color: currentColor;
  transition: color 0.3s ease-out;

  &:hover {
    color: $pizzi-gold;
  }
}
</style>
