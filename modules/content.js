const listLink = document.querySelector('.listLink');
const addLink = document.querySelector('.addLink');
const contctLink = document.querySelector('.contctLink');

const booklistsection = document.querySelector('.list-container');
const addnewBooksection = document.querySelector('.new-book-container');
const contactsection = document.querySelector('.contact-container');

listLink.addEventListener('click', () => {
  booklistsection.style.display = 'block';
  listLink.style.color = 'blue';
  contctLink.style.color = 'black';
  addLink.style.color = 'black';
  addnewBooksection.style.display = 'none';
  contactsection.style.display = 'none';
});

addLink.addEventListener('click', () => {
  booklistsection.style.display = 'none';
  listLink.style.color = 'black';
  contactsection.style.display = 'none';
  contctLink.style.color = 'black';
  addLink.style.color = 'blue';
  addnewBooksection.style.display = 'block';
});

contctLink.addEventListener('click', () => {
  booklistsection.style.display = 'none';
  listLink.style.color = 'black';
  contactsection.style.display = 'block';
  contctLink.style.color = 'blue';
  addLink.style.color = 'black';
  addnewBooksection.style.display = 'none';
});