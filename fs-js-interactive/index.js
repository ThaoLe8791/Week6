const message = document.querySelector('#message');


function addMovie(evt){
    evt.preventDefault();
    let inputField = document.querySelector('input');

    //Create a list of movies inside li tag
    const movie = document.createElement('li');

    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click',crossOffMovie);
    movie.appendChild(movieTitle);

    //After adding mivie title, create a delete button
    deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click',deleteMovie);
    movie.appendChild(deleteBtn);


    document.querySelector('ul').appendChild(movie);
    inputField.value = "";

}

document.querySelector('form').addEventListener('submit',addMovie);
function deleteMovie(ev){
    ev.target.parentNode.remove();
    const title = ev.target.parentNode.querySelector('span');
    message.textContent = `${title.textContent} deleted!`
    revealMessage();
}

function crossOffMovie(evt){
    evt.target.classList.toggle('checked');
    if (evt.target.classList.contains('checked')){
        message.textContent = `${evt.target.textContent} watched!`
    } else {
        message.textContent = `${evt.target.textContent} added back!`
    }
    revealMessage();
}

function revealMessage(){
    message.classList.remove('hide');
    setTimeout(()=>{message.className = 'hide'},1000)
}
