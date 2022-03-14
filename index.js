const container = document.querySelector('.container');
let inputValue = document.querySelector('.input');
const add = document.querySelector('.add');

// if(window.localStorage.getItem("todos") == undefined){
//      let todos = [];
//      window.localStorage.setItem("todos", JSON.stringify(todos));
// }

let todosEX = window.localStorage.getItem("todos");
let todos = JSON.parse(todosEX);

// OOP or Object Oriented Programming
class item {
	constructor(name) {
		this.createItem(name);
	}
    createItem(name) {
    	let itemBox = document.createElement('div');
        itemBox.classList.add('item');

      // input/ adding text 
    	let input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = name;
    	input.classList.add('item_input');
      
      // edit text 
    	let edit = document.createElement('button');
    	edit.classList.add('edit');
    	edit.innerHTML = "EDIT";
    	edit.addEventListener('click', () => this.edit(input, name));

      // remove text 
    	let remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = "REMOVE";
    	remove.addEventListener('click', () => this.remove(itemBox, name));

      // obviously appending the input/add, the edit, and the remove functionality
    	container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

    }

    //JSON is JavaScript Object Notation a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).

    edit(input, name) {
        if(input.disabled === true){
           input.disabled = !input.disabled;
        } else {
            input.disabled = !input.disabled;
            let indexof = todos.indexOf(name);
            todos[indexof] = input.value;
            window.localStorage.setItem("todos", JSON.stringify(todos));
        }
    }

    remove(itemBox, name) {
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}

// I'm really confused about 'which' being deprecated and what to use in replace I searched and read a lot... this seems to make the most sense if any on the subject. https://stackoverflow.com/questions/4471582/keycode-vs-which
// basically it will still work but the developers of chrome and the other big engines are going to be factoring it out eventually... yeah but it still works for now.
add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
	}
})

function check() {
	if(inputValue.value != "") {
		new item(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
		inputValue.value = "";
	}
}


// for (var v = 0 ; v < todos.length ; v++){
//     new item(todos[v]);
// }
