import React from 'react'
import Image from "next/image";
import { client } from '@/sanity/lib/client';

import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from "@portabletext/react";

import { useRouter } from 'next/router';


//styles
import pageStyles from '@/pages/pages.module.css'
import styles from './styles.module.css'
import portableStyle from './portableStyle.module.css'

async function getData(slug) {
  
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const data = await getData(slug);
  return {
    props: {
      data,
    },
  };
}

/* const PortableTextComponent = ({ children }) => {
  return <div className={portableStyle.outContainer}>{children}</div>; // Modify this based on your requirements
}; */

const PortableTextComponent = {
  types: {
    image: ({ value }) => (
      <Image
        src={urlForImage(value).url()}
        alt="Image"
        className={styles.bodyImg}
        width={400}
        height={400}
      />
    ),
  },
};



function SlugPage({ data }) {
  const router = useRouter();
  const { slug } = router.query;
  console.log(data);

  return (
    <div >
      <div className={styles.postDateContainer}>
             <div >
                <h1 >
                        {data.title}
                 </h1>
             </div>

             <div>
                 <p >
                           {new Date(data._createdAt).toISOString().split("T")[0]}
                 </p>
             </div>
      </div>
     
      

      <div className={portableStyle.outContainer}>
           
            <PortableText
              
             value={data.body}
             components={PortableTextComponent}
            />
            
       </div>
     
    </div>
  );
}



export default SlugPage;






