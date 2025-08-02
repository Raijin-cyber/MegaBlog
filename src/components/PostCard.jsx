import appwriteService from '../appwrite/config'
import { useState } from 'react'
import LikeBtn from './LikeBtn'
import ShareBtn from './ShareBtn'
import parse from 'html-react-parser'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PostCard = ({post}) => {
    const [likeState, setLikeState] = useState(false);
    const userData = useSelector(state => state.auth.userData);
    const postContent = parse(post.content) || '';
  return (
    <div>        
        <div className='relative w-[85vw] h-[40vh] 
                        md:h-[50vh] md:w-[30vw] 
                        text-md 
                        bg-[#f5f5f5] shadow-2xl rounded-xl'
        >
            <div className='relative opacity-95'>
                <div className='absolute flex flex-col gap-2 right-2 p-4'>
                    <LikeBtn 
                        LikeState={likeState} 
                        onClick={() => {
                            setLikeState(prev => !prev)
                        }}
                        className='active:scale-90 transition-all duration-100'
                    />
                    <ShareBtn />
                    </div>
                <img src={appwriteService.getFileView(post.featuredImage)} alt={post.title} 
                    className='h-[15vh] md:h-[25vh] w-full rounded-t-xl object-cover -z-30'
                />
            </div>
            <div className='relative flex flex-col justify-between'>
                <Link to={`/post/${post.$id}`}>
                    <div className='p-4 flex flex-col gap-2'>
                        <h2 className='truncate w-50 text-xl'>{post.title}</h2>
                        <div className='font-serif md:h-20 text-sm line-clamp-4'>{postContent} </div>
                    </div>
                </Link>
            </div>
            <Link to={`/profile/${post.userId}`} className='absolute bottom-3 right-1 z-50 text-[#708090]/80 font-light text-xs px-4'>
                {`posted by ${post.userName}`}
            </Link>
        </div>
    </div>
  )
}

export default PostCard
