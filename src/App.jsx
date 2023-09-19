
import './App.css'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/LineChart/LineChart'

function App() {


  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className="text-7xl font-bold  bg-red-600">
        Hello world!
      </h1>

      <PriceOptions></PriceOptions>

      <LineChart></LineChart>

    </>
  )
}

export default App
