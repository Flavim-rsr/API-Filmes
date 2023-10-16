let buscarFilme = async () => {
    let title = document.getElementById("title").value;      //pega oque foi digitado no html para buscar na API
    let resposta = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=54ddc12`);
    let dados = await resposta.json();
    //tratamento de erro caso pesquise um filme invalido
    //para saber quando retorna falso em uma API pronta, testar na web como ela retorna uma pesquisa falsa
    //para testar na web basta copiar o link e escrever algo errado no meio, a requisição vai dar erro e retornar oque seria falso para a API
    if (dados.Response == 'False'){
        alert(`Filme não encontrado, digite outro`)
        return
    }
    document.getElementById("runTime").value = dados.Runtime;
    document.getElementById("actors").value = dados.Actors;
    document.getElementById("language").value = dados.Language; 
    document.getElementById("director").value = dados.Director; 
    document.getElementById("year").value = dados.Year; 
    document.getElementById("poster").src = dados.Poster;
}