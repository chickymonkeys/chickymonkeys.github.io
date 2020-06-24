<template>
  <div>
    <div class="fl-row center">
      <div class="text-container">
        <div class="title">
          <span>
            Alessandro <br>
            Pizzigolotto
          </span>
        </div>
        <div class="copy">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur cupiditate quisquam suscipit. Dolorem fugiat in laudantium maiores nulla odit rem tempora. Aliquam aperiam facilis placeat quaerat quis soluta veniam.
        </div>
      </div>
      <div class="pizzi-pic">
        <img src="/img/pizziboi.png" alt="pizziboi status symbol">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  @import '~assets/scss/variables';
  .container {
    padding: 10vw 0;
    box-sizing: border-box;

    > div {
      align-items: center;
    }
  }


  .title {
    margin-bottom: 2vw;
    padding-left: 30px;
    position: relative;

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
    flex:0 0 40vw;
    background: linear-gradient(to right, #{$primary-orange-darkest},  #{$primary-orange-darker});
    border-radius: 15px;
    overflow: hidden;
    display: flex;

    img {
      width: 100%;
      height: auto;
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
  }
</style>
