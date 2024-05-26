import { useMemo, useState } from 'react'
import './App.css'
import MyModal from './UI/MyModal/MyModal.jsx'
import FormPost from './components/FormPost.jsx'
import Header from './components/Header'
import Posts from './components/Posts'

function App() {
	const [posts, setPosts] = useState([])
	const [modal, setModal] = useState(false)
	const [filter, setFilter] = useState({ sort: '', query: '' })

	const sortedPosts = useMemo(() => {
		if (filter.sort) {
			return [...posts].sort((a, b) =>
				a[filter.sort].localeCompare(b[filter.sort])
			)
		}
		return posts
	}, [posts, filter.sort])

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post =>
			post.title.toLowerCase().includes(filter.query.toLowerCase())
		)
	}, [filter.query, sortedPosts])

	const create = newPost => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	const postRemoveAll = () => {
		setPosts([])
	}

	const postRemove = post => {
		setPosts(posts.filter(p => p.id != post.id))
	}

	return (
		<>
			<MyModal visible={modal} setVisible={setModal}>
				<FormPost create={create} />
			</MyModal>
			<Header filter={filter} setFilter={setFilter} />
			<Posts
				filter={filter}
				setFilter={setFilter}
				modalVisible={setModal}
				remove={postRemove}
				removeAll={postRemoveAll}
				posts={sortedAndSearchedPosts}
			/>
		</>
	)
}

export default App
