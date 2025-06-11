// Implementa las Solicitudes con Fetch
const fetchBtn = document.getElementById('fetch-btn');
const dataContainer = document.getElementById('data-container');

fetchBtn.addEventListener('click', () => {
  fetch('https://rickandmortyapi.com/api/character')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      return response.json();
    })
    .then(data => {
      // Completar: renderizar datos en el contenedor
      // Pista: Usa `data.results` para iterar sobre los personajes obtenidos.
      renderCharactersFlexible(data.results, 'name', 'image');
    })
    .catch(error => {
      console.error('Error:', error);
      dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });
});

// Implementa las Solicitudes con Axios

// 1. Instala Axios o inclúyelo mediante una CDN:
//   <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// 2. Escribe una función que utilice Axios para obtener los datos y manejarlos de manera similar a `fetch`.

const axiosBtn = document.getElementById('axios-btn');

axiosBtn.addEventListener('click', () => {
  axios.get('https://thronesapi.com/api/v2/Characters')
    .then(response => {
      const data = response.data;
      // Completar: renderizar datos en el contenedor
      // Pista: Observa que Axios ya convierte la respuesta JSON, por lo que no necesitas usar `.json()`.
      renderCharactersFlexible(data, 'fullName', 'imageUrl');
    })
    .catch(error => {
      console.error('Error:', error);
      dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });
});

// Ejemplo de función de renderizado:
// Puedes adecuar este código
function renderCharactersFlexible(characters, nameProp, imageProp) {
  dataContainer.innerHTML = '';
  characters.forEach(character => {
    const name = character[nameProp] || 'Sin nombre';
    const image = character[imageProp] || '';

    const characterElement = document.createElement('div');
    characterElement.innerHTML = `
      <h3>${name}</h3>
      ${image ? `<img src="${image}" alt="${name}">` : ''}
    `;
    dataContainer.appendChild(characterElement);
  });
}
