window.sr = ScrollReveal();
ScrollReveal({ distance: '30px' });
sr.reveal('.vem-esquerda', { duration: 1700, origin: 'left', reset: false })
sr.reveal('.vem-direita', { duration: 1700, origin: 'right', reset: false })
sr.reveal('.vem-cima', { duration: 1700, origin: 'top', reset: false })
sr.reveal('.vem-baixo', { duration: 1700, origin: 'bottom', reset: false })

sr.reveal('.vem-esquerda-noreset', { duration: 1700, origin: 'left', reset: false })
sr.reveal('.vem-direita-noreset', { duration: 1700, origin: 'right', reset: false })
sr.reveal('.vem-cima-noreset', { duration: 1700, origin: 'top', reset: false })
sr.reveal('.vem-baixo-noreset', { duration: 1700, origin: 'bottom', reset: false })

window.Swal.wait = function (params = null) {
    // Configuração padrão
    const defaultParams = {
        title: "Aguarde...",
    };

    // Usa os parâmetros passados ou os padrões
    const obj = params || defaultParams;

    // Chamando o Swal.fire com os parâmetros configurados
    Swal.fire({
        ...obj,
        didOpen: () => {
            Swal.showLoading();
        }
    });
};
window.Swal.error = function (params = null) {
    // Configuração padrão
    const defaultParams = {
        title: "Oops!",
    };

    // Usa os parâmetros passados ou os padrões
    const obj = params || defaultParams;

    // Chamando o Swal.fire com os parâmetros configurados
    Swal.fire({
        ...obj,
        icon: "error"
    });
};


