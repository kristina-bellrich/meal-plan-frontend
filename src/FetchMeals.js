import axios from "axios";

//get all meal from API and display it 
const getAllMeal = (setMeal)=> {
    axios.get("http://localhost:7000")
    .then(({data})=> {
          console.log(data)
     setMeal(data)
})
}


//say to add new Meal and display what was before
const addMeal = (title, ingredients, setIngredients, setTitle, setMeal, dayOfWeek, setDayOfWeek)=>{
    axios.post(`http://localhost:7000/saveMeals`, {title, ingredients, dayOfWeek})
    .then(()=>{
 //after push ADD empty inputs and update all list 
        setTitle("")
        setIngredients("")
        setDayOfWeek("")
        getAllMeal(setMeal)
    })
     .catch((err)=>{console.log(err)})
    }

const editMeal = (mealId, title, ingredients, setIngredients, setMeal, setTitle, setEditing1, dayOfWeek, setDayOfWeek)=>{
    axios.post(`http://localhost:7000/editMeal`, {_id: mealId, title, ingredients, dayOfWeek})
        .then(()=>{
            setTitle("")
            setIngredients("")
            setDayOfWeek("")
            setEditing1(false)
            getAllMeal(setMeal)
        })
}


const deleteMeal = (_id, setMeal)=>{
    axios.post(`http://localhost:7000/deleteMeal`, {_id})
        .then(()=>{
            getAllMeal(setMeal)
        })
}


export {getAllMeal,addMeal, editMeal,deleteMeal}