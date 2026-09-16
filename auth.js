// ========================================
// CONTROLE DE ACESSO (login obrigatório)
// ========================================
// Este script roda ANTES da página ser exibida.
// Se o usuário não estiver logado, ele é redirecionado
// para login.html.

(function () {

    const logado = sessionStorage.getItem('logado') === 'sim';

    if (!logado) {
        window.location.replace('login.html');
    }

})();


// ========================================
// SAIR (logout)
// ========================================

function sair() {
    sessionStorage.removeItem('logado');
    window.location.href = 'login.html';
}
