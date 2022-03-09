<template>
  <section class="my-mobil">
    <div class="row row-1">
      <p class="my-mobil__subtitle subtitle">Состояние</p>
      <multiselect
        v-model="selectStatus"
        :options="['Подключено ', 'item-2', 'item-3']"
        :searchable="false"
        :close-on-select="true"
        :show-labels="false"
        placeholder="Выберите"
      />
    </div>
    <div class="row row-2 link-external">
      <p class="my-mobil__subtitle subtitle">Booking Link</p>
      <label>
        <input class="field" type="text" onchange="blur()" value="link.mymobil.ru">
        <router-link to="/link.mymobil.ru" target="_blank" />
      </label>
    </div>
    <div class="row row-3">
      <p class="my-mobil__subtitle subtitle">Дата подключения</p>
      <v-date-picker v-model="dateConnection" class="calendar-icon" :popover="{ visibility: 'click' }">
        <template v-slot="{ inputValue, inputEvents }">
          <input
            class="field icon"
            :value="inputValue"
            v-on="inputEvents"
            readonly
            placeholder="Укажите дату"
          />
          <button
            type="button"
            class="calendar-icon-close"
            @click="dateConnection = null"
          >
            <svg>
              <use xlink:href="../assets/img/svg/sprite.svg#ic24_cancel" />
            </svg>
          </button>
        </template>
      </v-date-picker>
    </div>
    <div class="row row-4">
      <p class="my-mobil__subtitle subtitle">Комментарий при подключении</p>
      <textarea placeholder="Необязательно" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'MyMobil',
  data() {
    return {
      selectStatus: '',
      dateConnection: null
    }
  }
}
</script>