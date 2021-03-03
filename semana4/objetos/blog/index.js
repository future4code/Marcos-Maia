/* PARA LEMBRAR DA ESTRUTURA 
<body>
    <section id="formulario">
        <label for="titulo-post">Título:</label>
        <input type="text" id="titulo-post">

        <label for="autor-post">Autor:</label>
        <input type="text" id="autor-post">

        <label for="conteudo-post">Conteúdo:</label>
        <textarea id="conteudo-post" cols="30" rows="10"></textarea>
        
        <button>Criar Post</button>
    </section>

    <section id="container-de-posts">
        
    </section>
</body>
*/

const title = document.querySelector('#titulo-post')
const author = document.querySelector('#autor-post')
const content = document.querySelector('#conteudo-post')

let post = {
    title: 'Titulo do Post',
    author: 'author',
    content: 'conteúdo'
}

let newPost ={
    ...post

}
console.log(post)

let posts = []

