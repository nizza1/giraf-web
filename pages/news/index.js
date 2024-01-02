
import React from 'react'
import Link from 'next/link'

import PageTitle from '@/app/components/pagescomponents/pageTitle/pageTitle'

import pageStyles from '../pages.module.css'
import styles from './styles.module.css'




import { client } from '@/sanity/lib/client'


async function getData() {
  const query = `*[_type == "post"] | order(_createdAt desc)`;

  const data = await client.fetch(query);
/*   const data = await res.json(); */

  return data;
}

const posts = await getData();
/* const bodyText =  data.result[0].body[0].children[0].text; */

console.log(posts);



const News = () => {

  return (
    <div className={pageStyles.outContainer}>
    <div className={pageStyles.innerContainer}>
        <PageTitle text='News'/>

        <div className={styles.contents}>
         {posts.map((post)=> (
          <div key={post._id} className={styles.postContainer}>
            <p className={styles.postDate}>
              {new Date(post._createdAt).toISOString().split("T")[0]}
            </p>
            <div className={styles.titleContainer}>
                  <h3 >
                    {post.title}
                  </h3>
             </div>

            <Link
                className={styles.blogLink}
                href={`/post/${post?.slug?.current}`}
                prefetch
              >
               <p>READ MORE</p>
              </Link>

              
          </div>
         ))}
        </div>
    </div>
  </div>
  )
}

export default News