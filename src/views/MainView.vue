<script lang="ts">
import { defineComponent } from "vue";
import CustomComponent from "../components/CustomComponent.vue";

// Composition API
export default defineComponent({
  setup(props, ctx) {
    // TODO
    console.log("DEBUG props:", props);
    console.log("DEBUG ctx:", ctx);
  },
  components: { CustomComponent },
});
</script>

<template>
  <div>
    <h1>Main View</h1>
    <CustomComponent />
  </div>
</template>
