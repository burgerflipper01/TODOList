window.addEventListener('load',  () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_element = document.querySelector("#tasks");

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const task = input.value;
        
        if (!task){
            alert("Please enter a task");
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        task_content_el.innerText = task;

        task_el.appendChild(task_content_el);

        list_element.appendChild(task_el);
        

});