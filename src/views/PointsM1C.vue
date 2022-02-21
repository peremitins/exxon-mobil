<template>
  <div class="m1c">
    <div class="m1c__header">
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
        RU124124
      </div>
      <div class="m1c__update-date">
        Обновлено
        <span> 12.01.2022  22:45</span>
      </div>
    </div>
    <Tabs>
      <Tab name="Общие данные" :selected="true">
        <component :is="CommonData"></component>
      </Tab>
      <Tab name="Mobil Бонус">
        <h1>here is the content for the pictures tab.</h1>
      </Tab>
      <Tab name="My Mobil">
        <h1>here is the content for the video tab.</h1>
      </Tab>
      <Tab name="Brand Assessment">
        <h1>2</h1>
      </Tab>
      <Tab name="Квартальные продажи">
        <h1>4</h1>
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import Tab from '@/components/ui/Tab'
import Tabs from '@/components/ui/Tabs'
import CommonData from '@/components/CommonData.vue'

export default {
  name: 'PointsM1C',
  components: {
    Tab, Tabs, CommonData
  },
  data() {
    return {
      CommonData
    }
  }
}
</script>
