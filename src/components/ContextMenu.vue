<!-- src/components/ContextMenu.vue -->
<!-- ... -->
<template>
  <div class="container" @contextmenu.prevent="showContextMenu">
    <div class="content">
      <slot></slot>
    </div>
    <div
      class="context-menu"
      :style="{ top: `${menuPosition.y}px`, left: `${menuPosition.x}px` }"
      v-show="menuVisible"
    >
      <div @click="onAddDrone">添加无人机</div>
      <div @click="onAddBaseStation">添加基站</div>
    </div>
  </div>
</template>
<!-- ... -->
<script>
export default {
  // ...
  methods: {
    // ...
    onAddDrone() {
      this.$emit("add-drone");
      this.hideContextMenu();
    },
    onAddBaseStation() {
      this.$emit("add-base-station");
      this.hideContextMenu();
    },
  },
  // ...
};
</script>
<!-- ... -->