import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

export default function Portfolio() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Online store training project',
      github: 'https://github.com/savchinvlad/kld',
      demo: 'https://kld-shop.herokuapp.com/',
    },
    {
      id: 2,
      image: IMG2,
      title: 'Online store training project',
      github: 'https://github.com/savchinvlad/kld',
      demo: 'https://kld-shop.herokuapp.com/',
    },
    {
      id: 3,
      image: IMG3,
      title: 'Online store training project',
      github: 'https://github.com/savchinvlad/kld',
      demo: 'https://kld-shop.herokuapp.com/',
    },
    {
      id: 4,
      image: IMG4,
      title: 'Online store training project',
      github: 'https://github.com/savchinvlad/kld',
      demo: 'https://kld-shop.herokuapp.com/',
    },
    {
      id: 5,
      image: IMG5,
      title: 'Online store training project',
      github: 'https://github.com/savchinvlad/kld',
      demo: 'https://kld-shop.herokuapp.com/',
    },
    {
      id: 6,
      image: IMG6,
      title: 'Online store training project',
      github: 'https://github.com/savchinvlad/kld',
      demo: 'https://kld-shop.herokuapp.com/',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <a href="https://github.com/savchinvlad/kld" className="btn" target="_blank">
                GitHub
              </a>
              <a href="https://kld-shop.herokuapp.com/" className="btn btn-primary" target="_blank">
                LiveDemo
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
