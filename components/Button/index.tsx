import { FC } from 'react';
import styles from './button.module.scss';
import Link from 'next/link';


interface IButton {
  text: string
  url: string
}

const Button: FC<IButton> = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className={styles.button}>{text}</button>
    </Link>
  )
}

export default Button