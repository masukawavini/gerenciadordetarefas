const form = document.querySelector('form');
const ul = document.querySelector('ul');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const titulo = formData.get('titulo');
  const descricao = formData.get('descricao');

  fetch('/adicionar-tarefa', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ titulo, descricao })
  })
  .then(response => response.json())
  .then(data => {
    const li = document.createElement('li');
    li.textContent = data.titulo;
    ul.appendChild(li);
  });
});

