import React from 'react'
import './AvailableMeals.css'
import Card from '../UI/Card'
const mealChart = [{
        id:'m1',
        name:'Sushi',
        description: 'Finest fish veggies',
        price : '$22'
},
{
    id:'m2',
        name:'Sushi',
        description: 'Finest fish veggies',
        price : '$22'
},
{
    id:'m3',
        name:'Sushi',
        description: 'Finest fish veggies',
        price : '$22'
},
{
    id:'m4',
        name:'Sushi',
        description: 'Finest fish veggies',
        price : '$22'
}
]

const AvailableMeals = () => {
  return (
    <section className='meal-chart'>
    <Card>
    {
      mealChart.map((e) => (
            <div className='meal' key={e.id}>
                <h3>{e.name}</h3>
                <p className='description'>{e.description}</p>
                <h2 className='price'>{e.price}</h2>
                <hr />
            </div>
        ))
    }
    </Card>
    </section>
  )
}

export default AvailableMeals;
