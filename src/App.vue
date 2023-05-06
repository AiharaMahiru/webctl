<template>
  <div>
    <div class="draggable" v-draggable>拖动我
  </div>
  </div>
</template>

<script>
import draggable from './directives/draggable';

export default {
  directives: {
    draggable,
  },
};
</script>

<style>
body {
  /* 设置背景图片 URL */
  background-image: url('https://pan.hiiro.fun/d/UPAI/link/background.jpg?sign=fRbfjoUi76S9qyWYMO0WUk3OSsdZhSM4sfspyKUP-f8=:0');
  /* 填充整个屏幕 */
  background-size: cover;
  /* 不重复 */
  background-repeat: no-repeat;
}

.draggable {
  background-color: rgba(173, 255, 157, 0.8);
  border-radius: 5px;
  padding: 20px;
  position: absolute;
  left: 50px;
  top: 50px;
} 
</style>