let sub_btn = document.querySelector('.container_form');
let text_input = document.querySelector('.form_input');
let toDo_ul = document.querySelector('.list-todo-todo');
let done_ul = document.querySelector('.list_done-done');

sub_btn.addEventListener('submit', function (event) {
    event.preventDefault();
    let item = text_input.value;
    if (item.length) {
        createToDo();
    }
    text_input.value = "";
})
const removeIcn = () => {
    let removeIcn = document.createElement('i');
    removeIcn.classList = 'fas fa-trash';
    removeIcn.addEventListener('click', () => {
        removeIcn.parentNode.parentNode.remove()
    });
    return removeIcn;
}
const checkboxChange = (e) => {
    let checkbox = e.target;
    const checked = checkbox.checked;
    let addToList = checkbox.parentNode.parentNode;
    if (checked) {
        done_ul.appendChild(addToList);
    } else {
        toDo_ul.appendChild(addToList);
    }
}
function createToDo() {
    let elementList = document.createElement('li');
    elementList.textContent = text_input.value;
    let inLiWrap = document.createElement('div');
    let icn = removeIcn();
    let check = document.createElement('input');
    check.type = "checkbox";
    check.addEventListener('click', checkboxChange);
    inLiWrap.classList.add('inLi_Wrap');
    inLiWrap.appendChild(icn);
    inLiWrap.appendChild(check);
    elementList.appendChild(inLiWrap);
    toDo_ul.appendChild(elementList);
}