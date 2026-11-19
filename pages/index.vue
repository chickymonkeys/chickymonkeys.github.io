<template>
  <div class="home-page">
    <div class="fl-row center standard-padding">
      <div class="text-container">
        <div ref="title" class="huge-title">
          <span>
            Alessandro
            <br />
            Pizzigolotto
          </span>
        </div>
        <div ref="copy" class="copy">
          <ContentRenderer v-if="page" :value="page" />
        </div>
      </div>
      <div class="portrait">
        <div ref="image" class="pizzi-pic">
          <NuxtImg
            src="/images/pizziboi.png"
            sizes="sm:23vw md:28vw lg:28vw xl:28vw"
            alt="pizziboi status symbol"
            preload
            placeholder
            :modifiers="{ format: 'webp' }"
          />
        </div>
        <PizziFooter class="portrait-footer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import anime from 'animejs';

const { data: page } = await useAsyncData('index', () => {
  return queryCollection('content').path('/').first();
});

useHead({
  title: 'Home',
});
const title = useTemplateRef('title');
const copy = useTemplateRef('copy');
const image = useTemplateRef('image');
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
      });
      anime({
        targets: copy.value,
        translateX: ['-0.5em', 0],
        opacity: 1,
        duration: 600,
        delay: 300,
        easing: 'easeOutSine',
      });
      anime({
        targets: image.value,
        translateX: [40, 0],
        opacity: 1,
        duration: 600,
        delay: 450,
        easing: 'easeOutSine',
      });
      anime({
        targets: document.querySelector('footer'),
        opacity: 1,
        duration: 600,
        delay: 300,
      });
    });
  });
});
onBeforeRouteLeave((to, from, next) => {
  anime({
    targets: document.querySelector('footer'),
    opacity: 0,
    duration: 100,
  });

  anime({
    targets: document.body,
    scrollTop: 0,
    duration: 100,
  });

  anime({
    targets: title.value,
    translateY: '-0.5em',
    opacity: 0,
    duration: 100,
  });
  anime({
    targets: copy.value,
    translateX: '-0.5em',
    opacity: 0,
    duration: 100,
  });
  const a = anime({
    targets: image.value,
    translateX: '0.5em',
    opacity: 0,
    duration: 100,
  });

  a.finished.then(() => {
    next();
  });
});
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;

.home-page {
  @media all and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}

.fl-row.center {
  padding-top: 4vw;

  @media all and (max-width: 768px) {
    flex: 1;
    display: grid;
    grid-template-rows: auto 1fr;
    padding-top: 0;
    padding-bottom: 1vw;
  }
}

.text-container {
  @media all and (width > 768px) {
    flex-basis: min(45vw, 34rem);
  }

  @media all and (max-width: 768px) {
    grid-area: 1 / 1;
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

.portrait {
  flex: 0 0 28vw;
  align-self: center;
  position: relative;

  @media all and (max-width: 768px) {
    display: contents;
  }
}

.portrait-footer {
  @media all and (max-width: 768px) {
    position: relative;
    bottom: auto;
    left: 42vw; // Center against the viewport from the row's 8vw left inset.
    grid-area: 2 / 1;
    align-self: end;
    justify-self: start;
    margin-block-start: 6vw;
  }

  @media all and (width > 768px) {
    position: absolute;
    right: 0.3vw;
    bottom: 0;
    padding: 0;
    transform: translateY(50%);
  }
}

.pizzi-pic {
  background: linear-gradient(135deg, #{$primary-darker}, #{$primary});
  border-radius: 15px;
  overflow: hidden;
  display: flex;

  @media all and (max-width: 768px) {
    grid-area: 1 / 1;
    align-self: start;
    justify-self: end;
    margin-right: 4vw;
    width: 23.5vw;
    height: 23.5vw;
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
  margin-bottom: clamp(1.75rem, 5vw, 2.5rem);
}

.copy {
  transform: translateY(-0.5em);
  opacity: 0;
  position: relative;
  max-inline-size: 58ch;
  font-size: clamp(1.0625rem, 0.9rem + 0.4vw, 1.25rem);
  line-height: 1.55;

  :deep(p) {
    margin: 0;
  }

  :deep(p + p) {
    margin-block-start: 1em;
  }

  :deep(strong) {
    font-weight: 700;
  }
}

.pizzi-pic {
  transform: translateX(0.5em);
  opacity: 0;
}
</style>
