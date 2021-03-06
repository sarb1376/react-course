/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PostItem from './PostItem';

const PostList = (props) => {
  const { posts } = props;
  return (
    <div>
      <h2>This is Post List</h2>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Id</th>
              <th>title</th>
              <th aria-label="options" />
            </tr>
          </thead>
          <tbody>
            {posts && posts.map((post, index) => (
              <PostItem
                key={post.id}
                post={post}
                index={index}
                {...props}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostList;
