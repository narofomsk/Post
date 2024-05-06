import MyButton from "../UI/MyButton/MyButton.jsx";
import {useState} from "react";

export default function PostItem({post, remove}) {
	return (
		<section className='rounded-[18px] max-w-[360px] bg-[#232323] cursor-pointer'>
			<div className='overflow-hidden rounded-t-[18px]'>
				<img
					className='object-cover overflow-hidden ease-in duration-300 hover:scale-[1.1] cursor-pointer'
					src={post.img}
				/>
			</div>
			<div className='p-[15px]'>
				<div className='flex flex-col gap-[5px]'>
					<div className='font-bold overflow-hidden whitespace-nowrap text-ellipsis'>
						{post.title}
					</div>
					<p className='whitespace-nowrap overflow-hidden text-ellipsis'>
						{post.body}
					</p>
				</div>
				<div className='flex gap-[10px] mt-3'>
					<MyButton >Открыть</MyButton>
					<MyButton onClick={remove} >Удалить</MyButton>
				</div>
			</div>
		</section>
	)
}
