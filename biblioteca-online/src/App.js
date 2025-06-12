import React, { useState } from "react";
import "./App.css";

function App() {
  const [pagina, setPagina] = useState("cadastro");
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [ano, setAno] = useState("");
  const [livros, setLivros] = useState([]);

  const adicionarLivro = (e) => {
    e.preventDefault();
    if (!titulo.trim() || !autor.trim() || !ano.trim()) return;
    setLivros([...livros, { titulo, autor, ano }]);
    setTitulo("");
    setAutor("");
    setAno("");
  };

  const removerLivro = (index) => {
    const novaLista = livros.filter((_, i) => i !== index);
    setLivros(novaLista);
  };

  return (
    <div className="App">
      <nav>
        <a href="#" onClick={() => setPagina("cadastro")}>Cadastro</a>
        <a href="#" onClick={() => setPagina("lista")}>Lista</a>
      </nav>

      {pagina === "cadastro" ? (
        <div>
          <h2>Cadastro de Livros</h2>
          <form onSubmit={adicionarLivro}>
            <input
              type="text"
              placeholder="Título do Livro"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
            <input
              type="text"
              placeholder="Autor"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
            />
            <input
              type="number"
              placeholder="Ano de Publicação"
              value={ano}
              onChange={(e) => setAno(e.target.value)}
            />
            <button type="submit">Adicionar Livro</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Lista de Livros</h2>
          <ul>
            {livros.map((livro, index) => (
              <li key={index}>
                <div>
                  <strong>{livro.titulo}</strong><br />
                  {livro.autor} - {livro.ano}
                </div>
                <button onClick={() => removerLivro(index)}>Remover</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
