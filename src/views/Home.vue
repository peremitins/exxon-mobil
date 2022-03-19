<template>
  <div class="home">
    <Header />
    <FilterBlock />
    <div class="table-container table">
      <div class="flex-table table__header">
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
        <div class="flex-row table__id">
          RU239891
        </div>
        <div class="flex-row table__title">
          Mobil 1 Центр Автосервис на Кропоткина (ТРИО ООО_ИП Саитова)
        </div>
        <div class="flex-row table__type">
          Сервисная станция Mobil 1 Centr
        </div>
        <div class="flex-row table__distributor">
          Дистрибьютор
        </div>
        <div class="flex-row table__address">
          <p>Московская обл., Москва, Ленина, 126</p>
        </div>
      </router-link>
      <router-link to="/points/m1c" class="flex-table row link">
        <div class="flex-row table__id">
          RU239891
        </div>
        <div class="flex-row table__title blocked">
          Mobil 1 Центр Автосервис на Кропоткина (ТРИО ООО_ИП Саитова)
        </div>
        <div class="flex-row table__type">
          Сервисная станция Mobil 1 Centr
        </div>
        <div class="flex-row table__distributor">
          Дистрибьютор
        </div>
        <div class="flex-row table__address">
          <p>Московская обл., Москва, Ленина, 126</p>
        </div>
      </router-link>
      <router-link to="/points/m1c" class="flex-table row link">
        <div class="flex-row table__id">
          RU239891
        </div>
        <div class="flex-row table__title">
          Mobil 1 Центр Автосервис на Кропоткина (ТРИО ООО_ИП Саитова)
        </div>
        <div class="flex-row table__type">
          Сервисная станция Mobil 1 Centr
        </div>
        <div class="flex-row table__distributor">
          Дистрибьютор
        </div>
        <div class="flex-row table__address">
          <p>Московская обл., Москва, Ленина, 126</p>
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
  padding: 0px 0px 0 $sidebar-width;
  
  @media (max-width: $lg) {
    margin: 0 auto;
    padding: 0;
  }
}


.flex-table {
  display: grid;
  grid-template-columns: 85px minmax(110px, 1000px) minmax(145px, 150px) minmax(145px, 470px);
  grid-template-rows: auto auto;
  grid-template-areas: 
    'id title type distributor'
    '. address . .'
  ;
  gap: 2px 30px;
  padding: 15px 30px 17px 30px;
  width: fit-content;
  border-bottom: 1px solid #EBEBEB;
  transition: 0.5s;
  
  @media (max-width: $xl) {
    grid-template-columns: 85px minmax(110px, 1000px) minmax(145px, 150px) 145px;
  }
  
  @media (max-width: $md) {
    grid-template-columns: min-content auto;
    grid-template-areas: 
      'title title'
      'id type'
      'address address'
      'distributor distributor'
    ;
    gap: 3px;
    width: auto;
    padding-right: 10px;
  }
  
  @media (max-width: $sm) {
    padding: 15px 22px 17px 15px;
  }
  
  &.link {
    position: relative;
    &::after {
      content: url(../assets/img/svg/ic24_arrow_right.svg);
      position: absolute;
      top: 50%;
      right: 30px;
      transform: translateY(-50%);
      width: 24px;
      height: 24px;
      
      @media (max-width: $md) {
        right: 5px;
      }
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
    color: $text-secondary;
  }
}

.flex-row {
  display: block;
  position: relative;
  width: 100%;
  text-align: left;
  font-size: 15px;
  line-height: 22px;
  color: $text-primary;
  
  @media (max-width: $md) {
    font-size: 13px;
    color: rgba(26, 23, 23, 0.6);
  }
  
  &.blocked {
    padding-left: 24px;
    &::before {
      content: url(../assets/img/svg/ic16_blocked.svg);
      position: absolute;
      top: 3px;
      left: 0;
      width: 16px;
      height: 16px;
    }
    
    & ~ .table__address {
      margin-left: 24px;
    }
    
    & ~ .table__address {
      
      @media (max-width: $md) {
        margin-left: 0;
      }
    }
  }
  
  p {
    font-size: 13px;
    line-height: 18px;
    color: $text-secondary;
  }
}

.table {
  
  &__header {
    
    @media (max-width: $md) {
      display: none;
    }
    
    & > div {
      user-select: none;
    }
  }
  
  &__id {
    grid-area: id;
    
    &::after {
      
      @media (max-width: $md) {
        content: '';
        position: absolute;
        top: 10px;
        right: 6px;
        width: 2px;
        height: 2px;
        background-color: rgba(26, 23, 23, 0.6);
      }
    }
    
    @media (max-width: $md) {
      margin-right: 17px;
    }
  }

  &__title {
    font-size: 15px;
    grid-area: title;
    line-height: 22px;
    
    @media (max-width: $md) {
      margin-bottom: 7px;
      color: $text-primary;
    }
  }

  &__type {
    grid-area: type;
  }

  &__distributor {
    grid-area: distributor;
  }
  
  &__address {
    grid-area: address;
  }
}
</style>