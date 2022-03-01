<template>
  <div class="home">
    <Header />
    <FilterBlock />
    <div class="table-container" aria-label="Destinations">
      <div class="flex-table">
        <div class="flex-row">
          ID
        </div>
        <div class="flex-row">
          Наименование / адрес
        </div>
        <div class="flex-row">
          Тип
        </div>
        <div class="flex-row">
          Дистрибьютор
        </div>
      </div>
      <router-link to="/points/m1c" class="flex-table row link">
        <div class="flex-row">
          RU239891
        </div>
        <div class="flex-row">
          Mobil 1 Центр Автосервис на Кропоткина (ТРИО ООО_ИП Саитова)
          <p>Московская обл., Москва, Ленина, 126</p>
        </div>
        <div class="flex-row">
          Сервисная станция Mobil 1 Centr
        </div>
        <div class="flex-row">
          Дистрибьютор
        </div>
      </router-link>
      <router-link to="/points/m1c" class="flex-table row link">
        <div class="flex-row">
          RU239893
        </div>
        <div class="flex-row blocked">
          СТО Замена масла
          <p>Московская обл., Москва, Ленина, 126</p>
        </div>
        <div class="flex-row">
          НСТО (TIER 2)
        </div>
        <div class="flex-row">
          Дистрибьютор
        </div>
      </router-link>
      <router-link to="/points/m1c" class="flex-table row link">
        <div class="flex-row">
          RU239893
        </div>
        <div class="flex-row">
          СТО Замена масла
          <p>Московская обл., Москва, Ленина, 126</p>
        </div>
        <div class="flex-row">
          НСТО (TIER 2)
        </div>
        <div class="flex-row">
          Дистрибьютор
        </div>
      </router-link>
      <router-link to="/points/m1c" class="flex-table row link">
        <div class="flex-row">
          RU239893
        </div>
        <div class="flex-row">
          СТО Замена масла
          <p>Московская обл., Москва, Ленина, 126</p>
        </div>
        <div class="flex-row">
          НСТО (TIER 2)
        </div>
        <div class="flex-row">
          Дистрибьютор, Дистрибьютор 2
        </div>
      </router-link>
      <router-link to="/points/m1c" class="flex-table row link">
        <div class="flex-row">
          RU239893
        </div>
        <div class="flex-row">
          СТО Замена масла
          <p>Московская обл., Москва, Ленина, 126</p>
        </div>
        <div class="flex-row">
          НСТО (TIER 2)
        </div>
        <div class="flex-row">
          Дистрибьютор
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import FilterBlock from '../components/FilterBlock'
export default {
  components: {
    Header,
    FilterBlock
  },
  name: 'Home',
  
}
</script>

<style lang="scss">
@import '../assets/scss/global/vars.scss';

.table-container {
  display: block;
  margin: 2em auto;
  width: 100%;
  overflow-x: auto;
}


.flex-table {
  display: grid;
  grid-template-columns: 85px minmax(110px, 1000px) minmax(145px, 150px) minmax(145px, 470px);
  grid-template-rows: auto;
  gap: 0 30px;
  width: fit-content;
  border-bottom: 1px solid #EBEBEB;
  transition: 0.5s;
  
  @media (max-width: $xl) {
    grid-template-columns: 85px minmax(110px, 1000px) minmax(145px, 150px) 145px;
  }
  
  @media (max-width: $md) {
    grid-template-columns: 85px 350px 150px 145px;
  }
  
  &.link {
    position: relative;
    &::after {
      content: url(../assets/img/svg/ic24_arrow_right.svg);
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 24px;
      height: 24px;
    }
  }
  
  &:not(:first-child) {
    &:hover {
      background: #f5f5f5;
      transition: 500ms;
    }
  }
  &:first-child .flex-row {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    color: rgba(26, 23, 23, 0.44);
  }
}

.flex-row {
  display: block;
  position: relative;
  width: 100%;
  text-align: left;
  padding: 15px 15px 15px 0;
  font-size: 15px;
  line-height: 22px;
  color: #1A1717;
  
  &.blocked {
    padding-left: 24px;
    &::before {
      content: url(../assets/img/svg/ic16_blocked.svg);
      position: absolute;
      top: 17px;
      left: 0;
      width: 16px;
      height: 16px;
    }
  }
  
  p {
    font-size: 13px;
    line-height: 18px;
    color: rgba(26, 23, 23, 0.6);
  }
}
</style>