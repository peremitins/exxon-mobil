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
    <div class="row row-2">
      <p class="my-mobil__subtitle subtitle">Booking Link</p>
      <label class="my-mobil__label-link link-external">
        <input class="field" type="text" onchange="blur()" value="link.mymobil.ru">
        <router-link to="/link.mymobil.ru" target="_blank"  class="router-link"/>
        <svg>
          <use xlink:href="../assets/img/svg/sprite.svg#ic_external" />
        </svg>
      </label>
    </div>
    <div class="row row-3">
      <v-date-picker v-model="dateConnection" class="calendar-icon" :popover="{ visibility: 'click' }">
        <template v-slot="{ inputValue, inputEvents }">
          <input
            class="field icon"
            :value="inputValue"
            v-on="inputEvents"
            readonly
            placeholder="Укажите дату"
          />
          <svg>
            <use xlink:href="../assets/img/svg/sprite.svg#ic24_calendar" />
          </svg>
          <p class="my-mobil__subtitle subtitle">Дата подключения</p>
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
    <div class="row row-4 column-reverse">
      <textarea-autosize 
        placeholder="Необязательно"
        :min-height="96"
        :max-height="200"
      />
      <p class="my-mobil__subtitle subtitle">Комментарий при подключении</p>
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