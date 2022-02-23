<template>
  <button
    class="common-data__add-btn add-btn"
    type="button"
    :style="style"
    @mouseover="mouseOver"
    @mouseleave="mouseLeave"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonAdd',
  data() {
    return {
      isHover: false
    }
  },
  props: ['bgColor', 'bgHover'],
  computed: {
    style () {
      return this.isHover ? `background-color: ${this.bgHover}` : `background-color: ${this.bgColor}`;
    }
  },
  methods: {
    mouseOver () {
      this.isHover = true
    },
    mouseLeave() {
      this.isHover = false
    }
  }
}
</script>