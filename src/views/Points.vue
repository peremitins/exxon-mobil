<template>
  <div class="m1c">
    <Header />
    <div class="m1c__header" ref="header">
      <h2 class="m1c__title">Mobil 1 Центр Автосервис на Кропоткина (ТРИО ООО_ИП Саитова)</h2>
      <div class="m1c__btn-wrapper">
        <button class="btn btn__cancel">
          Отменить
        </button>
        <button class="btn btn__save">
          Сохранить изменения
        </button>
      </div>
      <div class="m1c__code">
        <span class="m1c__code-title">
          RU124124
        </span>
        <router-link to="/" class="m1c__code-link">
          ОФРС
          <svg>
            <use xlink:href="../assets/img/svg/sprite.svg#ic_external" />
          </svg>
        </router-link>
      </div>
      <div class="m1c__update-date">
        Обновлено
        <span> 12.01.2022  22:45</span>
      </div>
    </div>
    <Tabs class="m1c-tabs">
      <Tab
        v-for="component in componentsData"
        :key="component.name"
        :name="component.name"
        :selected="component.selected"
      >
        <component :is="component.component"></component>
      </Tab>
    </Tabs>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Tab from '@/components/ui/Tab'
import Tabs from '@/components/ui/Tabs'
import CommonData from '@/components/CommonData.vue'
import MobilBonus from '@/components/MobilBonus.vue'
import MyMobil from '@/components/MyMobil.vue'
import BrandAssessment from '@/components/BrandAssessment.vue'
import Sales from '@/components/Sales.vue'
import Promotions from '@/components/Promotions.vue'

export default {
  name: 'Points',
  components: {
    Footer,
    Header,
    Tab,
    Tabs,
    CommonData,
    MobilBonus,
    MyMobil,
    BrandAssessment,
    Sales,
    Promotions
  },
  data() {
    return {
      CommonData,
      MobilBonus,
      MyMobil,
      BrandAssessment,
      Sales,
      Promotions,
      componentsData: [
        {
          name: "Общие данные",
          component: 'CommonData',
          selected: true
        },
        {
          name: "Mobil Бонус",
          component: 'MobilBonus',
          selected: false
        },
        {
          name: "Промоакции",
          component: 'Promotions',
          selected: false
        },
        {
          name: "My Mobil",
          component: 'MyMobil',
          selected: false
        },
        {
          name: "Brand Assessment",
          component: 'BrandAssessment',
          selected: false
        },
        {
          name: "Квартальные продажи",
          component: 'Sales',
          selected: false
        }
      ]
    }
  }
}
</script>
