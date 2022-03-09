<template>
  <div class="brand-assessment">
    <h5 class="brand-assessment__title title">
      Результаты аудита
    </h5>
    <p class="brand-assessment__subtitle subtitle">
      Отметьте год и укажите итоги аудита
    </p>
    <div class="brand-assessment__content">
      <div class="brand-assessment__row" v-for="(audit, idx) in audits" :key="idx">
        <div class="brand-assessment__row-year column">
          {{ audit.date }}
        </div>
        <div class="brand-assessment__row-audit-completed column">
          <label class="custom-checkbox">
            <input type="checkbox" value="audit-checkbox" v-model="audit.status">
            <span>Аудит проведен</span>
          </label>
        </div>
        <div v-if="audit.status" class="brand-assessment__percent-completed column">
          <span class="percent-icon">
            <input type="number" onchange="blur()" :value="audit.percentCompleted" class="field icon-right">
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrandAssessment',
  data() {
    return {
      audits: [
        {
          date: 2022,
          status: false,
          percentCompleted: 74
        },
        {
          date: 2021,
          status: true,
          percentCompleted: 14
        },
        {
          date: 2020,
          status: true,
          percentCompleted: 74
        },
        {
          date: 2019,
          status: false,
          percentCompleted: 74
        },
        {
          date: 2018,
          status: true,
          percentCompleted: 44
        }
      ]
    }
  }
}
</script>