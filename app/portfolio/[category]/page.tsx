import React from 'react'
import styles from './category.module.scss';
import Image from 'next/image';
import Button from '@/components/Button';
import { Category, items } from './data';
import { notFound } from 'next/navigation';

const getData = (category: Category) => {
  const data = items[category]


  if (data) {
    return data
  }
  return notFound()
}

const CategoryPage = ({ params }: { params: { category: Category } }) => {
  const data = getData(params.category)
  console.log(data);



  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {
        data.map((item) => (
          <div className={styles.item} key={item.id}>
            <div className={styles.content}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.desc}>{item.desc}</p>
              <Button text="See More" url="#" />
            </div>
            <div className={styles.imgContainer}>
              <Image
                unoptimized
                className={styles.img}
                fill={true}
                src={item.image}
                alt={item.title}
              />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default CategoryPage