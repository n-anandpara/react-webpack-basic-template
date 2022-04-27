import './styles.css'
import IMAGE from './peacock-feathure.jpg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  return (
    <>
      <h1>
        Hello Edited React Typescript Webpack Starter Template -{' '}
        {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={IMAGE} alt="peacock" width="auto" height="400" />
      <ClickCounter />
    </>
  )
}
