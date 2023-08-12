'use client'
import { signIn, useSession } from 'next-auth/react';
import styles from './login.module.scss';
import { useRouter } from 'next/navigation';

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === 'authenticated') {
    router?.push('/dashboard');
  }


  const handleSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    const email = e.target[0].value
    const password = e.target[1].value
    signIn('credentials', { email, password })
  }


  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
      </form>

      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  )
}

export default Login