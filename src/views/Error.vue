<template>
  <div class="error">
    <div class="error__title">
      404
    </div>
    <div class="error__subtitle">
      Страница не найдена
    </div>
    <button type="button" @click="$router.go(-1)" class="error__btn">
      Вернуться назад
    </button>
  </div>
</template>

<script>
export default {
  name: 'Error'
}
</script>