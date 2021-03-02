import React from 'react';
import { FaRegThumbsUp, FaRegCommentAlt, FaShareAlt } from "react-icons/fa";


const ShowPost = () => {


    const [state, useState] = React.useState([
        {
            id: 1,
            userImg: '/images/p8.jpg',
            name: 'Linkin',
            time: '2h',
            text:
                'The founder of the Linkedin is wishing to all the businessman',
            postImg: '/images/p8.jpg'
        },

        {
            id: 2,
            userImg: '/images/p9.jpg',
            name: 'Mark',
            time: '2h',
            text:
                'The founder of FB said that every one must need to have fb account',
            postImg: '/images/p9.jpg'
        },

        {
            id: 3,
            userImg: '/images/p10.jpg',
            name: 'Jack Maa1',
            time: '2h',
            text:
                'The founder of Ali Baba, who said that people will not struggle to get product for every country that will be with chips price',
            postImg: '/images/p10.jpg'
        },

        {
            id: 4,
            userImg: '/images/p11.jpg',
            name: 'Donal Trump',
            time: '2h',
            text:
                'Donal Trumpt is the Minister of the United state who was the businessman',
            postImg: '/images/p11.jpg'
        },




    ])


    return (
        <div className="show">
            {state.map((post) => (
                <div key={post.id} className="empty">
                    <div className="show__header">
                        <div className="show__header-img">
                            <img src={post.userImg} alt="user" />
                        </div>


                        <div className="show_header-name">
                            {post.name}
                            <div className="date">{post.time}</div>
                        </div>
                    </div>


                    <div className="show__body">
                        <div className="show__body-text">
                            {post.text}
                        </div>
                        <div className="show__body-img">
                            <img src={post.postImg} alt="post" />

                        </div>
                    </div>

                    <div className="show__reactions">
                        <span className="reactions">
                            <FaRegThumbsUp /><span className="reactions-text">Like</span>
                        </span>

                        <span className="reactions">
                            <FaRegCommentAlt /><span className="reactions-text">Comments</span>
                        </span>


                        <span className="reactions">
                            <FaShareAlt /><span className="reactions-text">Share</span>
                        </span>
                    </div>
                </div>
            ))}

        </div>
    );
};


export default ShowPost;