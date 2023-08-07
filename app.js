const blogForm = document.getElementById('blog-form');
const blogList = document.querySelector('.blog-list');

blogForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const authorInput = document.getElementById('author');
  const titleInput = document.getElementById('title');
  const contentInput = document.getElementById('content');
  const author = authorInput.value;
  const title = titleInput.value;
  const content = contentInput.value;
  const blogItem = document.createElement('div');

  blogItem.classList.add('blog-item');
  blogItem.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
    <p class="author-info">By ${author}</p>`;

  blogList.appendChild(blogItem);

  authorInput.value = '';
  titleInput.value = '';
  contentInput.value = '';
});
