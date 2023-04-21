
import {LikeButton} from "./LikeButton.jsx"
import Link from "next/link.js"

const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts') /*{ cache: 'no-store'} para que en built no haga la pagina statica*/
    .then(response => response.json())
}
export async function ListOfPosts () {
    const posts = await fetchPosts()

    return posts.slice(0, 5).map(post => (
                <article key={post.id}>
                    
                    <Link href = '/posts/[id]'/*[id] segmento dinamico*/ as = {`/posts/${post.id}`}> 
                        <h2 style={{color: 'red'}}>{post.title}</h2>
                        <p>{post.body}</p>
                        <LikeButton id = {post.id}/>
                    </Link>
                    
                </article>
            ))
}