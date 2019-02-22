import React from 'react'
import styled from 'styled-components'

interface Props {
  readonly onClick?: (e: React.MouseEvent) => void
  readonly children: string | Node
}

const ButtonInner = styled.button`
  background: #55c500;
  color: #fff;
  font-size: 16px;
  height: 60px;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`

const Button = ({ onClick, children }: Props) => (
  <ButtonInner onClick={onClick}>{children}</ButtonInner>
)

export default Button
