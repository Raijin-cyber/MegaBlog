import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            featuredImage: post?.featuredImage || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } 
        else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
                <div className="grid grid-cols-2 gap-x-2 md:gap-x-3 w-full px-3 md:px-8">
                    <div className="h-full">
                        <Input
                            label="Title :"
                            placeholder="Title"
                            className="mb-4 w-full"
                            {...register("title", { required: true })}
                        />
                        <Input
                            label="Slug :"
                            placeholder="Slug"
                            className="mb-4"
                            {...register("slug", { required: true })}
                            onInput={(e) => {
                                setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                            }}
                        />
                    </div>
                                
                    <div className="flex flex-col justify-between h-full">
                        <Input
                            label="Featured Image :"
                            type="file"
                            className="mb-4 text-black/60"
                            accept="image/png, image/jpg, image/jpeg, image/gif"
                            {...register("image", { required: !post })}
                        />
                        {post && (
                            <div className="w-full mb-4">
                                <img
                                    src={appwriteService.getFilePreview(post.featuredImage)}
                                    alt={post.title}
                                    className="rounded-lg"
                                />
                            </div>
                        )}
                        <Select
                            options={["active", "inactive"]}
                            label="Status"
                            className="mb-4 h-10.5 text-black/60"
                            {...register("status", { required: true })}
                        />
                    </div>
                </div>
            <RTE label="" name="content" control={control} defaultValue={getValues("content")} />
            <div onClick={(e) => e.preventDefault()} className="flex justify-center md:justify-end items-center w-full px-20 py-5 scale-90 md:scale-100">
                <div className="flex items-center gap-x-2 px-4 py-2 rounded-lg text-[#f5f5f5] bg-[#191919]">
                    <button className="active:scale-90">
                        <i className="fa-regular fa-floppy-disk text-3xl text-[#f5f5f5]"></i>
                    </button>
                    |
                    <Button type="submit" className={"w-full bg-[#191919] py-2 rounded-lg active:scale-90 text-[#f5f5f5]"}>
                        {post ? "Update" : "Submit"}
                    </Button>
                </div>
            </div>
        </form>
    );
}
