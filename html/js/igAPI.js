const accessToken = 'IGQWRNckVLVVZARaU92ZA3FfNk12bDZAZAUWZAHbkx4OThId0ZAOdXRTYmhBVVlJWk43alNIblZAXdGFQYl9vcV81R2ZApV2lQeUQ5LW5GN05wX2ZADUjZApYlNNUDIzR3lNajJ1UEc0QkZAaYnA3aldOSGtfa0hmLVBDWmNwbzAZD';

const userId = '895247538955929';

// URL de la API de Instagram para obtener las últimas fotos
const apiUrl = `https://graph.instagram.com/${userId}/media?fields=id,caption,media_url,permalink&access_token=${accessToken}`;
const x = `https://api.instagram.com/v1/users/${userId}?client_id=${accessToken}`

async function fetchData() {
  try {
    const response = await fetch(x)
    const data = await response.json();
    //displayPosts(data.data);
    console.log(data)
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
  }
}

fetchData()

function op2(){
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const photos = data.data.slice(0, 6); // Obtener las últimas 6 fotos

    const photoContainer = document.querySelector('.instagram-follow-api');

    photos.forEach(photo => {
      const imgElement = document.createElement('img');
      imgElement.src = photo.media_url;
      imgElement.alt = photo.caption || '';
      const figureElement = document.createElement('figure');
      figureElement.classList.add('border-radius-0px');
      figureElement.appendChild(imgElement);
      const aElement = document.createElement('a');
      aElement.href = photo.permalink;
      aElement.target = '_blank';
      aElement.appendChild(figureElement);
      const colElement = document.createElement('div');
      colElement.classList.add('col', 'instafeed-grid', 'md-mb-30px');
      colElement.appendChild(aElement);
      photoContainer.appendChild(colElement);
    });
  })
  .catch(error => {
    console.error('Error al obtener las fotos de Instagram:', error);
  });
}
