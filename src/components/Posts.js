import React from 'react';
import Create from './Create';
import ShowPost from './ShowPost';
import Stories from './Stories';

const Posts = () => {
    return(
        <div className="posts">
            <Stories/>
            <Create/>
            <ShowPost/>
          

        </div>
    )
}

export default Posts;