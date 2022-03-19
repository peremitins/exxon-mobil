<template>
  <section class="mobil-bonus">
    <div class="row row-1 column-reverse">
      <multiselect
        v-model="selectStatus"
        :options="['Подключено (Activated) ', 'item-2', 'item-3']"
        :searchable="false"
        :close-on-select="true"
        :show-labels="false"
        placeholder="Выберите"
      />
      <p class="mobil-bonus__subtitle subtitle">Состояние (Status)</p>
    </div>
    <div class="row row-2">
      <label class="column-reverse">
        <input class="field" type="text" onchange="blur()" placeholder="ФИО">
        <p class="mobil-bonus__subtitle subtitle">ФИО руководителя/менеджера (Name of Owner)</p>
      </label>
    </div>
    <div class="row row-3">
      <label class="column-reverse">
        <input class="field" type="email" onchange="blur()" placeholder="Email">
        <p class="mobil-bonus__subtitle subtitle">E-mail для PIN-кода Mobil Бонус (E-mail of Owner)</p>
      </label>
    </div>
    <div class="row row-4">
      <v-date-picker v-model="dateRegistration" class="calendar-icon" :popover="{ visibility: 'click' }">
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
          <p class="mobil-bonus__subtitle subtitle">Дата регистрации (Registration date)</p>
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
          <p class="mobil-bonus__subtitle subtitle">Дата подключения (Connection date)</p>
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
    <div class="row row-6 column-reverse">
      <textarea-autosize 
        placeholder="Необязательно (Optional)"
        :min-height="96"
        :max-height="200"
      />
      <p class="mobil-bonus__subtitle subtitle">Комментарий (Comment)</p>
    </div>
    <div class="row row-7 column-reverse">
      <textarea-autosize 
        placeholder="Необязательно (Optional)"
        :min-height="56"
        :max-height="200"
      />
      <p class="mobil-bonus__subtitle subtitle">PRP комментарий (PRP comment)</p>
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