import PostItem from "./PostItem.jsx";

export default function PostList({posts, remove}) {
  return (
	<div className='flex gap-[35px] items-center flex-wrap mt-[20px]'>
		{posts.map(post => <PostItem key={post.id} remove={() => remove(post)} post={post}/>)}
	</div>
  )
}
