import { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components/index.js';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading.jsx';
import Hero from '../components/Hero.jsx';


const Home = () => {

    const [posts, setPosts] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        appwriteService.getPosts()
            .then((posts) => {
                if(posts) {
                    setPosts(posts.documents);
                }
                setLoader(false);
            })
    },[]);

    const status = useSelector((state) => state.auth.status);

    if(posts.length === 0 && status) {
        return (
            <div className='py-8 w-full'>
                <Container>
                    <h2 className='text-center text-2xl tracking-tighter'>{loader ? <Loading/ > : 'No posts available :('}</h2>
                </Container>
            </div>
        );
    }
    else {
        return (
            <Container>
                <div className={`${posts.length !== 0 && status ? 'grid grid-cols-1 place-content-center md:grid-cols-3 gap-3 p-5' : 'flex justify-center items-center py-8'}`}>
                    {   
                        status &&
                        posts.map((post) => (
                            <div key={post.$id} className='w-1/4 p-2'>
                                <PostCard post={post}/>
                            </div>
                        )) ||
                        <Hero />
                    }
                </div>
            </Container>
        )
    }
}

export default Home
