'use client'
import { Item } from './components'
import styles from './styles.module.css'

export default function Main() {
    return (
        <div className={styles.page}>
            <div className={styles.back}>
                <p onClick={() => {window.location.href = '/profile'}}>Perfil</p>
            </div>
            <Item name='Matemática' />
            <Item name='Inglês' />
            <Item name='Português' />
            <Item name='Física' />
            <Item name='Química' />
            <Item name='Geografia' />
        </div>
    )
}