<template>
  <div>
    <div class="fl-column aself-start standard-padding">
      <div
        v-for="([resType, resArr], i) in Object.entries(research!)"
        :key="resType"
      >
        <PageTitle
          class="res-page-title"
          :class="{ first: i === 0 }"
        >
          {{ resType }}:
        </PageTitle>
        <Motion
          v-for="(res) in resArr"
          :key="res.title"
          class="publication"
          :initial="{ opacity: 0, y: 30 }"
          :in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true, amount: 'some' }"
          :transition="{ duration: 0.9 }"
        >
          <div class="title-container">
            <component
              :is="res.meta.title_link ? 'a' : 'div'"
              :href="res.meta.title_link ? res.meta.title_link : null"
              class="title small"
            >
              {{ res.title }}
            </component>
            <div
              v-if="res.meta.coauthors"
              class="coauthors copy small"
            >
              with
              <span
                v-for="(c, index) in res.meta.coauthors"
                :key="c.coauthor.name"
                class="coauthor"
              >
                <a
                  v-if="c.coauthor.link"
                  :href="c.coauthor.link"
                >{{ c.coauthor.name }}</a>
                <span v-else>{{ c.coauthor.name }}</span>{{ getLigature(res.meta.coauthors, index) }}
              </span>
            </div>
            <div
              v-if="res.meta.links && res.meta.links.length"
              ref="links"
              class="links"
            >
              <a
                v-for="link in res.meta.links"
                :key="link.link"
                class="link"
                target="_blank"
                :href="link.link"
              >{{
                link.label }}</a>
            </div>
          </div>
          <div class="paper-infos copy small" v-if="res.meta.infos && res.meta.infos.length">
            <div
              v-for="info in res.meta.infos"
              :key="info.info"
              class="paper-info"
            >
            <MDC :value="info.info" tag="div" />
            </div>
          </div>
          <div class="copy small">
            <ContentRenderer :value="res" />
          </div>
          <a
            v-if="res.meta.cta"
            class="external copy small"
            :href="res.meta.cta"
          >Read Me</a>
        </Motion>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ResearchCollectionItem } from '@nuxt/content'
import anime from 'animejs'

const { data: research } = await useAsyncData('research', async () => {
  const qCollection = await queryCollection('research').all()
  const typeOrder = ['Publications', 'Working Papers', 'Work in Progress']
  return qCollection.sort((a, b) => {
    const dateA = new Date(a.meta.date ?? '1970-01-01')
    const dateB = new Date(b.meta.date ?? '1970-01-01')
    if (a.meta.type !== b.meta.type) {
      return typeOrder.indexOf(a.meta.type) - typeOrder.indexOf(b.meta.type)
    }
    return dateB.getTime() - dateA.getTime()
  }).reduce((acc: Record<string, ResearchCollectionItem[]>, v) => {
    acc[v.meta.type] ??= []
    acc[v.meta.type].push(v)
    return acc
  }, {})
})
useHead({
  title: `Research`,
})

// eslint-disable-next-line
const getLigature = (a: any, i: number) => {
  if (a.length === 1) { // single co-author case
    return '.'
  }
  else { // more than one co-authors cases
    if (i < (a.length - 2)) return ', '
    if (i === (a.length - 2)) return ' and '
    // in any other case
    return '.'
  }
}
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
  padding: 0 0 1.5vw;
  width: 100%;
  opacity: 0;
  margin: 2vw 0;

  @media all and (max-width: 768px) {
    padding: 0 0 3vw;
    margin: 4vw 0;
  }

  &:last-child {
    border-bottom: 2px solid $plain-text;
  }
}

.container {
  padding: 10vw 0;
  box-sizing: border-box;

  >div {
    align-items: center;
  }
}

.title-container {
  margin-bottom: 2vw;
  position: relative;

  a,
  a:hover,
  a:visited {
    color: $primary;
  }
}

.page-title {
  opacity: 0;
}

.copy {
  padding-right: 10vw;

  @media all and (max-width: 768px) {
    padding-right: 0;
  }
}

.coauthors {
 padding-top: 0.5vw; 
}

.links {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  gap: 12px;
  font-size: 14px;

  .link {
    padding: 5px 14px;
    border-radius: 2em;
    background-color: $tertiary;
    text-align: center;
    display: inline-block;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.25s ease-out;

    &:hover {
      color: $secondary;
      background-color: $primary;
    }
  }
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

  @media all and (max-width: 768px) {
    padding: 3vw 6vw;
    margin-top: 6vw;
  }

  &,
  &:visited {
    text-decoration: none;
  }

  &:hover {
    background-color: $plain-text;
    color: $secondary;
  }
}

.res-page-title {
  margin-left: 0;
  padding-left: 0;
  margin-bottom: 4vw;
  margin-top: 0;

  @media all and (max-width: 768px) {
    margin-bottom: 6vw;

    &.first {
      margin-top: 4vw;
    }
  }

  &.first {
    margin-top: 2vw;
  }
}
</style>
