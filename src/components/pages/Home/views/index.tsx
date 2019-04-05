import { Field } from 'formik'
import React from 'react'
import Button from '~/components/atoms/Button'
import AppBar from '~/components/organisms/AppBar'
import { Props } from '../types'

const Home: React.FC<Props> = ({ handleSubmit, todos }: Props) => (
  <>
    <div>
      <AppBar />
      <div>
        <Field type="text" name="name" />
        <Button onClick={handleSubmit}>送信</Button>
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
