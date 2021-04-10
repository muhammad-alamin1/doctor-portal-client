import './blogPost.css';
import React from 'react';

const BlogPost = (props) => {
    const { title, description, author, authorImg, date } = props.blog;
    return (
        <div id="BlogCard">
            <div className="card-container">
                <div className="card " style={{marginBottom:'100px'}}>
                    <div className="card-header d-flex  align-items-center">
                        <img className="mx-3" src={authorImg} alt="" width="60" />
                        <div>
                            <h6 className="" style={{ color: '#1CC7C1' }}>{author}</h6>
                            <p className="m-0">{date}</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <h6>{title}</h6>
                        <p className="card-text text-secondary mt-4">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;