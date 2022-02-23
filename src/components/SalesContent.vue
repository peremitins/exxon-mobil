<template>
  <div class="sales__content">
    <div class="sales__volume-wrapper">
      <div class="sales__volume" v-for="(volume, idx) in volumes" :key="idx">
        <div class="sales__volume-title">
          {{ volume.name }}
        </div>
        <span class="sales__volume-value litres">
          <input type="number" :value="volume.value" class="field icon-right">
        </span>
      </div>
    </div>
    <div class="sales__products-wrapper">
      <div class="sales__assortment-list sales__products-item">
        <div class="sales__title">
          Список ассортимента
        </div>
        <label class="custom-checkbox" v-for="(assortment, idx) in assortments" :key="idx">
          <input type="checkbox" v-model="assortment.checked" :checked="assortment.checked">
          <span>
            {{ assortment.name }}
          </span>
        </label>
      </div>
      <div class="sales__focus-products sales__products-item">
        <div class="sales__title">
          Фокусные продукты
        </div>
        <div class="sales__focus-product" v-for="(focusProduct, idx) in focusProducts" :key="idx">
          <p class="sales__focus-product-name">
            {{ focusProduct.name }}
          </p>
          <span class="sales__volume-value litres">
            <input type="number" :value="focusProduct.value" class="field icon-right">
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SalesContent',
  components: {
  },
  data() {
    return {
      volumes: [
        {
          name: 'Q1',
          value: 10000
        },
        {
          name: 'Q2',
          value: 10000
        },
        {
          name: 'Q3',
          value: 10000
        },
        {
          name: 'Q4',
          value: 10000
        },
        {
          name: 'Total',
          value: 40000
        },
        {
          name: 'Total Flagship',
          value: 10000
        },
        {
          name: 'Total Premium',
          value: 10000
        },
      ],
      assortments: [
        {
          name: 'Mobil 1 0W-40 / Mobil 1™ FS 0W-40',
          checked: true
        },
        {
          name: 'Mobil 1™ ESP x3 0W-40',
          checked: false
        },
        {
          name: 'Mobil 1™ x1 5W-30',
          checked: true
        },
        {
          name: 'Mobil 1™ ESP LV 0W-30',
          checked: true
        },
        {
          name: 'Mobil Super™ 3000 x1 Diesel 5W-40',
          checked: false
        },
        {
          name: 'Mobil 1™ ESP x3 0W-40',
          checked: true
        },
        {
          name: 'Mobil Super™ 3000 x1 Formula FE 5W-30',
          checked: false
        },
        {
          name: 'Mobil 1™ ESP LV 0W-30',
          checked: false
        },
      ],
      focusProducts: [
        {
          name: 'Mobil Super™ 3000 XE 5W-30',
          value: 5000
        },
        {
          name: 'Mobil 1™ ESP x3 0W-40',
          value: 8000
        }
      ]
    }
  }
}
</script>