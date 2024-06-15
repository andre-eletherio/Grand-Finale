'use client'
import { useState } from 'react'
import styles from './styles.module.css'
import axios from 'axios';

export default function Home() {
    const [form, setForm] = useState<{name: string, email: string, password: string}>({
        name: '',
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
            const response = await axios.post(`http://localhost:3001/fiap/register`, form)
            localStorage.setItem('id', response.data.id)
            localStorage.setItem('name', response.data.name)
            window.location.href = '/main'
        } catch (error) {
            setError('Usuário já cadastrado')
        }
    }

    return (
        <div className={styles.page}>
            <form className={styles.form} onSubmit={onSubmit}>
                <h1>Seja bem-vindo!</h1>
                <p>Por favor, registre-se</p>
                <input type="text" placeholder='Nome' name="name" onChange={handleChange} required />
                <input type="email" placeholder='E-mail' name="email" onChange={handleChange} required />
                <input type="password" placeholder='Senha' name="password" onChange={handleChange} required />
                {error !== '' && <p style={{color: 'red', fontSize: 14}}>{error}</p>}
                <button type='submit'>Registrar</button>
                <p className={styles.login}>ou <a href="/login">faça login</a></p>
            </form>
        </div>
    )
}