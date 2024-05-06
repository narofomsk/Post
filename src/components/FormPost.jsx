import React, {useState} from 'react';
import MyButton from "../UI/MyButton/MyButton.jsx";

const FormPost = ({create}) => {
    const [post, setPost] = useState({img: '', title: '', body: ''})

    const addNewPosts = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id:Date.now()
        }
        create(newPost)
    }

    return (
        <form className='flex flex-col max-w-[300px] gap-3 '>
            <input
                className='bg-[#252525] p-2 rounded-[14px]'
                type="text"
                placeholder='Введите url картинки'
                value={post.img}
                onChange={(e) => setPost({...post, img: e.target.value})}
            />
            <input
                className='bg-[#252525] p-2 rounded-[14px]'
                type="text"
                placeholder='Введите название поста'
                value={post.title}
                onChange={(e) => setPost({...post, title: e.target.value})}
            />
            <input
                className='bg-[#252525] p-2 rounded-[14px]'
                type="text"
                placeholder='Введите описание поста'
                value={post.body}
                onChange={(e) => setPost({...post, body: e.target.value})}
            />
            <MyButton onClick={addNewPosts}>Создать пост</MyButton>
        </form>
    );
};

export default FormPost;