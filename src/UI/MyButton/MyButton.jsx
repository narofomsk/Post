import styles from './MyButton.module.css'

export default function MyButton(props) {
	return <button {...props} className={styles.MyButton}>{props.children}</button>
}
