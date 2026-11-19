<template>
  <div class="home-page">
    <div class="fl-row center standard-padding">
      <!-- First in the markup so the text can flow around it on desktop. -->
      <div ref="image" class="pizzi-pic">
        <NuxtImg
          src="/images/pizziboi.png"
          sizes="sm:23vw md:28vw lg:36vw xl:36vw"
          alt="pizziboi status symbol"
          preload
          placeholder
          :modifiers="{ format: 'webp' }"
        />
      </div>
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
      <!-- After the text, so keyboard focus reaches the bio links first. -->
      <PizziFooter class="portrait-footer" overlay />
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
      // Icons sit on the photo's edge: fade them in as the photo settles
      // (~90% of its slide is done by 900ms).
      anime({
        targets: document.querySelector('footer'),
        opacity: 1,
        duration: 600,
        delay: 900,
        easing: 'easeOutSine',
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

// Desktop: two equal columns (text | photo), so the gutter between them sits
// on the page centre. The text column must stay wider than the name.
$column: 36vw;
$gutter: 5vw;
$top: 4vw;

.home-page {
  @media all and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}

.fl-row.center {
  padding-top: $top;

  // One centred block with the photo floated right: paragraphs that start
  // beside the photo stay in the text column, any that start below it use
  // the full width, so the bio never runs on as a long narrow strip.
  @media all and (min-width: 769px) {
    display: flow-root;
    box-sizing: content-box;
    width: 2 * $column + $gutter;
    margin: 0 auto;
    padding-right: 0;
    padding-left: 0;
  }

  @media all and (max-width: 768px) {
    flex: 1;
    display: grid;
    grid-template-rows: auto 1fr;
    padding-top: 0;
    padding-bottom: 0;
  }
}

.text-container {
  // Block flow instead of the global flex column, so the text can wrap.
  @media all and (min-width: 769px) {
    display: block;
    padding-right: 0;
  }

  @media all and (max-width: 768px) {
    grid-area: 1 / 1;
    padding-right: 0;
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

// Desktop: the icon row straddles the photo's bottom edge, right-aligned,
// inset just enough to clear the photo's rounded corner.
// Mobile: same footer as every other page, at the bottom of the grid.
.portrait-footer {
  opacity: 0;

  @media all and (min-width: 769px) {
    position: absolute;
    top: $top + $column;
    right: max(0.75rem, calc(1.5vw - 0.5rem));
    padding: 0;
    transform: translateY(-50%);
  }

  @media all and (max-width: 768px) {
    grid-area: 2 / 1;
    align-self: end;
    justify-self: center;
    margin-top: 6vw;
  }
}

.pizzi-pic {
  background: linear-gradient(135deg, #{$primary-darker}, #{$primary});
  border-radius: 15px;
  overflow: hidden;
  display: flex;

  // Top-aligned with the name. Below it, room for the half of the icon row
  // that hangs off the photo (icon 4vw + 2 * 0.5rem hit padding, halved).
  @media all and (min-width: 769px) {
    float: right;
    width: $column;
    height: $column;
    margin: 0 0 calc(2vw + 0.5rem) $gutter;
  }

  @media all and (max-width: 768px) {
    grid-area: 1 / 1;
    align-self: start;
    justify-self: end;
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
  // Floored like the copy, so the gap never drops below one line of text.
  margin-bottom: max(1.5rem, 2.5vw);

  @media all and (max-width: 768px) {
    margin-bottom: 8vw;
  }
}

.copy {
  transform: translateY(-0.5em);
  opacity: 0;
  position: relative;
  // House body size (as .copy.small on the research page), floored so narrow
  // desktops stay legible.
  font-size: max(1.0625rem, 1.5vw);
  line-height: 1.5;

  @media all and (max-width: 768px) {
    font-size: max(1.0625rem, 4.5vw);
  }

  :deep(p) {
    margin: 0;

    // Each paragraph sits wholly beside the photo or wholly below it; below,
    // lines are capped at about 75 characters.
    @media all and (min-width: 769px) {
      display: flow-root;
      max-width: 30em;
    }
  }

  :deep(p + p) {
    margin-top: 1em;
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
