let buscarFilme = async () => {
    let title = document.getElementById("Title").value;      //pega oque foi digitado no html para buscar na API
    let resposta = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=54ddc12`);
    let dados = await resposta.json();
    //tratamento de erro caso pesquise um filme invalido
    //para saber quando retorna falso em uma API pronta, testar na web como ela retorna uma pesquisa falsa
    //para testar na web basta copiar o link e escrever algo errado no meio, a requisição vai dar erro e retornar oque seria falso para a API
    if (dados.Response == 'False'){
        alert(`Filme não encontrado, digite outro`)
        return
    }
    document.getElementById("RunTime").value = dados.Runtime;
    document.getElementById("Actors").value = dados.Actors;
    document.getElementById("Language").value = dados.Language; 
    document.getElementById("Director").value = dados.Director; 
    document.getElementById("Year").value = dados.Year; 
    document.getElementById("Poster").src = dados.Poster;
}