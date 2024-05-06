import MyButton from '../UI/MyButton/MyButton'
import PostList from "./PostList.jsx";

export default function Posts({ posts, modalVisible, remove }) {
	return (
		<section className='mt-[50px] pb-[40px]'>
			<div className='max-w-[1200px] my-0 mx-auto'>
				<div className='max-w-[1150px] flex flex-col justify-center'>
					<div className='flex justify-between'>
						<div className='flex gap-3'>
							<MyButton>По названию</MyButton>
							<MyButton>По описанию</MyButton>
						</div>
						<div>
							<MyButton onClick={() => modalVisible(true)}>Создать пост</MyButton>
							<MyButton onClick={remove}>Удалить все</MyButton>
						</div>
					</div>
					<PostList posts={posts}/>
				</div>
			</div>
		</section>
	)
}
