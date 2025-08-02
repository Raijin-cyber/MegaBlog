import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

export default function Post() {
    const [post, setPost] = useState(null);
    const [setting, setSetting] = useState(false);
    const { slug } = useParams();
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post){
                    setPost(post);
                    setLoader(false);
                }
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/all-posts");
            }
        });
    };
    
    return !loader ? (
        <div className="py-8 px-4">
            <Container>
                <div className="flex flex-col">
                    <div className="flex items-center justify-between w-full mb-6">
                        <h1 className="text-2xl md:text-4xl font-bold w-[80vw]">{post.title}</h1>
                        {setting ? 
                            isAuthor && (
                                <div className="absolute right-2 top-30 flex flex-col gap-2 w-20 py-3 px-2 rounded-lg bg-[#191919]/90">
                                    <div onClick={() => setSetting(false)} className="flex justify-end items-center"><i className="fa-solid fa-xmark text-[#f5f5f5]"></i></div>
                                    <Link to={`/edit-post/${post.$id}`}>
                                        <Button className={"w-full bg-[#191919] p-2 rouned rounded-lg"}>
                                            Edit
                                        </Button>
                                    </Link>
                                        <Button className={"bg-[#191919] p-2 rounded-lg"} onClick={deletePost}>
                                            Delete
                                        </Button>
                                </div>
                            )
                        :

                        (isAuthor && <div className="absolute top-23 right-2 flex justify-center items-center active:bg-slate-300/20 h-9 w-9 rounded-full"
                            onClick={() => setSetting(prev => !prev)}
                        >
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                        </div>)    
                        }
                    </div>
                    <div className="">
                        <img
                            src={appwriteService.getFileView(post.featuredImage)}
                            alt={post.title}
                            className="h-[30vh] md:h-[65vh] w-full object-cover object-top mb-10"
                        />
                        
                    </div>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : <Loading />;
}
