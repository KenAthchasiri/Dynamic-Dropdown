import { useState } from 'react'
import './App.css'
import DropdownComponent from './components/DropdownComponent'
import FoodComponent from './components/FoodComponent'
import MenuData from './data/MenuData'

function App() {
  const [foods, setFoods] = useState(MenuData)

  const changeFoodData = (e) => {
    const category = e.target.value
    const result = MenuData.filter((element)=>{
      return element.menu === category
    })
    
    if(category === 'เมนูทั้งหมด') {
      setFoods(MenuData)
    }else{
      setFoods(result)
    }
    
  }
  return (
    <div className='container'>
      <DropdownComponent changeFoodData={changeFoodData}/>
      <div className='content'>
        {foods.map((element,i)=>{
          return <FoodComponent key={i} menu={element.menu} foodName={element.foodName} image_url={element.image_url}/>// {...data}
        })}
      </div>
      
    </div>
  )
}

export default App
