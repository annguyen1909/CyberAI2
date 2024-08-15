'use client'

import Image from 'next/image';
import React, { useState } from 'react'
import Like from '@/assets/icons/like.svg';
import Comment from '@/assets/icons/comment.svg';
import Share from '@/assets/icons/share.svg';


  interface Post {
    id: number;
    author: string;
    avatar: string;
    content: string;
    timestamp: string;
    likes: number;
    comments: number;
    shares: number;
  }
  
  const initialPosts: Post[] = [
    {
      id: 1,
      author: 'An Nguyen',
      avatar: '/assets/avatar1.jpg',
      content: 'Morning!',
      timestamp: '2h ago',
      likes: 34,
      comments: 12,
      shares: 4,
    },
    {
      id: 2,
      author: 'Hu Tao',
      avatar: '/assets/avatar2.jpg',
      content: 'How are you?',
      timestamp: '5h ago',
      likes: 22,
      comments: 8,
      shares: 2,
    },
    {
      id: 3,
      author: 'Kafka',
      avatar: '/assets/avatar3.jpg',
      content: 'Nice to meet you.',
      timestamp: '1d ago',
      likes: 54,
      comments: 16,
      shares: 7,
    },
  ];
  
  const Community = () => {
    const [posts, setPosts] = useState<Post[]>(initialPosts);
  
    return (
      <div className="min-h-[88px] bg-zinc-900 text-gray-200 p-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-white">Community</h1>
          
          {posts.map(post => (
            <div key={post.id} className="bg-zinc-800 p-6 rounded-lg mb-6 shadow-md transition transform hover:scale-105 duration-300">
              <div className="flex items-center mb-4">
                <Image
                  src={post.avatar}
                  alt={`${post.author}'s avatar`}
                  width={48} 
                  height={48}                
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold">{post.author}</h2>
                  <p className="text-gray-400 text-sm">{post.timestamp}</p>
                </div>
              </div>
              <p className="mb-4 text-lg">{post.content}</p>
              <div className="flex justify-between text-gray-400 text-sm">
                <div className="flex items-center space-x-2">
                  <button className="flex items-center hover:text-red-600">
                    <Like/>
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center hover:text-zinc-500">
                    <Comment/>
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center hover:text-zinc-500">
                    <Share/>
                    <span>{post.shares}</span>
                  </button>
                </div>
                <button className="text-white hover:underline">Read more</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Community