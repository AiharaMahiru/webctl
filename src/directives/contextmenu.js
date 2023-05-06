// src/directives/contextmenu.js
export default {
    mounted(el, binding) {
      const handleContextMenu = (event) => {
        event.preventDefault();
        binding.value(event);
      };
      el.addEventListener("contextmenu", handleContextMenu);
      el._handleContextMenu = handleContextMenu;
    },
    unmounted(el) {
      el.removeEventListener("contextmenu", el._handleContextMenu);
    },
  };