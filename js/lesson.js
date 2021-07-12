function keyboardManipulation({ key }) {
  switch (key) {
    case gallery.length - 1 > activeIndex && 'ArrowRight':
      activeIndex += 1;
      refs.modalImg.src = gallery[activeIndex].original;
      break;
    case activeIndex > 0 && 'ArrowLeft':
      activeIndex -= 1;
      refs.modalImg.src = gallery[activeIndex].original;
      break;
    case activeIndex === gallery.length - 1 && 'ArrowRight':
      activeIndex = 0;
      refs.modalImg.src = gallery[activeIndex].original;
      break;
    case activeIndex === 0 && 'ArrowLeft':
      activeIndex = gallery.length - 1;
      refs.modalImg.src = gallery[activeIndex].original;
      break;
    case 'Escape':
      closeModal();
      break;
    default:
      alert('something goes wrong');
  }
}
