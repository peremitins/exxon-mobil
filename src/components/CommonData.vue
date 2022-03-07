<template>
  <div class="common-data">
    <div class="common-data__status">
      Состояние (Status)
    </div>
      <ToggleButtonGroup
        class="common-data__btn-toggle"
        :selected="selected"
        :tabs="tabs"
        @changeSelectVal="changeSelectVal"
      />
      <section class="common-data__main divider">
        <div class="row row-1">
          <h5 class="common-data__title title">Основное</h5>
        </div>
        <div class="row row-2">
          <p class="common-data__subtitle subtitle">Тип (Type)</p>
          <multiselect
            v-model="selectType"
            :options="['Сервисная станция (Mobil 1 Centr)', 'item-2', 'item-3']"
            :searchable="false"
            :close-on-select="true"
            :show-labels="false"
            placeholder="Выберите тип"
          />
        </div>
        <div class="row row-3">
          <p class="common-data__subtitle subtitle">Наименование точки (Name of Location)</p>
          <label>
            <input
              class="field"
              type="text"
              value="Моbil 1 Центр Автосервис на Кропоткина (ТРИО ООО_ИП Саитова)"
              placeholder="Введите наименование точки"
            >
          </label>
        </div>
        <div class="row row-4">
          <p class="common-data__subtitle subtitle">Наименование юридического лица или ИП</p>
          <label>
            <input
              class="field"
              type="text"
              value="ИП Саитов И. О."
              placeholder="Введите наименование юридического лица"
            >
          </label>
        </div>
        <div class="row row-5">
          <p class="common-data__subtitle subtitle">Снабжение точки</p>
          <multiselect
            v-model="selectDistributor"
            :options="['Дистрибьютор', 'item-2', 'item-3']"
            :searchable="false"
            :close-on-select="true"
            :show-labels="false"
            placeholder="Выберите дистрибьютора"
          />
        </div>
        <div class="row row-6">
          <p class="common-data__subtitle subtitle">ИНН (TIM)</p>
          <label>
            <input
              class="field"
              type="text"
              value="484618464956"
              placeholder="Введите ИНН"
            >
          </label>
        </div>
        <div class="row row-7 link-external">
          <p class="common-data__subtitle subtitle">Ссылка на L-360</p>
          <label>
            <input class="field" type="text" value="www.l360.com">
            <router-link to="/" target="_blank" />
          </label>
        </div>
        <div class="row row-8">
          <p class="common-data__subtitle subtitle">Канал (Channel)</p>
          <multiselect
            v-model="selectChannel"
            :options="['СТО', 'item-2', 'item-3']"
            :searchable="false"
            :close-on-select="true"
            :show-labels="false"
            placeholder="Выберите канал"
          />
        </div>
        <div class="row row-9">
          <p class="common-data__subtitle subtitle">Субканал (Subchannel)</p>
          <multiselect
            v-model="selectSubchannel"
            :options="['Mobil 1 Centr', 'item-2', 'item-3']"
            :searchable="false"
            :close-on-select="true"
            :show-labels="false"
            placeholder="Выберите субканал"
          />
        </div>
        <div class="row row-10 common-data__slider">
          <ButtonAdd>
            <svg>
              <use xlink:href="../assets/img/svg/sprite.svg#ic24_bttn_upload" />
            </svg>
            Загрузить фотографии точки
          </ButtonAdd>
          <div class="common-data__slider-swiper">
            <swiper
              ref="mySwiper"
              class="swiper"
              :options="swiperOption"
            >
              <swiper-slide>
                <img src="@/assets/img/photo.jpg" alt="Фотография точки">
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/img/photo.jpg" alt="Фотография точки">
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/img/photo.jpg" alt="Фотография точки">
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/img/photo.jpg" alt="Фотография точки">
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/img/photo.jpg" alt="Фотография точки">
              </swiper-slide>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <div class="common-data__slider-checkbox">
              <label class="custom-checkbox">
                <input type="checkbox" value="slider-checkbox">
                <span>Основное</span>
              </label>
            </div>
            
            <button class="common-data__slider-close">
              <svg>
                <use xlink:href="../assets/img/svg/sprite.svg#ic24_cancel-slider" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      
      <section class="common-data__address divider">
        <div class="row row-1">
          <h5 class="common-data__title title">Адрес</h5>
        </div>
        <div class="row row-2">
          <p class="common-data__subtitle subtitle">Страна (Country)</p>
          <multiselect
            v-model="selectCountry"
            :options="['Россия', 'item-2', 'item-3']"
            :searchable="false"
            :close-on-select="true"
            :show-labels="false"
            placeholder="Выберите страну"
          />
        </div>
        <div class="row row-3">
          <p class="common-data__subtitle subtitle">Регион (Region)</p>
          <multiselect
            v-model="selectRegion"
            :options="['Московская область', 'item-2', 'item-3']"
            :searchable="false"
            :close-on-select="true"
            :show-labels="false"
            placeholder="Выберите регион"
          />
        </div>
        <div class="row row-4">
          <p class="common-data__subtitle subtitle">Город (City/Town)</p>
          <multiselect
            v-model="selectCity"
            :options="['Москва', 'item-2', 'item-3']"
            :searchable="false"
            :close-on-select="true"
            :show-labels="false"
            placeholder="Выберите город"
          />
        </div>
        <div class="row row-5">
          <p class="common-data__subtitle subtitle">Почтовый индекс (Postcode)</p>
          <label>
            <input
              class="field"
              type="text"
              value="986526"
              placeholder="Введите индекс"
            >
          </label>
        </div>
        <div class="row row-6">
          <p class="common-data__subtitle subtitle">Улица (Street)</p>
          <label>
            <input
              class="field"
              type="text"
              value="Ленина"
              placeholder="Введите улицу"
            >
          </label>
        </div>
        <div class="row row-7">
          <p class="common-data__subtitle subtitle">Дом (Building)</p>
          <label>
            <input
              class="field"
              type="text"
              value="26"
              placeholder="Введите дом"
            >
          </label>
        </div>
        <div class="row row-8">
          <p class="common-data__subtitle subtitle">Строение / Корпус (Building)</p>
          <label>
            <input
              class="field"
              type="text"
              value="5"
              placeholder="Введите строение / корпус"
            >
          </label>
        </div>
        <div class="row row-9">
          <p class="common-data__subtitle subtitle">Офис / Помещение (Office)</p>
          <label>
            <input
              class="field"
              type="text"
              value="5"
              placeholder="Введите офис / помещение"
            >
          </label>
        </div>
        <div class="row row-10">
          <p class="common-data__subtitle subtitle">Широта (Latitude)</p>
          <label>
            <input
              class="field"
              type="text"
              value="55°33ʹ31,46ʺ"
              placeholder="Введите широту"
            >
          </label>
        </div>
        <div class="row row-11">
          <p class="common-data__subtitle subtitle">Долгота (Longitude)</p>
          <label>
            <input
              class="field"
              type="text"
              value="37°22ʹ43,84ʺ"
              placeholder="Введите долготу"
            >
          </label>
        </div>
        <div class="row row-12">
          <label>
            <input class="field" type="button" value="Получить из API Яндекс">
          </label>
        </div>
        <div class="row row-13">
          <p class="common-data__subtitle subtitle">Yandex ID</p>
          <label>
            <input
              class="field"
              type="text"
              value="YX-462793589"
              placeholder="Введите ID"
            >
          </label>
        </div>
        <div class="row row-14 common-data__map">
          <yandex-map
            :coords="[55.769574, 37.609856]"
            :zoom="12"
            :controls="[]"
          />
        </div>
      </section>
      
      <section class="common-data__KHWS divider">
        <div class="row row-1">
          <h5 class="common-data__title title">KHWS</h5>
        </div>
        <div class="row row-2">
          <p class="common-data__subtitle subtitle">KHWS ID</p>
          <label>
            <input
              class="field"
              type="text"
              value="123e4567-e89b-12d3-a456-426655440000"
              placeholder="Введите ID"
            >
          </label>
        </div>
      </section>
      
      <section class="common-data__contacts divider">
        <div class="row row-1">
          <h5 class="common-data__title title">Контакты</h5>
        </div>
        <div class="row row-2">
          <p class="common-data__subtitle subtitle">Сайт (Website)</p>
          <div class="common-data__contacts-input-wrapper">
            <input
              class="common-data__contacts-input field"
              type="text"
              value="exxonmobilservice.com"
              placeholder="Введите сайт"
            >
            <label class="radio">
              <input type="radio" name="website" checked>
              <span class="radio__radio-button" /><span class="radio__radio-text">Основной</span>
            </label>
          </div>
          <div class="common-data__contacts-input-wrapper">
            <input
              class="common-data__contacts-input field"
              type="text"
              value="emservice@mail.com"
              placeholder="Введите сайт"
            >
            <label class="radio">
              <input type="radio" name="website">
              <span class="radio__radio-button" /><span class="radio__radio-text">Основной</span>
            </label>
          </div>
          <ButtonAdd
            class="common-data__add-btn add-btn"
          >
            <svg>
              <use xlink:href="../assets/img/svg/sprite.svg#ic24_bttn_add" />
            </svg>
            Добавить
          </ButtonAdd>
        </div>
        
        <div class="row row-3">
          <p class="common-data__subtitle subtitle">Общий E-mail организации</p>
          <div class="common-data__contacts-input-wrapper">
            <input
              class="common-data__contacts-input field"
              type="text"
              value="exxonmobilservice@mail.com"
              placeholder="Введите e-mail"
            >
            <label class="radio">
              <input type="radio" name="email" checked>
              <span class="radio__radio-button" /><span class="radio__radio-text">Основной</span>
            </label>
          </div>
          <div class="common-data__contacts-input-wrapper">
            <input
              class="common-data__contacts-input field"
              type="text"
              value="emservice@mail.com"
              placeholder="Введите e-mail"
            >
            <label class="radio">
              <input type="radio" name="email">
              <span class="radio__radio-button" /><span class="radio__radio-text">Основной</span>
            </label>
          </div>
          <ButtonAdd
            class="common-data__add-btn add-btn"
          >
            <svg>
              <use xlink:href="../assets/img/svg/sprite.svg#ic24_bttn_add" />
            </svg>
            Добавить
          </ButtonAdd>
        </div>
        
        <div class="row row-4">
          <p class="common-data__subtitle subtitle">Телефон (Telephone)</p>
          <div class="common-data__contacts-input-wrapper">
            <input
              class="common-data__contacts-input field"
              type="text"
              value="+7 (987) 654-32-10"
              placeholder="Введите телефон"
            >
          </div>
          <ButtonAdd
            class="common-data__add-btn add-btn"
          >
            <svg>
              <use xlink:href="../assets/img/svg/sprite.svg#ic24_bttn_add" />
            </svg>
            Добавить
          </ButtonAdd>
        </div>
      </section>
      
      <section class="common-data__schedule divider">
        <h5 class="common-data__title title">График работы</h5>
        <div class="common-data__subtitle-wrapper">
          <p class="common-data__subtitle common-data__subtitle-days">Дни недели</p>
          <p class="common-data__subtitle common-data__subtitle-hours">С — До</p>
        </div>
        <div class="common-data__schedule-row">
          <multiselect
            class="select"
            v-model="selectSchedule"
            :options="optionsSchedule"
            :multiple="true"
            :close-on-select="false"
            :clear-on-select="false"
            :preserve-search="true"
            placeholder="Выберите дни"
            :searchable="false"
            label="dayLong"
            track-by="dayLong"
            :preselect-first="false"
          >
            <template slot="selection" slot-scope="{ values }">
              <span class="multiselect__single" v-if="values.length">
                {{ values.map(el => el.dayShort).join(', ') }}
              </span>
            </template>
          </multiselect>
          <div class="common-data__schedule-input-wrapper">
            <masked-input
              class="common-data__schedule-input field"
              type="text"
              mask="11:11 — 11:11"
              placeholder="ЧЧ:ММ — ЧЧ:ММ"
            />
            <svg>
              <use xlink:href="../assets/img/svg/sprite.svg#ic32_cancel" />
            </svg>
          </div>
        </div>
        
        <div class="common-data__schedule-row">
          <multiselect
            class="select"
            v-model="selectSchedule2"
            :options="optionsSchedule"
            :multiple="true"
            :close-on-select="false"
            :clear-on-select="false"
            :preserve-search="true"
            placeholder="Выберите дни"
            :searchable="false"
            label="dayLong"
            track-by="dayLong"
            :preselect-first="false"
          >
            <template slot="selection" slot-scope="{ values }">
              <span class="multiselect__single" v-if="values.length">
                {{ values.map(el => el.dayShort).join(', ') }}
              </span>
            </template>
          </multiselect>
          <div class="common-data__schedule-input-wrapper">
            <masked-input
              class="common-data__schedule-input field"
              type="text"
              mask="11:11 — 11:11"
              placeholder="ЧЧ:ММ — ЧЧ:ММ"
            />
            <svg>
              <use xlink:href="../assets/img/svg/sprite.svg#ic32_cancel" />
            </svg>
          </div>
        </div>
        
        <ButtonAdd
          class="common-data__add-btn add-btn"
        >
          <svg>
            <use xlink:href="../assets/img/svg/sprite.svg#ic24_bttn_add" />
          </svg>
          Добавить
        </ButtonAdd>
      </section>
      
      <section class="common-data__start-work divider">
        <div class="row row-1">
          <h5 class="common-data__title title">Начало работы с Mobil 1 Centr</h5>
        </div>
        <div class="row row-2">
          <p class="common-data__subtitle subtitle">Вероятность закрытия станции</p>
          <multiselect
            v-model="selectReasons"
            :options="['Клиент готовится к переезду', 'item-2', 'item-3']"
            :searchable="false"
            :close-on-select="true"
            :show-labels="false"
            placeholder="Выберите"
          />
        </div>
        <div class="row row-3">
          <p class="common-data__subtitle subtitle">Дата начала работы как M1C</p>
          <v-date-picker v-model="dateStartWork" class="calendar-icon" :popover="{ visibility: 'click' }">
            <template v-slot="{ inputValue, inputEvents }">
              <input
                class="field icon"
                :value="inputValue"
                v-on="inputEvents"
                placeholder="Укажите дату"
              />
              <button
                type="button"
                class="calendar-icon-close"
                @click="dateStartWork = null"
              >
                <svg>
                  <use xlink:href="../assets/img/svg/sprite.svg#ic24_cancel" />
                </svg>
              </button>
            </template>
          </v-date-picker>
        </div>
        <div class="row row-4">
          <p class="common-data__subtitle subtitle">Дата заключения соглашения</p>
          <v-date-picker v-model="dateStartAgreement" class="calendar-icon" :popover="{ visibility: 'click' }">
            <template v-slot="{ inputValue, inputEvents }">
              <input
                class="field icon"
                :value="inputValue"
                v-on="inputEvents"
                placeholder="Укажите дату"
              />
              <button
                type="button"
                class="calendar-icon-close"
                @click="dateStartAgreement = null"
              >
                <svg>
                  <use xlink:href="../assets/img/svg/sprite.svg#ic24_cancel" />
                </svg>
              </button>
            </template>
          </v-date-picker>
        </div>
        <div class="row row-5">
          <p class="common-data__subtitle subtitle">Дата окончания соглашения</p>
          <v-date-picker v-model="dateFinishedAgreement" class="calendar-icon" :popover="{ visibility: 'click' }">
            <template v-slot="{ inputValue, inputEvents }">
              <input
                class="field icon"
                :value="inputValue"
                v-on="inputEvents"
                placeholder="Укажите дату"
              />
              <button
                type="button"
                class="calendar-icon-close"
                @click="dateFinishedAgreement = null"
              >
                <svg>
                  <use xlink:href="../assets/img/svg/sprite.svg#ic24_cancel" />
                </svg>
              </button>
            </template>
          </v-date-picker>
        </div>
        <div class="row row-6">
          <p class="common-data__subtitle subtitle">Операторское соглашение</p>
          <div class="chips-wrapper">
            <span class="chips">
              <span>
                Соглашение 1.pdf
              </span>
              <button class="chips__delete">
                <svg>
                  <use xlink:href="../assets/img/svg/sprite.svg#ic24_cancel" />
                </svg>
              </button>
            </span>
            <span class="chips">
              <span>
                Соглашение 2.pdf
              </span>
              <button class="chips__delete">
                <svg>
                  <use xlink:href="../assets/img/svg/sprite.svg#ic24_cancel" />
                </svg>
              </button>
            </span>
          </div>
        </div>
        <div class="row row-7">
          <ButtonAdd>
            <svg>
              <use xlink:href="../assets/img/svg/sprite.svg#ic24_bttn_upload" />
            </svg>
            Загрузить
          </ButtonAdd>
        </div>
      </section>
      
      <section class="common-data__responsible divider">
        <div class="row row-1">
          <h5 class="common-data__title title">Связь с ответсвенными</h5>
        </div>
        <div class="row row-2">
          <p class="common-data__subtitle subtitle">Ответственный ТА</p>
          <multiselect
            v-model="selectResponsible"
            :options="['Джон Малкович', 'item-2', 'item-3']"
            :searchable="false"
            :close-on-select="true"
            :show-labels="false"
            placeholder="Выберите ответственного"
          />
        </div>
        <div class="row row-3">
          <p class="common-data__subtitle subtitle">Дистрибьютор (Distributor)</p>
          <multiselect
            v-model="selectResponsibleDistributor"
            :options="['Дистрибьютор 1', 'item-2', 'item-3']"
            :searchable="false"
            :close-on-select="true"
            :show-labels="false"
            placeholder="Выберите дистрибьютора"
          />
        </div>
      </section>
      
      <section class="common-data__other divider">
        <div class="row row-1">
          <h5 class="common-data__title title">Прочее</h5>
        </div>
        <div class="row row-2">
          <p class="common-data__subtitle subtitle">Примечание</p>
          <textarea placeholder="Необязательно" />
        </div>
      </section>
  </div>
</template>

<script>
import { yandexMap } from 'vue-yandex-maps'
import ButtonAdd from './ui/ButtonAdd'
import ToggleButtonGroup from '@/components/ui/ToggleButtonGroup'
import MaskedInput from 'vue-masked-input'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import "swiper/css/swiper.css"

export default {
  name: 'CommonData',
  components: {
    ButtonAdd,
    ToggleButtonGroup,
    Swiper,
    SwiperSlide,
    MaskedInput,
    yandexMap
  },
  data() {
    return {
      selected: "Активирована (Activated)",
      tabs: {
        'Активирована (Activated)': 'Активирована (Activated)',
        'Заблокировать (Block)': 'Заблокировать (Block)'
      },
      OpenIndicator: {
        render: createElement => createElement('span', {class: {'toggle-arrow': true}}),
      },
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        spaceBetween: 70,
        pagination: {
          el: '.swiper-pagination',
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            return `<div>${current} из ${total}</div>`
          }
        }
      },
      selectType: '',
      selectDistributor: '',
      selectChannel: '',
      selectSubchannel: '',
      selectCountry: '',
      selectRegion: '',
      selectCity: '',
      selectReasons: '',
      selectResponsible: '',
      selectResponsibleDistributor: '',
      selectSchedule: [],
      selectSchedule2: [],
      optionsSchedule: [
        { dayLong: 'Понедельник', dayShort: 'ПН' },
        { dayLong: 'Вторник', dayShort: 'ВТ' },
        { dayLong: 'Среда', dayShort: 'СР' },
        { dayLong: 'Четверг', dayShort: 'ЧТ' },
        { dayLong: 'Пятница', dayShort: 'ПТ' },
        { dayLong: 'Суббота', dayShort: 'СБ' },
        { dayLong: 'Воскресенье', dayShort: 'ВС' }
      ],
      dateStartWork: null,
      dateStartAgreement: null,
      dateFinishedAgreement: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.mySwiper.updateSwiper();
    });
  },
  methods: {
    changeSelectVal(val) {
      this.selected = val;
    }
  }
}
</script>
