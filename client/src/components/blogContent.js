import React from 'react';
import './blogContent.css';

function BlogContent({ blogData }) {
  console.log('blogData', blogData);

  return (
    <div className='blogContainer'>
      <div className='blogList'>
        {blogData
          .sort((a, b) => a.order - b.order)
          .map(post => (
            <div className='post' key={post._id}>
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
