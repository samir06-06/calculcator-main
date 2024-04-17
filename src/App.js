import "./App.css"
import Operations from "./Components/Operations/Operations"
import "bootstrap/dist/css/bootstrap.min.css"
import Input from "./Components/Input/Input"
import Answer from "./Components/Answer/Answer"
import Numbers from "../src/Components/Numbers/Numbers"
import TopPart from "./Components/TopPart/TopPart"

function App() {
  return (
    <div className="App">
      <TopPart />
      <Input />
      <Answer />
      <div className="left-right">
        <Numbers />
        <Operations />
      </div>
    </div>
  )
}

export default App
