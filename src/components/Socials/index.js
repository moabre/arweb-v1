import React from 'react';
import socials from './data';
import { SocialWrapper } from './SocialComponents';

const Socials = () => {
  return (
    <>
      <SocialWrapper>
        {socials.map((i) => {
          return (
            <>
              <a href={i.link} target='_blank' rel='noreferrer' id={i.id}>
                <img src={i.src} alt={i.title} />
              </a>
            </>
          );
        })}
        <span>@moabre 2021</span>
      </SocialWrapper>
    </>
  );
};

export default Socials;
