const AddButton = document.querySelector('#add');
const Input = document.querySelector('#input');
const ListContainer = document.querySelector('.list-group');

AddButton.addEventListener('click', () => {
    if(Input.text==""){
        alert("Please enter your task");
    }
    else{
        const ListItem = document.createElement('li');
        ListItem.classList.add('list-group-item');
        ListItem.innerText = Input.value;
        ListContainer.appendChild(ListItem);
        const editbutton = document.createElement('span');
        editbutton.innerHTML = '<i class="fas fa-edit"></i>';
        editbutton.classList.add('edit');
        ListItem.appendChild(editbutton);
        const deletebutton = document.createElement('span');
        deletebutton.innerHTML = '<i class="fas fa-trash"></i>';
        deletebutton.classList.add('delete');
        ListItem.appendChild(deletebutton);
        Input.value = '';
    }

    // delete and edit task
    // const edittask = document.querySelector('.edit'); 
    // const deleteTask = document.querySelector('.delete');
    // const ListItem = document.querySelector('.list-group-item');

    // deleteTask.addEventListener('click', () => {
    //     ListContainer.removeChild(ListItem);
    // });

    // edittask.addEventListener('click', (e) => {
    //     const task = e.target.parentElement.parentElement;
    //     console.log(e.target.parentElement.parentElement);
    //     task.contentEditable = true;
    //     ListItem.focus();
    //     li.addEventListener('keypress', (e) => {
    //         if(e.key === 'Enter'){
    //             task.contentEditable = false;
    //         }
    //     });
    
    // });
    
});

ListContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        
        e.target.parentElement.remove();
    }
    if(e.target.classList.contains('edit')){
        const task = e.target.parentElement;
        task.contentEditable = true;
        task.focus();
        task.addEventListener('keypress', (e) => {
            if(e.key === 'Enter'){
                task.contentEditable = false;
            }
        });
    }
});







// create local storage




