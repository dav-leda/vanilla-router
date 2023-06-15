
const routes = {
  '/': home,
  '/contact': contact,
  '/about': about
}

renderContent(window.location.pathname)

function router(pathName) {

  // Agregar la ruta al historial de navegacion del browser
  // pushState toma 3 params: un objeto con data sobre la ruta
  // un param no utilizado (empty string), y la nueva URL
  // No es necesario que sea una URL absoluta
  window.history.pushState({}, '', pathName)

  // Renderizar el contenido de la ruta
  renderContent(pathName)
}

// Renderizar la vista al usar los botones de navegacion del browser
window.onpopstate = () => renderContent(window.location.pathname) 


function renderContent(path) {
  highlightLink(path)
  $('title').innerHTML = routes[path].title;
  $('main').innerHTML = routes[path].content;
}

function highlightLink(pathName) {

  let id = pathName.replace('/', '')
  
  // Quitar la clase de CSS de todos los elementos anchor 
  $$('a').forEach(el => el.classList.remove('is-active'))
  
  // Resaltar con CSS el anchor activo
  $(`#${id ? id : 'home'}`).classList.add('is-active')
}