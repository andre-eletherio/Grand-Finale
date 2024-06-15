'use client'
import axios from 'axios'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import { Alternative } from './components'

export default function Subject({searchParams}: {searchParams: {name: string}}) {

    const [question, setQuestion] = useState<{
        id: number,
        name: string,
        title: string,
        answer1: string,
        answer2: string,
        answer3: string,
        correct: number
    }>()

    function isCorrect(n: number): boolean {
        return question && question.correct === n || false
    }

    function correct(n: number) {
        if (isCorrect(n)) {
            getQuestion()
        }
    }

    async function getQuestion() {
        const question = await axios.get(`http://localhost:3001/fiap/question/${searchParams.name}`)
        setQuestion(question.data)
    }

    useEffect(() => {
        getQuestion()
    }, [])

    return (
        <div className={styles.page}>
            {
                question &&
                <>
                    <h1>{question.title}</h1>
                    <Alternative text={question.answer1} correct={isCorrect(1)} onClick={() => correct(1)} />
                    <Alternative text={question.answer2} correct={isCorrect(2)} onClick={() => correct(2)} />
                    <Alternative text={question.answer3} correct={isCorrect(3)} onClick={() => correct(3)} />
                    <div>
                        <p onClick={() => {window.location.href = '/main'}}>Voltar</p>
                    </div>
                </>
            }
        </div>
    )
}
