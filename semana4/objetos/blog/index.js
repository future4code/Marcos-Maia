
const form = document.querySelectorAll('input')
const title = document.querySelector('#titulo-post')
const author = document.querySelector('#autor-post')
const content = document.querySelector('#conteudo-post')
const button = document.querySelector('#formulario > button')

const postsContainer = document.querySelector('#container-de-posts')

let post = {
    title: 'Titulo do Post',
    author: 'author',
    content: 'conteúdo'
}

let posts = []

button.addEventListener('click', event =>{
    let newPost ={
        ...post,
        title: title.value,
        author: author.value,
        content: content.value
    }
    
    posts.push(newPost) 
    
    postsContainer.innerHTML += 
    `<div class="postsNovos">
    <p>${title.value}</p>
    <p>${author.value}</p>
    <p>${content.value}</p>
    </div>` 

    for(item of form) {
        item.value = ''
    }
    content.value = ''
})
