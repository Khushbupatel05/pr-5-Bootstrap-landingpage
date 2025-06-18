import React from 'react'
import Sectionheading from './Sectionheading';
import Card from './Card';

const Events = () => {
  const title = "Upcoming Events & Programs";
  const des = "Events";

  const arr = [
    {
      img: "/image/event.jpg",
      title: "Discussion On Horror Thriller",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime provident, in tempore incidunt laudantium.",
      icon: "bi bi-calendar3",
      date: "3 June, 2021",
      comment: "Comment(05)",
    },
    {
      img: "/image/event-2.jpg",
      title: "Discussion On Horror Thriller",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime provident, in tempore incidunt laudantium.",
      icon: "bi bi-calendar3",
      date: "3 June, 2021",
      comment: "Comment(05)",
    },
    {
      img: "/image/event-3.jpg",
      title: "Discussion On Horror Thriller",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime provident, in tempore incidunt laudantium.",
      icon: "bi bi-calendar3",
      date: "3 June, 2021",
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
}

export default Events