const $ = document.querySelector.bind(document)

// querySelectorAll retorna un array de elementos
const $$ = document.querySelectorAll.bind(document)


// Crear dinamicamente los ids para todos los elementos anchor
// Estos ids luego son usados para aplicar clases de CSS a los elementos clickeados
$$('a').forEach(el => {
  let idName = el.href.replace("javascript:router('/", '').slice(0, -2) || 'home';
  el.id = idName
})

