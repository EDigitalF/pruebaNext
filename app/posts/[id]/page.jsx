

const fetchSinglePosts = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60 /*actualizamos la pagina cada 60 segundos*/
        }
    })/*{ cache: 'no-store'} para que en built no haga la pagina statica*/
    .then(response => response.json())
}

export default async function Posts ({params}) {
    const {id} = params
    const posts = await fetchSinglePosts(id)

    return (
        <article>
            <h2>{posts.title}</h2>
            <p>{posts.body}</p>
        </article>
    )
}


/*export default function Post ({params}) {
    const {id} = params
    return <h1>Esto es el post {id}</h1>
}*/