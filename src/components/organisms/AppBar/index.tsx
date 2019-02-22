import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const AppBarInner = styled.div`
  border-bottom: 1px solid #888;
`

const AppBar = () => (
  <AppBarInner>
    Header
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  </AppBarInner>
)

export default AppBar
