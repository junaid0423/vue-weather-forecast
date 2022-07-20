<template>
  <Weather />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Weather from "@/components/weather/weather.vue"; // @ is an alias to /src

export default defineComponent({
  name: "home-view",
  components: {
    Weather,
  },
});
</script>
