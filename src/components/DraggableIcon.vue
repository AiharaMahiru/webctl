<template>
    <div
      class="icon"
      :class="icon.type"
      :style="{ top: icon.position.y + 'px', left: icon.position.x + 'px' }"
      @mousedown="startDrag"
      @mouseup="stopDrag"
      @click="$emit('selectIcon', icon)"
      @contextmenu.prevent="$emit('removeIcon', icon)"
    >
      <!-- 在这里添加图标图片 -->
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    props: {
      icon: {
        type: Object,
        required: true,
      },
    },
    setup() {
      const isDragging = ref(false);
      const startPosition = ref({ x: 0, y: 0 });
      const mouseOffset = ref({ x: 0, y: 0 });
  
      const startDrag = (event) => {
        isDragging.value = true;
        startPosition.value = { x: event.clientX, y: event.clientY };
        mouseOffset.value = {
          x: event.clientX - event.target.offsetLeft,
          y: event.clientY - event.target.offsetTop,
        };
        window.addEventListener("mousemove", handleDrag);
        window.addEventListener("mouseup", stopDrag);
      };
  
      const handleDrag = (event) => {
        if (!isDragging.value) return;
        event.preventDefault();
        const newPosition = {
          x: event.clientX - mouseOffset.value.x,
          y: event.clientY - mouseOffset.value.y,
        };
        Object.assign(this.icon.position, newPosition);
      };
  
      const stopDrag = () => {
        if (!isDragging.value) return;
        isDragging.value = false;
        window.removeEventListener("mousemove", handleDrag);
        window.removeEventListener("mouseup", stopDrag);
      };
  
      return {
        startDrag,
        stopDrag,
      };
    },
  };
  </script>
  
  <style scoped>
  .icon {
    position: absolute;
    cursor: grab;
  }
  
  .icon.drone {
    /* 添加无人机图标样式 */
    background-image: url("../public/images/drone-icon.png");
    width: 50px;
    height: 50px;
    background-size: cover;
  }
  
  .icon.station {
    /* 添加基站图标样式 */
    background-image: url("../public/images/station-icon.png");
    width: 50px;
    height: 50px;
    background-size: cover;
  }
  </style>