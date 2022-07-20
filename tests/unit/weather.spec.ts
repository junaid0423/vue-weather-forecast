import weather from "@/components/weather/weather.vue";
import { mount } from "@vue/test-utils";

describe("weather.vue", () => {
  test("Testing started", () => {
    const wrapper = mount(weather);
    expect(wrapper);
  });
});
