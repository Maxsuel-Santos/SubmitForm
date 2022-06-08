const button = document.querySelector('button');

const addLoading = () => {
    button.innerHTML = '<img src="src/img/loading.png" alt="Carregando" class="loading">';
}

const removeLoading = () => {
    button.innerHTML = 'Enviar';
}

/*  */

const handleSubmit = (event) => {
    event.preventDefault();

    addLoading();

    const name = document.querySelector('input[name=name]').value;
    const email = document.querySelector('input[name=email]').value;
    const cpf = document.querySelector('input[name=cpf]').value;

    fetch('https://api.sheetmonkey.io/form/qhwbupjfYp1BtrFcTi9hf6', {
        method: 'post',
        headers: {
            'Acept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            cpf: cpf
        })
    }).then(() => removeLoading());
}

document.querySelector('form').addEventListener('submit', handleSubmit);
