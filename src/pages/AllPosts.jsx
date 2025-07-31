import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import Loading from '../components/Loading';
import useUserData from '../components/custom-hooks/UserData';

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loader, setLoader] = useState(true)
    const [userPosts, setUserPosts] = useState([])
    const userData = useUserData()
    
    useEffect(() => {
      appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents);
            setLoader(false);
        }
    })
    }, [setPosts])

    useEffect(() => {
      if(userData?.$id && posts.length > 0) {
        const temp = posts.filter(post => post.userId === userData.$id)
        setUserPosts(temp)
      }
    }, [userData, posts])

  return !loader ? (
    <div className=''>
        <Container>
            <div className='grid grid-cols-1 place-content-center md:grid-cols-3 gap-3 p-5'>
                {userPosts.length !== 0 ? userPosts.map((post, index) => (
                    <div key={index} className='p-2'>
                        <PostCard post={post} />  
                    </div>
                )) : <h1 className='tracking-tighter text-4xl max-sm:text-2xl'>No post available, add your post to see it here.</h1>}
            </div>
            </Container>
    </div>
  ) : <Loading />
}

export default AllPosts