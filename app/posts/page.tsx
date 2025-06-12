import Link from "next/link";
import React from 'react'
import PostCard from "../_components/PostCard";

const PostsPage = () => {
 return <main className="flex flex-col gap-2 md:py-4">
      <h2 className="mx-4 text-xl font-bold">Posts</h2>
      <div className="flex flex-col gap-4 md:gap-1">
        {[{slug:'/2dxxdsa',title:'Whispers of a Dream That Never Slept',date:new Date().toString()},
          {slug:'/ddsadsada122sa',title:'The Silence Between What We Don’t Say',date:new Date().toString()},
          {slug:'/ddasdsa2122sa',title:'Memories That Only Rain Can Understand',date:new Date().toString()},
          {slug:'/ddsadsadsa2212sa',title:"The Geometry of Emotions We Left Behind",date:new Date().toString()},
          {slug:'/ddsadas2122sa',title:'Memories That Only Rain Can Understand',date:new Date().toString()},
          {slug:'/d1dsa22sa',title:'The Silence Between What We Don’t Say',date:new Date().toString()},
          {slug:'/d2das212sa',title:"The Geometry of Emotions We Left Behind",date:new Date().toString()},
          {slug:'/d22dasx2sa',title:'A Map Drawn in the Language of Stars',date:new Date().toString()},
          {slug:'/dadsd122sa',title:'The Silence Between What We Don’t Say',date:new Date().toString()},
          {slug:'/d3xx23sa',title:'	In the Light of Forgotten Tomorrows',date:new Date().toString()}
        ].map((post) => <Link key={post.slug} href={`/posts/${post.slug}`}>
              <PostCard post={post} />
            </Link>
          )
        }
      </div>
    </main>
}

export default PostsPage