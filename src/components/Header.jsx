import React from 'react'
import MyProfile from '../UI/MyProfile/MyProfile'
import MySearch from '../UI/MySearch/MySearch'

export default function Header() {
	return (
		<header>
			<div className='mx-w-[1300px] my-0 mx-auto'>
				<div className='w-full p-[20px] flex justify-between items-center'>
					<div className='text-[26px] font-bold'>
						<a href=''>Logo</a>
					</div>
					<MySearch />
					<MyProfile />
				</div>
			</div>
		</header>
	)
}
