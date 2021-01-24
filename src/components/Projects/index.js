import React from 'react';
import projects from './data';
import {
  ProjectContainer,
  ProjectWrapper,
  Projects,
  Title,
} from './ProjectComponents';

const ProjectSection = () => {
  return (
    <>
      <Title>Projects Recently Worked On</Title>
      <ProjectContainer>
        <ProjectWrapper>
          {projects.map((i) => {
            return (
              <Projects>
                <img src={i.img} alt={i.title} />
                <h1>{i.title}</h1>
                <span>{i.description}</span>
                <div>
                  <a href={i.git} target='_blank' rel='noreferrer'>
                    Code
                  </a>
                  {i.demo ? (
                    <a href={i.demo} target='_blank' rel='noreferrer'>
                      Demo
                    </a>
                  ) : null}
                </div>
              </Projects>
            );
          })}
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};

export default ProjectSection;
