const apiKey = 'wFJ22YXyDYeDWsRVGjC-DEL0GODMh9oaYCAkRLfcZGw';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=10`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    // Обработка полученных данных (изображений)
    const gallery = document.querySelector('.grid');

    data.forEach((photo) => {
      const img = document.createElement('img');
      img.src = photo.urls.small; // Здесь выбираете размер изображения
      img.alt = photo.description || 'Image';
      gallery.appendChild(img);
    });
  })
  .catch((error) => {
    console.error('Ошибка при запросе к API:', error);
  });