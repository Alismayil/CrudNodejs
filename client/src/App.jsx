import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import './app.css'

function App() {

  const [card, setCard] = useState([])
  const baseUrl = "http://localhost:3000"

  async function fetchData() {
    const res = await axios.get(`${baseUrl}`)
    setCard(res.data)
  }
  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className='bosh'>
    <h1>Product</h1>

    <div className='App'>
      {
        card && card.map((item) => (
          <div key={item.id} className='card' >
            <div className='imgCardBox'>
            <img src={item.image} alt="" />
            </div>
           <div className='cardText'>
           <p>Name: {item.name}</p>
            <p>Price: ${item.price}</p>
            <p>Info: {item.info}</p>
           </div>
          </div>
        ))
      }
    </div></div>
  )
}

export default App
