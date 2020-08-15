import React, { useState, useEffect } from 'react';
import BlogData from '../data/blogData';
import './blogContent.css';

function BlogContent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (BlogData) {
      setData(BlogData);
    }
  }, []);
  return (
    <div className='blogContainer'>
      <div className='blogList'>
        {data
          .sort((a, b) => a.order - b.order)
          .map((post) => (
            <div className='post' key={post.id}>
              <img className='postImg' src={post.imageSrc} alt={post.alt} />
              <h3 className='postTitle'>{post.featureTitle}</h3>
              <p className='postDescription'>{post.featureDescription}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default BlogContent;
