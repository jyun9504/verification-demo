import React from 'react'
import ContentDrawer from '../ContentDrawer'
import NavbarContainer from '../../containers/NavbarContainer'

export default function Layout (props) {
  return (
    <React.Fragment>
      <NavbarContainer />
      <ContentDrawer>
        {props.children}
      </ContentDrawer>
    </React.Fragment>
  )
}