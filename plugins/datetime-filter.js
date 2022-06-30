import Vue from 'vue';
import moment from 'moment';


function lang2locale(lang) {
  return lang === 'ar'
    ? 'ar-JO'
    : 'en-UK'
}

const fullDate = (dt, lang) => {
  const options = { 
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }
  return new Intl.DateTimeFormat(lang2locale(lang), options).format(new Date(dt))
}

const dayDate = (dt, lang) => {
  const weekday =  moment(dt).locale(lang).format("dddd");
  const dayMonth = new Intl.DateTimeFormat(lang2locale(lang), { day: 'numeric', month: 'long'}).format(new Date(dt))
  return `${weekday} - ${dayMonth}`
}

const dayFullDate = (dt, lang) => {
  const options = { 
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }
  return new Intl.DateTimeFormat(lang2locale(lang), options).format(new Date(dt))
}

const monthYearDate = (dt, lang) => {
  const options = { 
    month: 'long',
    year: 'numeric',
  }
  return new Intl.DateTimeFormat(lang2locale(lang), options).format(new Date(dt))
}

const monthDate = (dt, lang) => {
  return new Intl.DateTimeFormat(lang2locale(lang), { month: 'long' }).format(new Date(dt))
}

const time = (dt, lang) => {
  return moment(dt).locale(lang).format("H:mm A");
}

const day = (dt, lang) => {
  return moment(dt).locale(lang).format("dddd");
}

Vue.filter('fullDate', fullDate)
Vue.filter('dayDate', dayDate)
Vue.filter('dayFullDate', dayFullDate)
Vue.filter('time', time)
Vue.filter('day', day)
Vue.filter('monthYearDate', monthYearDate)
Vue.filter('monthDate', monthDate)
