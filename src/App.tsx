import './App.css'
import storyData from "./assets/storiesData.json"
import Home from './page/Home'

function App() {
  return (
    <div >
      <Home storyData={storyData} />
    </div>
  )
}

export default App
