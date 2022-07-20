<template src="./weather.html"></template>

<script lang="ts">
import { defineComponent } from "vue";
import MainHTTPService from "@/services/http";

import OneDay from "@/types/one-day.type";
import OneCall from "@/types/one-call.type";
import { Weather } from "@/types/weather.type";

export default defineComponent({
  name: "weather-component",
  data() {
    return {
      current: {} as OneDay,
      nextDays: [] as OneDay[],
      isLoading: true,
      location: {
        lat: 41.3888,
        lon: 2.159,
        country: "Spain",
        city: "Barcelona",
      },
      windDirectionDic: {
        0: "N",
        1: "N",
        2: "NE",
        3: "NE",
        4: "E",
        5: "E",
        6: "SE",
        7: "SE",
        8: "S",
        9: "S",
        10: "S",
        11: "SW",
        12: "SW",
        13: "W",
        14: "W",
        15: "W",
        16: "NW",
        17: "NW",
        18: "N",
      },
      weekDays: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Today",
      ],
    };
  },
  created() {
    this.getWeather();
  },
  methods: {
    async getWeather() {
      let res: OneCall = await MainHTTPService.getWeather(
        this.location.lat,
        this.location.lon
      );
      this.current = res.current;
      this.nextDays = res.daily.slice(0, 6);
      this.isLoading = false;
    },
    getImage(weather: Weather) {
      return require(`./../../assets/${weather.description.toLowerCase()}.svg`);
    },
    temp(temp: number) {
      return Math.round(temp - 273.15);
    },
    day(dt: number) {
      const d = new Date(dt * 1000).getDay();
      return new Date().getDay() === d ? this.weekDays[7] : this.weekDays[d];
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.current-img {
  height: 120px;
  max-width: 100px;
}
.d-img {
  height: 50px;
  max-width: 50px;
}
.hot {
  color: red;
}
.d-row {
  align-items: center;
  justify-content: space-between;
}
.day {
  width: 100px;
}
</style>
