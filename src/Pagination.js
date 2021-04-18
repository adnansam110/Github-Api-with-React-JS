import axios from 'axios';
import React, { useState, useEffect} from 'react'
import Post from './components/Post';
import MyPagination from './components/MyPagination';
const Pagination = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    useEffect(() => {
        const fetchPost = async () => {
            const result = await axios('https://jsonplaceholder.typicode.com/posts')
            setPosts(result.data)
            setLoading(false);
        }
        fetchPost();
    }, [])
    // console.log(posts)


    //Get Current Post
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
    
    //Change Page
    const paginate = (pageNum)=> {
        setCurrentPage(pageNum);
}   
 return (
        <div className='conatiner'>
            <h1 className='text-primary mb-3'>My blog</h1>
            <Post posts={currentPosts} loading={loading} />
            <MyPagination paginate={paginate} postsPerPage={postsPerPage} totalPosts={posts.length}/>
        </div>
    )
}

export default Pagination
