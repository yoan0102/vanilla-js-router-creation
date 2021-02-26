
const rootDiv = document.getElementById('root');

//Paginas html;
let home = '';
let about = '';
let contact = '';
let p404 = '';

const cargarPagina = async (page) => {
  const response = await fetch(page);
  const resHtml = await response.text();
  return resHtml;
}

const cargarTodasPagina = async () => {
  home = await cargarPagina('home.html');
  about = await cargarPagina('about.html');
  contact = await cargarPagina('contact.html');
  p404 = await cargarPagina('404.html')
}


const main = async () => {
  await cargarTodasPagina();
  rootDiv.innerHTML = home;
  routes = {
    '/': home,
    '/contact': contact,
    '/about': about,

  };
}

main();

const onNavClick = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
}

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname]
}

