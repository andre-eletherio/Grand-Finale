'use client'
import styles from './styles.module.css'

export function Item({name}: {name: string}) {

    function goToSubject() {
        window.location.href = `/subject?name=${name}`
    }

    return (
        <div className={styles.container} onClick={goToSubject}>
            <p>{name}</p>
        </div>
    )
}