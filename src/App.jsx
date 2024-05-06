import { useState } from 'react'
import './App.css'
import MyModal from './UI/MyModal/MyModal.jsx'
import FormPost from './components/FormPost.jsx'
import Header from './components/Header'
import Posts from './components/Posts'

function App() {
	const [posts, setPosts] = useState([
		{
			img: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_661633a042fe60301b31ddee_661633a442fe60301b31ded1/scale_1200',
			title:
				'Обзор Windows 11 24H2 LTSC — почти идеальная ОС для современных ПК, если бы не пара нюансов',
			body: 'Версии Windows с долгосрочной поддержкой или LTSC предназначены для предприятий, но привлекают многих опытных пользователей ПК своей стабильной работой, отсутствием лишнего софта и своей завершенностью. Ведь если вы установили Windows в редакции LTSC, то никаких сюрпризов от Microsoft в виде обновлений функций уже не получите. А обновления для Windows 10 и Windows 11, хоть и стали гораздо более качественными за последние годы, все равно периодически вызывают различные массовые проблемы.',
		},
	])
	const [modal, setModal] = useState(false)


	const create = newPost => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	const postRemoveAll = () => {
		setPosts([])
	}

	const postRemove = (post) => {
		setPosts(posts.filter(p => p.id != post.id))
	}

	return (
		<>
			<MyModal visible={modal} setVisible={setModal}>
				<FormPost create={create} />
			</MyModal>
			<Header />
			<Posts modalVisible={setModal} remove={postRemove} removeAll={postRemoveAll} posts={posts} />
		</>
	)
}

export default App
