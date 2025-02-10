<template>
  <div>
    <div class="fl-row center standard-padding">
      <div class="text-container">
        <div
          ref="title"
          class="huge-title"
        >
          <span>
            Alessandro
            <br>Pizzigolotto
          </span>
        </div>
        <div
          ref="copy"
          class="copy"
        >
          <ContentRenderer
            v-if="page"
            :value="page"
          />
        </div>
      </div>
      <div
        ref="image"
        class="pizzi-pic"
      >
        <NuxtImg
          src="/img/pizziboi.png"
          sizes="sm:23vw md:28vw lg:28vw xl:28vw"
          alt="pizziboi status symbol"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import anime from 'animejs'

const { data: page } = await useAsyncData('index', () => {
  return queryCollection('content').path('/').first()
})

useHead({
  title: 'Home',
})
const title = useTemplateRef(('title'))
const copy = useTemplateRef(('copy'))
const image = useTemplateRef(('image'))
onMounted(() => {
  nextTick(() => {
    requestAnimationFrame(() => {
      anime({
        targets: title.value,
        translateY: ['-0.5em', 0],
        opacity: 1,
        duration: 600,
        delay: 150,
        easing: 'easeOutSine',
      })
      anime({
        targets: copy.value,
        translateX: ['-0.5em', 0],
        opacity: 1,
        duration: 600,
        delay: 300,
        easing: 'easeOutSine',
      })
      anime({
        targets: image.value,
        translateX: [40, 0],
        opacity: 1,
        duration: 600,
        delay: 450,
        easing: 'easeOutSine',
      })
      anime({
        targets: document.querySelector('footer'),
        opacity: 1,
        duration: 600,
        delay: 300,
      })
    })
  })
})
onBeforeRouteLeave((to, from, next) => {
  anime({
    targets: document.querySelector('footer'),
    opacity: 0,
    duration: 100,
  })

  anime({
    targets: document.body,
    scrollTop: 0,
    duration: 100,
  })

  anime({
    targets: title.value,
    translateY: '-0.5em',
    opacity: 0,
    duration: 100,
  })
  anime({
    targets: copy.value,
    translateX: '-0.5em',
    opacity: 0,
    duration: 100,
  })
  const a = anime({
    targets: image.value,
    translateX: '0.5em',
    opacity: 0,
    duration: 100,
  })

  a.finished.then(() => {
    next()
  })
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

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

  >div {
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
    height: 100%;

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
