<!-- 
   <SectionLeft title="" button="" content=" " imageSrc="" headline="" />
   <SectionRight title="" button="" content=" " imageSrc="" headline="" />
-->
<template>
  <main>
    <SectionLeft
      title="Hier kommt der Title hinein!"
      headline="Ich bin hier die Headline!!!"
      content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea"
      button="Ich bin ein Button"
      imageSrc="iphone.png"
      imageAlt="iPhone mit Screenshot"
    />

    <SectionRight
      title="Hier kommt der Title hinein!"
      headline="Ich bin hier
    die Headline!!!"
      content="Lorem ipsum dolor sit amet, consetetur sadipscing
    elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
    aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
    dolores et ea"
      button="Ich bin ein Button"
      imageSrc="framework.png"
      imageAlt="iPhone mit Screenshot"
    />
  </main>
</template>

<script>
// Components
import SectionLeft from '@/components/SectionLeft.vue'
import SectionRight from '@/components/SectionRight.vue'

export default {
  components: {
    SectionLeft,
    SectionRight,
  },
  data: function () {
    return {
      height: '50px',
      width: '100%',
    }
  },
}
</script>
