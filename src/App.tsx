import Header from './component/organsim/Header'
import Lable from './component/atoms/Label/Lable'

function App() {
  return (
    <div className={'App'}>
      <Header />
      <Lable variant={'primary'}>{'안녕'}</Lable>
    </div>
  )
}

export default App
