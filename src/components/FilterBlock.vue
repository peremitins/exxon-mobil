<template>
  <div class="filter-block" @click.stop="closeFilter" :class="{ 'show': this.$store.state.isFilterShow }">
    <div class="filter-block__wrapper" @click.stop >
      <p class="filter-block__title">
        Фильтр
      </p>
      <div class="filter-block__row row-1">
        <label>
          <input class="field" type="text" onchange="blur()" placeholder="Поиск по ID, наименованию или адресу">
        </label>
      </div>
      <div class="filter-block__row row-2">
        <multiselect
          v-model="selectType"
          :options="['Тип объекта', 'item-2', 'item-3']"
          :searchable="false"
          :close-on-select="true"
          :show-labels="false"
          placeholder="Тип объекта"
        />
      </div>
      <div class="filter-block__row row-3">
        <label class="custom-checkbox">
          <input type="checkbox" value="filter-block-checkbox">
          <span>Только активные</span>
        </label>
        <ButtonAdd class="filter-block__btn add-btn">
          <svg>
            <use xlink:href="../assets/img/svg/sprite.svg#ic24_bttn_add-white" />
          </svg>
          Добавить
        </ButtonAdd>
      </div>
      <div class="filter-block__row row-4">
        <multiselect
          v-model="selectResponsible"
          :options="['Ответственный ТА', 'item-2', 'item-3']"
          :searchable="false"
          :close-on-select="true"
          :show-labels="false"
          placeholder="Ответственный ТА"
        />
      </div>
      <div class="filter-block__row row-5">
        <multiselect
          v-model="selectDistributor"
          :options="['Дистрибьютор', 'item-2', 'item-3']"
          :searchable="false"
          :close-on-select="true"
          :show-labels="false"
          placeholder="Дистрибьютор"
        />
      </div>
      <div class="filter-block__row row-6">
        <multiselect
          v-model="selectSupply"
          :options="['Снабжение', 'item-2', 'item-3']"
          :searchable="false"
          :close-on-select="true"
          :show-labels="false"
          placeholder="Снабжение"
        />
      </div>
      <div class="filter-block__btn-wrapper">
        <button class="btn btn__cancel" @click="closeFilter">
          Отменить
        </button>
        <button class="btn btn__save" @click="closeFilter">
          Применить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonAdd from '../components/ui/ButtonAdd.vue'
export default {
  name: 'FilterBlock',
  components: {
    ButtonAdd
  },
  data() {
    return {
      OpenIndicator: {
        render: createElement => createElement('span', {class: {'toggle-arrow': true}}),
      },
      selectType: '',
      selectResponsible: '',
      selectDistributor: '',
      selectSupply: ''
    }
  },
  methods: {
    closeFilter() {
      this.$store.commit('TOGGLE_FILTER')
    }
  }
}
</script>