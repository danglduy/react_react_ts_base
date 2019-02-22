import React from 'react'
import Button from '~/components/atoms/Button'
import AppBar from '~/components/organisms/AppBar'
import { Props } from '../types'

const Home: React.FC<Props> = ({ addTodoRequested, todos }: Props) => (
  <>
    <div>
      <AppBar />
      <div>
        <Button onClick={addTodoRequested}>送信</Button>
      </div>
      <ul>
        {todos &&
          todos.map(todo => {
            return <li key={todo.key}>{todo.name}</li>
          })}
      </ul>
    </div>
  </>
)

export default Home
