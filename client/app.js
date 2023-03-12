const form = document.querySelector('#form-tarefa');
const ul = document.querySelector('#lista-tarefas');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const titulo = formData.get('titulo');
  const descricao = formData.get('descricao');
  adicionarTarefa(titulo, descricao);
});

function atualizarListaTarefas() {
  fetch('/buscar-tarefas')
    .then(response => response.json())
    .then(data => {
      ul.innerHTML = '';
      data.forEach(tarefa => {
        const li = document.createElement('li');
        li.textContent = tarefa.titulo;
        ul.appendChild(li);
      });
    });
}

function adicionarTarefa(titulo, descricao) {
  fetch('/adicionar-tarefa', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ titulo, descricao })
  })
  .then(response => response.json())
  .then(data => {
    atualizarListaTarefas();
  });
}

atualizarListaTarefas();

