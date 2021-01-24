import React from 'react';
import images from '../../assets/skills/images';
import resume from '../../assets/muhammadrehmanresume.pdf';
import {
  InfoContainer,
  InfoWrapper,
  ImageWrapper,
  Title,
  TitleWrapper,
  TitleContent,
  ContentWrapper,
  Button,
} from './InfoElements';

export const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <ContentWrapper>
            <TitleWrapper className='content'>
              <Title>Experience</Title>
              <TitleContent className='content'>
                I have a keen interest in all stages of development and always
                eagar to learn more in this fast paced industry. Grab a copy of
                my resume below to see how I can contribute!
              </TitleContent>
              <a href={resume} download='Resume'>
                <Button>Grab A Copy</Button>
              </a>
            </TitleWrapper>
          </ContentWrapper>
          <ContentWrapper>
            <TitleWrapper>
              <Title>Some Technologies I've Worked With</Title>
            </TitleWrapper>
            <ImageWrapper>
              {images.map((index) => {
                return (
                  <>
                    <img src={index.src} alt='' className='images' />
                  </>
                );
              })}
            </ImageWrapper>
          </ContentWrapper>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
