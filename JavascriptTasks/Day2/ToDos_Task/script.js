        const loadBtn = document.getElementById('load-btn');
        const todoList = document.getElementById('todo-list');

        loadBtn.addEventListener('click', () => {

            loadBtn.textContent = 'Loading...';

            fetch('https://jsonplaceholder.typicode.com/todos?_limit=200')
                .then(response => response.json())
                .then(todos => {
                    loadBtn.textContent = 'Load Todos';

                    todos.forEach(todo => {
                        
                        const li = document.createElement('li');
                        
                        // Add default Bootstrap classes for flexbox and spacing
                        li.className = 'list-group-item d-flex justify-content-between align-items-center';

                        if (todo.completed) {
                            li.classList.add('todo-done');
                            li.innerHTML = `
                                ${todo.title}
                                <span class="badge bg-success rounded-pill">Done</span>
                            `;
                        } else {
                            li.innerHTML = `
                                ${todo.title}
                                <span class="badge bg-secondary rounded-pill">Pending</span>
                            `;
                        }
                        todoList.appendChild(li);
                    });
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    loadBtn.textContent = 'Error! Try again.';
                });
        });