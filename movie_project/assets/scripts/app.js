// select add-model dev and use the model visble in order to show it

const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];

const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');
// const backdrop = document.body.firstElementChild;
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
// const userInputs = addMovieModal.getElementsByTagName('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');
const cancelDeleteButton = deleteMovieModal.querySelector('.btn--passive');
let confirmDeleteButton = deleteMovieModal.querySelector('.btn--danger');
const movies = [];

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

const deleteMovieHandler = (movieId) => {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1); // remove the element at the index
    const listRoot = document.getElementById('movie-list');
    // listRoot.children[movieIndex].remove();
    listRoot.removeChild(listRoot.children[movieIndex]);
    // updateUI();
    closeMovieDeletionModal();
}

const closeMovieDeletionModal = () => {
    deleteMovieModal.classList.remove('visible');
    toggleBackdrop();
}

const startDeleteMovieHandler = (movieId) => {
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();

    confirmDeleteButton.replaceWith(confirmDeleteButton.cloneNode(true));
    confirmDeleteButton = deleteMovieModal.querySelector('.btn--danger');
    // confirmDeleteButton.removeEventListener('click', deleteMovieHandler.bind(null, movieId)); // does not work
    cancelDeleteButton.removeEventListener('click', closeMovieDeletionModal);
    cancelDeleteButton.addEventListener('click', closeMovieDeletionModal);
    confirmDeleteButton.addEventListener('click', deleteMovieHandler.bind(null, movieId));
// deleteMovie(movieId);
}
const renderNewMovieElement = (movieId, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.insertAdjacentHTML('afterbegin', `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `);
    newMovieElement.addEventListener('click', startDeleteMovieHandler.bind(null, movieId));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
}

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
};

const showMovieModal = () => {
    // addMovieModal.className = 'modal';
    // or better use the classList
    addMovieModal.classList.add('visible');
    toggleBackdrop();
};

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const clearMovieInput = () => {
    for (const usrInput of userInputs) {
        usrInput.value = '';
    }
};

const cancelAddMovieHandler = () => {
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
};

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (
        titleValue.trim() === '' ||
        imageUrlValue.trim() === '' ||
        ratingValue.trim() === '' ||
        +ratingValue < 1 ||
        +ratingValue > 5
    ) {
        alert('Please enter valid values (rating between 1 and 5).');
        return;
    }

    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };

    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
};

const backdropClickHandler = () => {
    closeMovieModal();
    closeMovieDeletionModal();
    clearMovieInput();
}

startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
