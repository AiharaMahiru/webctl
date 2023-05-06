<!-- src/App.vue -->
<template>
  <div id="app" @contextmenu.prevent="showContextMenu" @click="hideContextMenu">
    <div
      class="context-menu"
      :style="{ top: `${menuPosition.y}px`, left: `${menuPosition.x}px` }"
      v-show="menuVisible"
    >
      <div @click="option1">选项 1</div>
      <div @click="option2">选项 2</div>
      <div @click="option3">选项 3</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuVisible: false,
      menuPosition: { x: 0, y: 0 },
    };
  },
  methods: {
    showContextMenu(event) {
      this.menuPosition.x = event.clientX;
      this.menuPosition.y = event.clientY;
      this.menuVisible = true;
    },
    hideContextMenu() {
      this.menuVisible = false;
    },
    option1() {
      console.log("执行选项 1 的功能");
      this.hideContextMenu();
    },
    option2() {
      console.log("执行选项 2 的功能");
      this.hideContextMenu();
    },
    option3() {
      console.log("执行选项 3 的功能");
      this.hideContextMenu();
    },
  },
};
</script>

<style>
#app {
  background-image: url("./assets/background.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  position: relative;
}

.context-menu {
  position: fixed;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.8); /* 设置半透明背景 */
  backdrop-filter: blur(5px); /* 模糊背景 */
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 8px;
  border-radius: 8px; /* 添加圆角 */
}
</style>