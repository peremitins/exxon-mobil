<template>
  <div class="common-data">
    <div class="common-data__status">
      Состояние (Status)
    </div>
      <ToggleButtonGroup
        class="common-data__btn-toggle"
        :selected="selected"
        :tabs="tabs"
        @test="test"
      />
      <section class="common-data__main">
        <div class="common-data__main-info">
          <div class="row row-1">
            <h5 class="common-data__title">Основное</h5>
          </div>
          <div class="row row-2">
            <p class="common-data__subtitle">Тип (Type)</p>
            <v-select
              :options="['Сервисная станция (Mobil 1 Centr)', 'item-2', 'item-3']"
              :searchable="false"
              :components="{ OpenIndicator }"
              placeholder="Сервисная станция (Mobil 1 Centr)"
            />
          </div>
          <div class="row row-3">
            <p class="common-data__subtitle">Наименование точки (Name of Location)</p>
            <v-select :options="['Canada', 'United States']"></v-select>
          </div>
          <div class="row row-4">
            <p class="common-data__subtitle">Наименование юридического лица или ИП</p>
            <v-select :options="['Canada', 'United States']"></v-select>
          </div>
          <div class="row row-5">
            <p class="common-data__subtitle">Снабжение точки</p>
            <v-select
              :options="['Дистрибьютор', 'item-2', 'item-3']"
              :searchable="false"
              :components="{ OpenIndicator }"
              placeholder="Дистрибьютор"
            />
          </div>
          <div class="row row-6">
            <p class="common-data__subtitle">ИНН (TIM)</p>
            <v-select :options="['Canada', 'United States']"></v-select>
          </div>
          <div class="row row-7">
            <p class="common-data__subtitle">Ссылка на L-360</p>
            <v-select :options="['Canada', 'United States']"></v-select>
          </div>
          <div class="row row-8">
            <p class="common-data__subtitle">Канал (Channel)</p>
            <v-select
              :options="['СТО', 'item-2', 'item-3']"
              :searchable="false"
              :components="{ OpenIndicator }"
              placeholder="СТО"
            />
          </div>
          <div class="row row-9">
            <p class="common-data__subtitle">Субканал (Subchannel)</p>
            <v-select
              :options="['Mobil 1 Centr', 'item-2', 'item-3']"
              :searchable="false"
              :components="{ OpenIndicator }"
              placeholder="Mobil 1 Centr"
            />
          </div>
        </div>
        <div class="common-data__slider">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius molestiae quis. In nisi, illum, nobis assumenda quae fuga soluta eligendi ipsum reprehenderit, quos quas alias sit corrupti necessitatibus perferendis tempora nam tenetur laboriosam iure impedit odio odit! Quidem repellendus ab aspernatur, delectus vero rem! Nihil voluptatibus, temporibus facere eius cum, in voluptate autem possimus nam iusto corporis! Reiciendis tempore ex consequatur possimus quos incidunt esse, nemo non? Aliquid aperiam adipisci facere ullam repellendus, error incidunt impedit voluptatibus exercitationem voluptatem rem esse ex, assumenda blanditiis. Quae laboriosam quibusdam deleniti minus, recusandae, pariatur, ad voluptatibus doloremque fugiat distinctio asperiores ratione natus?
        </div>
      </section>
  </div>
</template>

<script>
import ToggleButtonGroup from '@/components/ui/ToggleButtonGroup'

export default {
  components: {
    ToggleButtonGroup
  },
  name: 'CommonData',
  data: () => ({
    selected: "Активирована (Activated)",
    tabs: {
      'Активирована (Activated)': 'Активирована (Activated)',
      'Заблокировать (Block)': 'Заблокировать (Block)'
    },
    OpenIndicator: {
      render: createElement => createElement('span', {class: {'toggle-arrow': true}}),
    },
  }),
  methods: {
    test(val) {
      this.selected = val;
    }
  }
}
</script>