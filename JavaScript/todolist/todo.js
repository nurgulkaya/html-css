
let ulDom = document.querySelector("ul#list")
let newTask  = document.querySelector("#task")
let btn = document.querySelector("#liveToastBtn")
let itemsArray = localStorage.getItem('newTask') ? JSON.parse(localStorage.getItem('newTask')) : [];
localStorage.setItem('newTask', JSON.stringify(itemsArray));

function check(){
    this.classList.toggle("checked");
}

btn.addEventListener("click", newItem)
//add todo
function newItem(event){
    event.preventDefault()
    let liDOM = document.createElement("li")
    let controlTodo = newTask.value.trim()
    if(controlTodo.length <= 0){
        $(".error").toast('show');
    }else{

        itemsArray.push(newTask.value);
        localStorage.setItem('newTask', JSON.stringify(itemsArray));
        
        liDOM.innerHTML = newTask.value

        ulDom.appendChild(liDOM)
        newTask.value = " "
       
    }
        let removeBtn = document.createElement("span");
        removeBtn.classList.add("close")
        removeBtn.innerHTML = "x"
        removeBtn.style = "padding: 12px 15px 15px 15px"
        liDOM.appendChild(removeBtn)
        liDOM.addEventListener("click", check);

       

//delete todo
        removeBtn.addEventListener("click", deleteTodo)
        function deleteTodo(){
            this.parentNode.remove()

        }

        $(".success").toast('show'); 
    }

