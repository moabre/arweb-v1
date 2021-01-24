import React from 'react';
import projects from './data';
import {
  ProjectContainer,
  ProjectWrapper,
  Projects,
  Title,
} from './ProjectComponents';

const ProjectSection = () => {
  const redirect = (url) => {
    const win = window.open(url, '_blank');
    win.focus();
  };
  return (
    <div id='projects'>
      <Title>Some Projects I Have Worked On</Title>
      <ProjectContainer>
        <ProjectWrapper>
          {projects.map((i) => {
            return (
              <>
                {i.demo ? (
                  <Projects key={i}>
                    <img
                      src={i.img}
                      alt={i.title}
                      onClick={() => redirect(i.demo)}
                    />
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
                ) : (
                  <Projects key={i}>
                    <img
                      src={i.img}
                      alt={i.title}
                      onClick={() => redirect(i.git)}
                    />
                    <h1>{i.title}</h1>
                    <span>{i.description}</span>
                    <div>
                      <a href={i.git} target='_blank' rel='noreferrer'>
                        Code
                      </a>
                    </div>
                  </Projects>
                )}
              </>
            );
          })}
        </ProjectWrapper>
      </ProjectContainer>
    </div>
  );
};

export default ProjectSection;
