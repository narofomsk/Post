import React from 'react'
import styles from './MySearch.module.css'

export default function MySearch() {
	return (
		<div className={styles.search}>
			<div className={styles.search__input}>
				<img src='icons8-search (1).svg' alt='' />
				<input
					className={styles.input__search}
					type='text'
					placeholder='Найти'
				/>
			</div>
			<div className='func'>
				<button className={styles.search__button}>Найти</button>
			</div>
		</div>
	)
}
