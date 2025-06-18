import React from 'react';
import Sectionheading from './Sectionheading';
import Card from './Card';

const Blog = () => {
  const title = "Latest Blogs";
  const des = "Our Blog";

  const arr = [
    {
      img: "/image/blog_01.jpg",
      title: "Book News: Egypt Bans Ridley Scott’s ‘Exodus’ For ‘Historical",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      icon: "bi bi-calendar3",
      date: "May 22, 2023",
      comment: "Comment(05)",
    },
    {
      img: "/image/blog_02.jpg",
      title: "Book News: Egypt Bans Ridley Scott’s ‘Exodus’ For ‘Historical",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      icon: "bi bi-calendar3",
      date: "May 22, 2023",
      comment: "Comment(05)",
    },
    {
      img: "/image/blog_03.jpg",
      title: "Book News: Egypt Bans Ridley Scott’s ‘Exodus’ For ‘Historical",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      icon: "bi bi-calendar3",
      date: "May 22, 2023",
      comment: "Comment(05)",
    },
  ];

  return (
    <div className="section my-5">
      <div className="container">
        <div className="row">
          <Sectionheading title={title} des={des} />
        </div>
        <div className="row">
          {arr.map((item, ) => (
            <Card  item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
