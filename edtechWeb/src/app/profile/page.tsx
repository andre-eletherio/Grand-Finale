'use client'
import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import axios from 'axios'

export default function Profile() {
    const [form, setForm] = useState<{id: number, name: string}>({
        id: 0,
        name: ''
    })
    const [showName, setShowName] = useState('')

    async function alterName() {
        if (form?.name !== '') {
            const response = await axios.patch(`http://localhost:3001/fiap/name`, form)
            localStorage.setItem('name', response.data.name)
            setShowName(response.data.name)
        }
    }

    function logout() {
        localStorage.removeItem('id');
        localStorage.removeItem('name');
        window.location.href = '/'
    }

    async function deleteAccount() {
        await axios.delete(`http://localhost:3001/fiap?id=${form.id}`)
        localStorage.removeItem('id');
        localStorage.removeItem('name');
        window.location.href = '/'
    }

    useEffect(() => {
        const id = localStorage.getItem('id')
        const name = localStorage.getItem('name')
        if (id && name) {
            setForm({...form, id: +id, name})
            setShowName(name)
        }
    }, [])
    
    return (
        <div className={styles.page}>
            {
                showName !== '' &&
                <>
                    <h1>Olá, {showName}</h1>
                    <div className={styles.buttons}>
                        <div className={styles.alter}>
                            <input type="text" name="" id="" onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder='Novo nome' />
                        <div className={styles.button} onClick={alterName}><p style={{width: 'fit-content'}}>Alterar</p></div>
                        </div>
                            <div className={styles.button} onClick={() => window.location.href = '/main'}><p>Voltar</p></div>
                        <div className={styles.button} onClick={logout}><p>Sair</p></div>
                        <div className={styles.button} onClick={deleteAccount}><p style={{backgroundColor: 'red'}}>Deletar conta</p></div>
                    </div>
                </>   
            }
        </div>
    )
}