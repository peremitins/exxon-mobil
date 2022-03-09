<template>
  <section class="mobil-bonus">
    <div class="row row-1">
      <p class="mobil-bonus__subtitle subtitle">Состояние (Status)</p>
      <multiselect
        v-model="selectStatus"
        :options="['Подключено (Activated) ', 'item-2', 'item-3']"
        :searchable="false"
        :close-on-select="true"
        :show-labels="false"
        placeholder="Выберите"
      />
    </div>
    <div class="row row-2">
      <p class="mobil-bonus__subtitle subtitle">ФИО руководителя/менеджера (Name of Owner)</p>
      <label>
        <input class="field" type="text" onchange="blur()" placeholder="ФИО">
      </label>
    </div>
    <div class="row row-3">
      <p class="mobil-bonus__subtitle subtitle">E-mail для PIN-кода Mobil Бонус (E-mail of Owner)</p>
      <label>
        <input class="field" type="email" onchange="blur()" placeholder="Email">
      </label>
    </div>
    <div class="row row-4">
      <p class="mobil-bonus__subtitle subtitle">Дата регистрации (Registration date)</p>
      <v-date-picker v-model="dateRegistration" class="calendar-icon" :popover="{ visibility: 'click' }">
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
            @click="dateRegistration = null"
          >
            <svg>
              <use xlink:href="../assets/img/svg/sprite.svg#ic24_cancel" />
            </svg>
          </button>
        </template>
      </v-date-picker>
    </div>
    <div class="row row-5">
      <p class="mobil-bonus__subtitle subtitle">Дата подключения (Connection date)</p>
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
    <div class="row row-6">
      <p class="mobil-bonus__subtitle subtitle">Комментарий (Comment)</p>
      <textarea placeholder="Необязательно (Optional)" />
    </div>
    <div class="row row-7">
      <p class="mobil-bonus__subtitle subtitle">PRP комментарий (PRP comment)</p>
      <textarea placeholder="Необязательно (Optional)" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'MobilBonus',
  data() {
    return {
      selectStatus: '',
      dateRegistration: null,
      dateConnection: null
    }
  }
}
</script>