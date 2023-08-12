import styles from './footer.module.scss'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>2023 MyApp</div>
      <div className={styles.social}>
        <Image src={'/inst.png'} width={30} height={30} alt="instagram" className={styles.icon} />
        <Image src={'/vk.png'} width={30} height={30} alt="vk" className={styles.icon} />
        <Image src={'/twitter.png'} width={30} height={30} alt="twitter" className={styles.icon} />
        <Image src={'/yt.png'} width={30} height={30} alt="youtube" className={styles.icon} />
      </div>
    </footer>
  )
}

export default Footer