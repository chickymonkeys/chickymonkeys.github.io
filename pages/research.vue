<template>
  <div>
    <div class="fl-column aself-start standard-padding">
      <div class="publication">
        <div class="title small">Learning the lesson of systemic banking crysis</div>
        <div class="copy small">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad adipisci aliquam dicta dignissimos enim et excepturi expedita fugit labore, maiores neque odio, perspiciatis praesentium quisquam sit, tempore voluptate.
          <br />
          <br />
          <strong>Author:</strong> Pizzigolotto et al.
          <br />
          <strong>Coverage:</strong> Test Coverage
        </div>
        <a href="https://www.google.it" class="external copy small">Read me</a>
      </div>
      <div class="publication">
        <div class="title small">Learning the lesson of systemic banking crysis</div>
        <div class="copy small">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad adipisci aliquam dicta dignissimos enim et excepturi expedita fugit labore, maiores neque odio, perspiciatis praesentium quisquam sit, tempore voluptate.
          <br />
          <br />
          <strong>Author:</strong> Pizzigolotto et al.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  border-bottom: 2px solid white;
  padding: 3vw 0;
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

.external {
  background: transparent;
  border-radius: 4px;
  color: white;
  padding: 1vw 2vw;
  display: inline-block;
  border: 2px solid white;
  margin-top: 2vw;
  transition: all 0.3s ease-out;

  &,
  &:visited {
    text-decoration: none;
  }

  &:hover {
    background-color: white;
    color: $secondary-blue;
  }
}
</style>
