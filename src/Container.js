import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Frame, { FrameContextConsumer } from 'react-frame-component'
import { Box } from './Box.js'
import { Dustbin } from './Dustbin.js'
const FrameBindingContext = ({ children }) => (
  <FrameContextConsumer>
    {({ window }) => (
      <DndProvider backend={HTML5Backend} context={window}>
        {children}
      </DndProvider>
    )}
  </FrameContextConsumer>
)
// Don't use the decorator, embed the DnD context within the iframe
export const Container = () => {
 
  return (
    <>
      <Frame style={{ width: '100%', height: 400 }}>
        <FrameBindingContext>
          <div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
              <Dustbin />
            </div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
              <Box name="Glass" />
              <Box name="Banana" />
              <Box name="Paper" />
            </div>
          </div>
        </FrameBindingContext>
      </Frame>
    </>
  )
}
