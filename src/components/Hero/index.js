import React, { useState } from 'react';
import {
  HeroContainer,
  HeroBg,
  Img,
  Content,
  H1,
  Span,
  Type,
  Typedout,
  Carry,
  CursorSpan,
  Button,
  ArrowDown,
  ArrowDownShort,
} from './HeroElements';
import Typing from 'react-typing-animation';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <Img
          src='https://i.ibb.co/mvVHvLH/IMG-8973.jpg'
          alt='IMG-8973'
          border='0'
        />
        <Content>
          <Typing speed={40}>
            <H1>Hello World,</H1>
          </Typing>
          <Span>
            <p>My name is AbdulRehman</p>
            <p>An Engineering Graduate</p>
            <Type>
              turned <Type className='bold'>FULL STACK</Type> developer
            </Type>
            <p>located in</p>
            <p>
              <Type className='location'>Toronto, ON.</Type>
            </p>
            <Carry>
              <p>And I love to : </p>
              <Typing speed={70}>
                <Typedout>build things</Typedout>
              </Typing>
              <CursorSpan>|</CursorSpan>
            </Carry>
          </Span>
          <Button to='projects' onMouseEnter={onHover} onMouseLeave={onHover}>
            View my work {hover ? <ArrowDown /> : <ArrowDownShort />}{' '}
          </Button>
        </Content>
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
