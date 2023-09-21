import './App.css'

function App() {
  console.log("teste1 " + import.meta.env.VITE_API_KEY)
  const apiKey = import.meta.env.VITE_API_KEY
  console.log("teste2 " + apiKey)

  return (
    <>
    <button className="btn btn-primary">Teste</button>
    </>
  )
}

export default App
