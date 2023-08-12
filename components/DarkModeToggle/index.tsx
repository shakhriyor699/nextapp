'use client'
import { ThemeContext } from '@/context/ThemeContext';
import styles from './DarkModeToggle.module.scss';
import { useContext } from 'react';


const DarkModeToggle = () => {
  // const mode: string = 'dark'
  const { toggle, mode } = useContext(ThemeContext)

  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div className={styles.ball} style={mode === 'light' ? { left: '2px' } : { right: '2px' }}></div>
    </div>
  )
}

export default DarkModeToggle