export default {
    beforeMount(el) {
      el.style.cursor = 'move';
  
      const onMouseDown = (event) => {
        const shiftX = event.clientX - el.getBoundingClientRect().left;
        const shiftY = event.clientY - el.getBoundingClientRect().top;
  
        const moveAt = (pageX, pageY) => {
          el.style.left = pageX - shiftX + 'px';
          el.style.top = pageY - shiftY + 'px';
        };
  
        const onMouseMove = (event) => {
          moveAt(event.pageX, event.pageY);
        };
  
        const onMouseUp = () => {
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
        };
  
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
      };
  
      el.addEventListener('mousedown', onMouseDown);
    },
  };