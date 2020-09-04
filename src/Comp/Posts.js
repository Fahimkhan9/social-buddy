import React,{useEffect} from 'react'

function Posts() {

useEffect(() => {
const url = "https://jsonplaceholder.typicode.com/posts"
fetch(url)
.then(res => res.json())
.then(result => console.log(result.body))

},[])

    return (
        <div>
            
        </div>
    )
}

export default Posts
