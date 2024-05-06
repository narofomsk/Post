import React, {useState} from 'react'
import styles from './MyButton.module.css'

export default function MyButton(props) {
	const myButton = [styles.MyButton]
	props.postBtn && myButton.push(styles.post)
	return <button {...props} className={myButton.join(' ')}>{props.children}</button>
}
