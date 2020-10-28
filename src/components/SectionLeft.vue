<template>
  <section class="SL my-16 px-4 sm:max-w-screen-xl mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-3">
      <div
        class="CardLeft grid-middle order-last sm:order-first tp-5"
        v-bind:class="[hideLeft ? 'hidden sm:grid' : '']"
      >
        <div class="CardContainer">
          <div>
            <h5 class="text-md sm:text-xl text-left">
              {{ title }}
            </h5>
            <h1 class="text-2xl sm:text-5xl text-left font-extrabold">
              {{ headline }}
            </h1>
            <p class="text-left">
              {{ content }}
            </p>
          </div>

          <div class="flex">
            <button class="bg-blue-200 mt-5 p-4 rounded-md shadow-xl">
              {{ button }}
            </button>
          </div>
        </div>
      </div>
      <div
        class="CardRight order-first sm:order-last p-5"
        v-bind:class="[hideRight ? 'hidden sm:grid' : '']"
      >
        <div class="CardContainer">
          <img
            class="img-right"
            :src="require('@/assets/images/' + imageSrc)"
            :alt="imageAlt"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    headline: String,
    content: String,
    button: String,
    imageSrc: {
      type: String,
      //default: require('@/assets/images/framework.png'),
    },
    imageAlt: String,
    hideLeft: Boolean,
    hideRight: Boolean,
  },
}
</script>
