export class Header {
  headerScrollShow = () => {
    let lastScroll = 0;

    const header = document.querySelector(".header-bg");
    if (!header) return;

    function handleScroll() {
      const currentScroll = window.scrollY;

      // ativa modo fixed após qualquer scroll
      if (currentScroll > 0) {
        header.classList.add("fixed");

        if (currentScroll < lastScroll) {
          // subindo → aparece
          header.classList.add("show");
        } else {
          // descendo → some
          header.classList.remove("show");
        }
      } else {
        // topo da página
        header.classList.remove("fixed", "show");
      }

      lastScroll = currentScroll;
    }

    window.addEventListener("scroll", handleScroll);
  };
}
