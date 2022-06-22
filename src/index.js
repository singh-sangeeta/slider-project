import { render } from 'react-dom'
import Example from './example'
import Carousel from '../src/components/carousel'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
         <Carousel />
        <Example />
      </DndProvider>
    </div>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)

