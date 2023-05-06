<template>
    <div
      class="context-menu"
      :style="{ top: position.y + 'px', left: position.x + 'px' }"
      @contextmenu.prevent
    >
      <div
        class="context-menu-item"
        v-for="option in options"
        :key="option.event"
        @click="$emit(option.event, position)"
      >
        {{ option.label }}
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    props: {
      options: {
        type: Array,
        required: true,
      },
    },
    setup() {
      const position = ref({ x: 0, y: 0 });
  
      const handleContextMenu = (event) => {
        event.preventDefault();
        position.value = { x: event.clientX, y: event.clientY };
      };
  
      window.addEventListener("contextmenu", handleContextMenu);
  
      return {
        position,
      };
    },
  };
  </script>