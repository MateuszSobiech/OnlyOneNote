const area = document.querySelector('#note');

area.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    if (area.value.trim() === 'contact') {
      alert('Contact me at lordpython8@gmail.com');
    }
  }
});

area.addEventListener('input', () => {
  localStorage.setItem('note', area.value.trim());
});

const load = () => {
  const note = localStorage.getItem('note');
  area.value = note;
};

load();
