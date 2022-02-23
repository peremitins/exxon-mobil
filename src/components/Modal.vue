<template>
  <div class="modal" @click.self="closeModal">
    <div class="modal__window">
      <div class="modal__header">
        <p>Соглашение о конфиденциальности</p>
        <button
          class="modal__btn-close"
          type="button"
          @click="closeModal"
        >
          <svg>
            <use xlink:href="../assets/img/svg/sprite.svg#ic32_cancel_modal" />
          </svg>
        </button>
      </div>
      <div class="divider" />
      <div class="modal__content">
        <p class="modal__content-text">
          В рамках спецификации современных стандартов, базовые сценарии поведения пользователей призывают нас к новым свершениям, которые, в свою очередь, должны быть ассоциативно распределены по отраслям.
        </p>
        <p class="modal__content-text">
          В своём стремлении повысить качество жизни, они забывают, что граница обучения кадров является качественно новой ступенью поставленных обществом задач.
        </p>
      </div>
      <div class="divider" />
      <div class="modal__footer">
        <button
          class="modal__btn modal__btn--cancel"
          type="button"
          bgColor="#F7F7F7" bgHover="#F0F0F0"
          @click="closeModal"
        >
          Отклонить
        </button>
        <button
          class="modal__btn modal__btn--accept"
          type="button"
          bgColor="#FE000C" bgHover="#F20C17"
          @click="acceptModal"
        >
          Принять
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    closeModal() {
      this.$emit('closeModal', false)
    },
    acceptModal() {
      this.$emit('acceptModal', false)
    }
  }
}
</script>