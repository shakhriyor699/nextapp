'use client'

import { useEffect, useState } from 'react'
import styles from './dashboard.module.scss'
import { IData } from '../blog/page'
import useSWR, { Fetcher } from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Dashboard = () => {
  const session = useSession()
  const router = useRouter()

  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login');
  }
  const [isloading, setIsloading] = useState(false)

  const fetcher: Fetcher<IData[], string> = (...args): Promise<IData[]> => fetch(...args).then(res => res.json())
  const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session.data?.user?.name}`, fetcher)

  const handleSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
      })
      mutate()
    } catch (error: any) {
      throw new Error("Something went wrong");
    }
  }



  if (session.status === 'authenticated') {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "Loading"
            : data?.map((post) => (
              <div className={styles.post} key={post._id}>
                <div className={styles.imgContainer}>
                  <Image
                    unoptimized
                    src={post.img}
                    alt={post.title}
                    width={200}
                    height={100}
                  />
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <span
                  className={styles.delete}
                  onClick={() => handleDelete(post._id)}
                >
                  X
                </span>
              </div>
            ))}
        </div>

        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea className={styles.textArea} />
          <button className={styles.button}> Send</button>
        </form>
      </div>
    )
  }


}

export default Dashboard