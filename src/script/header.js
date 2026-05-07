export default function headerScroll() {
  const header = document.querySelector("header");

  let scrollAnterior = 0;

  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const scrollParaCima = scroll < scrollAnterior;

    let novoEstado = header.dataset.scroll;

    if (scroll >= 700 && scrollParaCima) novoEstado = "ativo";
    else novoEstado = "desativado";

    if (header.dataset.scroll !== novoEstado)
      header.dataset.scroll = novoEstado;

    scrollAnterior = scroll;
  });
}
