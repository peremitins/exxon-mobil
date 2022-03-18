<template>
  <div class="common-data">
    <div class="common-data__status">
      <div class="common-data__status-subtitle">
        <p class="subtitle">Состояние (Status)</p>
        <multiselect
          v-model="selectStatus"
          :options="['Подключено (Activated) ', 'item-2', 'item-3']"
          :searchable="false"
          :close-on-select="true"
          :show-labels="false"
          placeholder="Выберите"
        />
      </div>
    </div>
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
          <label class="column-reverse">
            <input
              class="field"
              type="text"
              onchange="blur()"
              value="Моbil 1 Центр Автосервис на Кропоткина (ТРИО ООО_ИП Саитова)"
              placeholder="Введите наименование точки"
            >
            <p class="common-data__subtitle subtitle">Наименование точки (Name of Location)</p>
          </label>
        </div>
        <div class="row row-4">
          <label class="column-reverse">
            <input
              class="field"
              type="text"
              onchange="blur()"
              value="ИП Саитов И. О."
              placeholder="Введите наименование юридического лица"
            >
            <p class="common-data__subtitle subtitle">Наименование юридического лица или ИП</p>
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
          <label class="column-reverse">
            <input
              class="field"
              type="text"
              onchange="blur()"
              value="484618464956"
              placeholder="Введите ИНН"
            >
            <p class="common-data__subtitle subtitle">ИНН (TIM)</p>
          </label>
        </div>
        <div class="row row-7 link-external">
          <p class="common-data__subtitle subtitle">Ссылка на L-360</p>
          <label class="link-external">
            <input
              class="field"
              type="text"
              onchange="blur()"
              value="www.l360.com"
            >
            <router-link to="/" target="_blank" class="router-link" />
            <svg>
              <use xlink:href="../assets/img/svg/sprite.svg#ic_external" />
            </svg>
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
          <label class="column-reverse">
            <input
              class="field"
              type="text"
              onchange="blur()"
              value="986526"
              placeholder="Введите индекс"
            >
            <p class="common-data__subtitle subtitle">Почтовый индекс (Postcode)</p>
          </label>
        </div>
        <div class="row row-6">
          <label class="column-reverse">
            <input
              class="field"
              type="text"
              onchange="blur()"
              value="Ленина"
              placeholder="Введите улицу"
            >
            <p class="common-data__subtitle subtitle">Улица (Street)</p>
          </label>
        </div>
        <div class="row row-7">
          <label class="column-reverse">
            <input
              class="field"
              type="text"
              onchange="blur()"
              value="26"
              placeholder="Введите дом"
            >
            <p class="common-data__subtitle subtitle">Дом (Building)</p>
          </label>
        </div>
        <div class="row row-8">
          <label class="column-reverse">
            <input
              class="field"
              type="text"
              onchange="blur()"
              value="5"
              placeholder="Введите строение / корпус"
            >
            <p class="common-data__subtitle subtitle">Строение / Корпус (Building)</p>
          </label>
        </div>
        <div class="row row-9">
          <label class="column-reverse">
            <input
              class="field"
              type="text"
              onchange="blur()"
              value="5"
              placeholder="Введите офис / помещение"
            >
            <p class="common-data__subtitle subtitle">Офис / Помещение (Office)</p>
          </label>
        </div>
        <div class="row row-10">
          <label class="column-reverse">
            <input
              class="field"
              type="text"
              onchange="blur()"
              value="55°33ʹ31,46ʺ"
              placeholder="Введите широту"
            >
            <p class="common-data__subtitle subtitle">Широта (Latitude)</p>
          </label>
        </div>
        <div class="row row-11">
          <label class="column-reverse">
            <input
              class="field"
              type="text"
              onchange="blur()"
              value="37°22ʹ43,84ʺ"
              placeholder="Введите долготу"
            >
            <p class="common-data__subtitle subtitle">Долгота (Longitude)</p>
          </label>
        </div>
        <div class="row row-12">
          <label>
            <input class="field" type="button" value="Получить из API Яндекс">
          </label>
        </div>
        <div class="row row-13">
          <label class="column-reverse">
            <input
              class="field"
              type="text"
              onchange="blur()"
              value="YX-462793589"
              placeholder="Введите ID"
            >
            <p class="common-data__subtitle subtitle">Yandex ID</p>
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
          <label class="column-reverse">
            <input
              class="field"
              type="text"
              onchange="blur()"
              value="123e4567-e89b-12d3-a456-426655440000"
              placeholder="Введите ID"
            >
            <p class="common-data__subtitle subtitle">KHWS ID</p>
          </label>
        </div>
      </section>
      
      <section class="common-data__contacts divider">
        <div class="row row-1">
          <h5 class="common-data__title title">Контакты</h5>
        </div>
        <div class="row row-2">
          <div class="common-data__contacts-header">
            <p class="common-data__subtitle subtitle" :class="{ red: inputWebsite }">Сайт (Website)</p>
            <p class="common-data__checkbox-title subtitle">Основной (Main)</p>
          </div>
          <div class="common-data__contacts-input-wrapper">
            <input
              class="common-data__contacts-input field"
              type="text"
              onchange="blur()"
              @focus="inputWebsite = true"
              @blur="inputWebsite = false"
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
              onchange="blur()"
              @focus="inputWebsite = true"
              @blur="inputWebsite = false"
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
          <div class="common-data__contacts-header">
            <p class="common-data__subtitle subtitle" :class="{ red: inputEmail }">Общий E-mail организации</p>
            <p class="common-data__checkbox-title subtitle">Основной (Main)</p>
          </div>
          <div class="common-data__contacts-input-wrapper">
            <input
              class="common-data__contacts-input field"
              type="text"
              onchange="blur()"
              @focus="inputEmail = true"
              @blur="inputEmail = false"
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
              onchange="blur()"
              @focus="inputEmail = true"
              @blur="inputEmail = false"
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
          <div class="common-data__contacts-input-wrapper column-reverse">
            <input
              class="common-data__contacts-input field"
              type="text"
              onchange="blur()"
              value="+7 (987) 654-32-10"
              placeholder="Введите телефон"
            >
            <p class="common-data__subtitle subtitle">Телефон (Telephone)</p>
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
        <h5 class="common-data__title title row">График работы</h5>
        <div class="common-data__subtitle-wrapper">
          <p class="common-data__subtitle common-data__subtitle-days">Дни недели</p>
          <p class="common-data__subtitle common-data__subtitle-hours" :class="{ red: inputTime }">С — До</p>
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
              ref="time-mask"
              class="common-data__schedule-input field"
              type="text"
              onchange="blur()"
              @focus.native="inputTime = true"
              @blur.native="inputTime = false"
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
              onchange="blur()"
              @focus.native="inputTime = true"
              @blur.native="inputTime = false"
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
          <v-date-picker v-model="dateStartWork" class="calendar-icon" :popover="{ visibility: 'click' }">
            <template v-slot="{ inputValue, inputEvents }">
              <input
                class="field icon"
                :value="inputValue"
                v-on="inputEvents"
                readonly
                placeholder="Укажите дату"
              />
              <svg>
                <use xlink:href="../assets/img/svg/sprite.svg#ic24_calendar" />
              </svg>
              <p class="common-data__subtitle subtitle">Дата начала работы как M1C</p>
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
          <v-date-picker v-model="dateStartAgreement" class="calendar-icon" :popover="{ visibility: 'click' }">
            <template v-slot="{ inputValue, inputEvents }">
              <input
                class="field icon"
                :value="inputValue"
                v-on="inputEvents"
                readonly
                placeholder="Укажите дату"
              />
              <svg>
                <use xlink:href="../assets/img/svg/sprite.svg#ic24_calendar" />
              </svg>
              <p class="common-data__subtitle subtitle">Дата заключения соглашения</p>
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
          <v-date-picker v-model="dateFinishedAgreement" class="calendar-icon" :popover="{ visibility: 'click' }">
            <template v-slot="{ inputValue, inputEvents }">
              <input
                class="field icon"
                :value="inputValue"
                v-on="inputEvents"
                readonly
                placeholder="Укажите дату"
              />
              <svg>
                <use xlink:href="../assets/img/svg/sprite.svg#ic24_calendar" />
              </svg>
              <p class="common-data__subtitle subtitle">Дата окончания соглашения</p>
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
          <textarea-autosize 
            placeholder="Необязательно"
            :min-height="96"
            :max-height="200"
          />
          <p class="common-data__subtitle subtitle">Примечание</p>
        </div>
      </section>
  </div>
</template>

<script>
import { yandexMap } from 'vue-yandex-maps'
import ButtonAdd from './ui/ButtonAdd'
import MaskedInput from 'vue-masked-input'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import "swiper/css/swiper.css"

export default {
  name: 'CommonData',
  components: {
    ButtonAdd,
    Swiper,
    SwiperSlide,
    MaskedInput,
    yandexMap
  },
  data() {
    return {
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
      selectStatus: '',
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
      inputWebsite: null,
      inputEmail: null,
      inputTime: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.mySwiper.updateSwiper()
    });
  }
}
</script>
