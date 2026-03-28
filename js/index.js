document.addEventListener('DOMContentLoaded', () => {
    const profileLinks = document.querySelectorAll('.profile-link');

    profileLinks.forEach(link => {
        link.addEventListener('click', () => {
            const nome = link.dataset.nome || link.querySelector('figcaption')?.textContent.trim();
            const imagem = link.dataset.imagem || link.querySelector('img')?.src;

            if (nome) {
                localStorage.setItem('perfilAtivoNome', nome);
            }
            if (imagem) {
                localStorage.setItem('perfilAtivoImagem', imagem);
            }
        });
    });
});