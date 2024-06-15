'use client'
import { useEffect, useState } from 'react'
import styles from './styles.module.css'

export function Alternative({text, correct, onClick}: {text: string, correct: boolean, onClick: any}) {
    const [clicked, setClicked] = useState(false)

    function doOnClick() {
        setClicked(true)
        onClick()
    }

    useEffect(() => {
        setClicked(false)
    }, [text])

    let style = {}

    if (clicked) {
        if (correct) {
            style = {backgroundColor: 'green', color: 'white'}
        } else {
            style = {backgroundColor: 'red', color: 'white'}
        }
    }

    return (
        <p className={styles.alternative} style={style} onClick={doOnClick}>
            {text}
        </p>
    )
}