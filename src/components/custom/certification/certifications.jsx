import React, { useState, useEffect } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import ImageData from './data';
import CertificationWrapper from './certificationWrapper';

function Certification() {
  const [people] = useState(ImageData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 7000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <CertificationWrapper>
      <section className="section">
        <div className="section-center">
          {people.map((person, personIndex) => {
            const {
              id, image, name, title, quote,
            } = person;
            let position = 'nextSlide';
            if (personIndex === index) {
              position = 'activeSlide';
            }
            if (
              personIndex === index - 1
            || (index === 0 && personIndex === people.length - 1)
            ) {
              position = 'lastSlide';
            }
            return (
              <article key={id} className={position}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
              </article>
            );
          })}

        </div>
      </section>
    </CertificationWrapper>
  );
};

export default Certification;
