import Image from "next/image";
import styles from './id.module.scss';
import { IData } from "../page";

const getData = async (id: string): Promise<IData> => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw Error('Something went wrong')
  }

  return res.json()
}

export const generateMetadata = async ({ params }: { params: { id: string } }) => {
  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  }
}


const BlogId = async ({ params }: { params: { id: string } }) => {
  const data = await getData(params.id)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              unoptimized
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image unoptimized src={data.img} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  )
}

export default BlogId