function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Напишіть щось!");
        return;
    }

    const ul = document.getElementById('taskList');
    const li = document.createElement('li');

    li.innerHTML = `
        <span>${taskText}</span>
        <span class="delete-btn" onclick="this.parentElement.remove()">✕</span>
    `;

    // Позначити як виконане при натисканні на текст
    li.querySelector('span').onclick = function() {
        this.style.textDecoration = "line-through";
        this.style.color = "gray";
    };

    ul.appendChild(li);
    input.value = ""; // Очищуємо поле
}