import React from "react";
import images from "../../assets/skills/images";
import resume from "../../assets/Muhammad-Rehman-Resume-fe";
import {
  InfoContainer,
  InfoWrapper,
  ImageWrapper,
  Title,
  TitleWrapper,
  TitleContent,
  ContentWrapper,
  Button,
} from "./InfoElements";

export const InfoSection = () => {
  return (
    <>
      <InfoContainer id="resume">
        <InfoWrapper>
          <ContentWrapper>
            <TitleWrapper className="content">
              <Title className="content">Resume</Title>
              <TitleContent className="content">
                Pursuing a career in web development because I love problem
                solving and creating impactful web services. My interests lie in
                both the front-end and back-end of development. Eager to learn
                more in this fast paced industry. Grab a copy of my resume below
                to see how I can contribute!
              </TitleContent>
              <a href={resume} target="_blank" rel="noreferrer">
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
                    <a href={index.link} target="_blank" rel="noreferrer">
                      <img src={index.src} alt={index.title} id={index} />
                    </a>
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
