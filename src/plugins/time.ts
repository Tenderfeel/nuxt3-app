import { defineNuxtPlugin } from '#app'

class Time {
  public format(dateText: string, format = 'YYYY/MM/DD') {
    let date = new Date(dateText);
    format = format.replace(/YYYY/g, date.getFullYear());
    format = format.replace(/MM/g, date.getMonth() + 1);
    format = format.replace(/DD/g, date.getDate());
    format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2));
    format = format.replace(/H/g, date.getHours());
    format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
    format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
    if (format.match(/S/g)) {
      let milliSeconds = ('00' + date.getMilliseconds()).slice(-3);
      let length = format.match(/S/g).length;
      for (let i = 0; i < length; i++) {
        format = format.replace(/S/, milliSeconds.substring(i, i + 1));
      }
    }
    return format;
  }
}

export default defineNuxtPlugin(nuxtApp => {

  const time = new Time();

  nuxtApp.provide('time', time);
})

declare module '#app' {
  interface NuxtApp {
    $time: {
      format(dateText: string): string
    }
  }
}