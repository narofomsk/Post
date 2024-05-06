import PostItem from "./PostItem.jsx";

export default function PostList({posts}) {
  return (
	<div className='flex gap-[35px] flex items-center flex-wrap mt-[20px]'>
		{posts.map(post => <PostItem post={post}/>)}
	</div>
  )
}
