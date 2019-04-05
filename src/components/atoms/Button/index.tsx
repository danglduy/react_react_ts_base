import React from 'react'
import styled from 'styled-components'

interface Props {
  readonly onClick?: (e: React.MouseEvent) => void
  readonly children: string | Node
  readonly type?: string
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

const Button = ({ onClick, children, type }: Props) => (
  <ButtonInner onClick={onClick} type={type}>
    {children}
  </ButtonInner>
)

export default Button
