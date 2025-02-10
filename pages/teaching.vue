<template>
  <div>
    <PageTitle>Teaching</PageTitle>
    <div class="fl-column aself-start standard-padding">
      <Motion
        v-for="t in teaching"
        :key="t.meta.subject"
        class="publication"
        :initial="{ opacity: 0, y: 30 }"
        :in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true, amount: 'some' }"
        :transition="{ duration: 0.9 }"
      >
        <div class="copy small">
          <span>
            <strong>{{ t.meta.semester }}</strong>
            {{ t.meta.subject }}
            <br>
            <em>{{ t.meta.role }}</em>
          </span>
          <span>
            <strong>{{ t.meta.institution }}</strong>
            <br>
            {{ t.meta.degree }}
          </span>
        </div>
      </Motion>
    </div>
  </div>
</template>

<script setup lang="ts">
import anime from 'animejs'

useHead({
  title: 'Teaching',
})

const { data: teaching } = await useAsyncData('teaching', () => {
  return queryCollection('teaching').all()
})

onMounted(() => {
  nextTick(() => {
    nextTick(() => {
      anime({
        targets: document.querySelector('footer'),
        opacity: 1,
        duration: 600,
        delay: 300,
      })
    })
  })
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

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

  >div {
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
