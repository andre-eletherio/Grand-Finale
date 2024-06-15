'use client'
import { useState } from 'react'
import styles from './styles.module.css'
import axios from 'axios'

export default function Login() {

    const [form, setForm] = useState<{email: string, password: string}>({
        email: '',
        password: ''
    })
    const [error, setError] = useState('')

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            const response = await axios.post(`http://localhost:3001/fiap/login`, form)
            localStorage.setItem('id', response.data.id)
            localStorage.setItem('name', response.data.name)
            window.location.href = '/main'
        } catch (error) {
            setError('Tente novamente')
        }
    }

    return (
        <div className={styles.page}>
            <form className={styles.form} onSubmit={onSubmit}>
                <h1>Seja bem-vindo!</h1>
                <input type="email" placeholder='E-mail' name='email' onChange={handleChange} required />
                <input type="password" placeholder='Senha' name='password' onChange={handleChange} required />
                {error !== '' && <p style={{color: 'red', fontSize: 14}}>{error}</p>}
                <button type='submit'>Entrar</button>
                <p className={styles.login}>ou <a href="/">registre-se</a></p>
            </form>
        </div>
    )
}
