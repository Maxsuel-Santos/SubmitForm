const button = document.querySelector('button');

const addLoading = () => {
    button.innerHTML = '<img src="src/img/loading.png" alt="Carregando" class="loading">';
}

const removeLoading = () => {
    button.innerHTML = 'Enviar';
}
