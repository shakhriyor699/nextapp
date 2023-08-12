'use client'
import Link from 'next/link';
import styles from './register.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Register = () => {
  const [error, setError] = useState(null)
  const router = useRouter()

  const handleSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      })
      res.status === 201 && router.push('/dashboard/login?success=Account created!')
    } catch (error: any) {
      setError(error)
    }
  }




  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign up to see dashboard</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder='username' required className={styles.input} />
        <input type="email" placeholder='email' required className={styles.input} />
        <input type="password" placeholder='password' required className={styles.input} />
        <button className={styles.button}>Sign up</button>
        {error && 'Something went wrong'}
      </form>
      <span className={styles.or}>- OR  -</span>
      <Link href='/dashboard/login' className={styles.link}>LogIn with an existing account</Link>
    </div>
  )
}

export default Register