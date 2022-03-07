<template>
  <button
    class="common-data__add-btn add-btn"
    type="button"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonAdd',
  data() {
    return {}
  }
}
</script>