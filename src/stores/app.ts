import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const someValue = ref(0);
  const someComputedValue = computed(() => someValue.value);

  function changeValue() {
    someValue.value++;
  }

  return { changeValue, someComputedValue, someValue };
});
