<template>
  <div>
    <div class="promotions">
      <div class="promotions__checkbox-wrapper">
        <label class="custom-checkbox actual">
          <input type="checkbox" value="promotions-checkbox" checked>
          <span class="promotions__title actual__title">Mobil Super™ 3000 x1 5W-40 5 литров по цене 4</span>
        </label>
      </div>
      <div class="promotions__subtitle">
        5 литров по цене 4 (потенциально может быть более длинным, если механика более сложная) 10 литров по цене 6
      </div>
      <div class="promotions__row">
        <div class="promotions__row-caption">
          Дата проведения
        </div>
        <div class="promotions__row-description">
          25 августа 2022 — 25 декабря 2022
        </div>
      </div>
      <div class="promotions__row">
        <div class="promotions__row-caption">
          Канал
        </div>
        <div class="promotions__row-description">
          Розничные магазины
        </div>
      </div>
      <div class="promotions__row">
        <div class="promotions__row-caption">
          Группа товаров
        </div>
        <div class="promotions__row-description">
          Mobil Super 3000
        </div>
      </div>
      <div class="promotions__row">
        <div class="promotions__row-caption">
          География
        </div>
        <div class="promotions__row-description">
          Москва, Санкт-Петербург
        </div>
      </div>
      <div class="promotions__row">
        <div class="promotions__row-caption">
          Ссылка на акцию
        </div>
        <router-link to="/" class="promotions__row-description promotions__row-description-link">
          mymobil.ru/retail/promo
          <svg>
            <use xlink:href="../assets/img/svg/sprite.svg#ic_external" />
          </svg>
        </router-link>
      </div>
    </div>
    
    <div class="promotions">
      <div class="promotions__checkbox-wrapper">
        <label class="custom-checkbox actual">
          <input type="checkbox" value="promotions-checkbox">
          <span class="promotions__title actual__title">Mobil Super™ 3000 x1 5W-40 5 литров по цене 4</span>
        </label>
      </div>
      <div class="promotions__subtitle">
        5 литров по цене 4 (потенциально может быть более длинным, если механика более сложная) 10 литров по цене 6
      </div>
      <div class="promotions__row">
        <div class="promotions__row-caption">
          Дата проведения
        </div>
        <div class="promotions__row-description">
          25 августа 2022 — 25 декабря 2022
        </div>
      </div>
      <div class="promotions__row">
        <div class="promotions__row-caption">
          Канал
        </div>
        <div class="promotions__row-description">
          Розничные магазины
        </div>
      </div>
      <div class="promotions__row">
        <div class="promotions__row-caption">
          Группа товаров
        </div>
        <div class="promotions__row-description">
          Mobil Super 3000
        </div>
      </div>
      <div class="promotions__row">
        <div class="promotions__row-caption">
          География
        </div>
        <div class="promotions__row-description">
          Москва, Санкт-Петербург
        </div>
      </div>
      <div class="promotions__row">
        <div class="promotions__row-caption">
          Ссылка на акцию
        </div>
        <router-link to="/" class="promotions__row-description promotions__row-description-link">
          mymobil.ru/retail/promo
          <svg>
            <use xlink:href="../assets/img/svg/sprite.svg#ic_external" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Actual'
}
</script>