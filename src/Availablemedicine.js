import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'
const DUMMY_MEALS =[
   { id:1 ,
    name :'idly' ,
    description : 'batter' ,
    price :45
   },
   { id:2 ,
    name :'dosa' ,
    description : 'batter' ,
    price :60
   },
   { id:3 ,
    name :'vada' ,
    description : 'batter' ,
    price :30
   }


]


const AvailableMeals =()=>{
        const MealList =DUMMY_MEALS.map((meal)=> <MealItem key={meal.id} id= {meal.id} name ={meal.name} discription={meal.description} price={meal.price} /> )
    return <section className ={classes.meals}>
       <Card>
       <ul>
            {MealList}
        </ul>
       
        </Card>
    </section>
}
export default AvailableMeals