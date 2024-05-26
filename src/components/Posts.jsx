import MyButton from '../UI/MyButton/MyButton'
import PostList from './PostList.jsx'

export default function Posts({
	posts,
	modalVisible,
	remove,
	removeAll,
	filter,
	setFilter,
}) {
	return (
		<section className='mt-[50px] pb-[40px]'>
			<div className='max-w-[1200px] my-0 mx-auto'>
				<div className='max-w-[1150px] flex flex-col justify-center'>
					<div className='flex justify-between'>
						<div className='flex gap-[20px]'>
							<MyButton onClick={() => setFilter({ ...filter, sort: 'title' })}>
								По названию
							</MyButton>
							<MyButton onClick={() => setFilter({ ...filter, sort: 'body' })}>
								По описанию
							</MyButton>
						</div>
						<div className='flex gap-[20px]'>
							<MyButton onClick={() => modalVisible(true)}>
								Создать пост
							</MyButton>
							<MyButton onClick={removeAll}>Удалить все</MyButton>
						</div>
					</div>
					{posts.length !== 0 ? (
						<PostList remove={remove} posts={posts} />
					) : (
						<div className='text-bold text-center mt-[200px] text-[40px]'>
							Посты не найдены
						</div>
					)}
				</div>
			</div>
		</section>
	)
}
