<template>
  <div class="button-group">
    <button class="button-group__btn" 
      v-for="(key, val) in tabs"
      :key="val"
      @click="changeSelectVal(key)"
      :class="{ 'btn-active': selected === key }"
    >
      {{ val }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'ToggleButtonGroup',
  props: ['selected','default', 'tabs'],
  methods: {
    changeSelectVal: function(val) {
      this.$emit('changeSelectVal', val)
    }
  }
}
</script>