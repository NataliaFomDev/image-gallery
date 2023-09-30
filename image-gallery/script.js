const apiKey = 'wFJ22YXyDYeDWsRVGjC-DEL0GODMh9oaYCAkRLfcZGw';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=30`;
const input = document.querySelector('.input');
const searchIcon = document.querySelector('.fa-magnifying-glass');
const gallery = document.querySelector('.grid');
const clearButton = document.querySelector('.clear-button');

// Фокус на поле инпут
window.addEventListener('load', () => {
    const input = document.querySelector('.input');
    input.focus();
  });  
  
// Получение и отображение изображений
function fetchAndDisplayImages(apiUrl) {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      gallery.innerHTML = '';

      data.forEach((photo) => {
        const img = document.createElement('img');
        img.src = photo.urls.small;
        img.alt = photo.description || 'Image';
        gallery.appendChild(img);
      });
    })
    .catch((error) => {
      console.error('Ошибка при запросе к API:', error);
    });
}

// Выполнение поиска
function searchImages(query) {
  const searchApiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=30&query=${query}`;
  fetchAndDisplayImages(searchApiUrl);
}

// Нажатие Enter в инпуте
input.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const query = input.value.trim();
    if (query !== '') {
      searchImages(query);
    }
  }
});

// Нажатие лупы
searchIcon.addEventListener('click', () => {
    const query = input.value.trim();
    if (query !== '') {
        searchIcon.classList.add('clicked');
        searchImages(query);
    }
});

// Очистка поля ввода
function clearInput() {
    input.value = '';
    clearButton.style.display = 'none';
    input.setAttribute('placeholder', 'Search...');
    input.focus();
    searchIcon.classList.remove('clicked');
}
 
input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
        clearButton.style.display = 'block';
        input.setAttribute('placeholder', '');
    } else {
        clearButton.style.display = 'none';
        input.setAttribute('placeholder', 'Search...');
    }
});

fetchAndDisplayImages(apiUrl);
clearButton.addEventListener('click', clearInput);
