import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarLink,
  SideBarMenu,
} from './SideBarElements'

function SideBar({ isOpen, toggleState }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleState}>
      <Icon onClick={toggleState}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to='about' onClick={toggleState}>
            About
          </SideBarLink>
          <SideBarLink to='resume' onClick={toggleState}>
            Resume
          </SideBarLink>
          <SideBarLink to='projects' onClick={toggleState}>
            Projects
          </SideBarLink>
          <SideBarLink to='contact' onClick={toggleState}>
            Contact
          </SideBarLink>
        </SideBarMenu>
      </SideBarWrapper>
    </SidebarContainer>
  )
}

export default SideBar
