import Image from 'next/image'
import styles from './block.module.scss'
import Link from 'next/link'

export interface IData {
  userId: number
  _id: string
  title: string
  desc: string
  img: string
  content: string
  username: string
}

export const getData = async (): Promise<IData[]> => {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw Error('Something went wrong')
  }

  return res.json()
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {
        data.map((item) => (
          <Link
            key={item._id}
            href={`blog/${item._id}`}
            className={styles.container}
          >
            <div className={styles.imageContainer}>
              <Image
              unoptimized
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default Blog