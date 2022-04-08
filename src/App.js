import React,{useEffect, useState} from 'react'
import './App.css';
import igredientsData from './data/igredients.json'
import recipesData from './data/recipes.json'
import Recipe from './recipe';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';


function App() {

  const [ingredients, setIngredients] = useState([])
  const [recipes, setRecipes] = useState([])
  
  
  const addItem = (index) => {
    const isItemExist = ingredients.includes(igredientsData[index].name);
    if (isItemExist) {
      const removeIndex = ingredients.indexOf(igredientsData[index].name) ;
      ingredients.splice(removeIndex, 1);
      setIngredients([...ingredients]);
    } else {
      setIngredients([...ingredients, igredientsData[index].name]);

    }
  }

  const getRecipes = () => {
    var newList = [];

    if (ingredients.length > 0) {
      
      for (var x = 0; x < recipesData.length; x++) {
          const recipeIgreditens = recipesData[x].ingredient;
          const list = recipeIgreditens.map(item => item.name);


          const hasAll = ingredients.every(value => {
            return list.includes(value);
          });

          if (hasAll) {
            newList.push(recipesData[x]);
          }  

        }

      setRecipes(newList);

    } else {
      alert('Please select at least 1 ingredient');
    }
  }

  useEffect(()=> {
    console.log(ingredients);
  }, [ingredients])

  useEffect(()=> {
    console.log(recipes);
  }, [recipes])

  function RecipePage() {
    return (
      <>
      <br/>
      <center><h2>Select Ingredients</h2></center>
      <br/>
      <div className="container products">
      {igredientsData.map((igredient, index) =>
      <div className={ingredients.includes(igredientsData[index].name) ? 'greenBG item' : 'whiteBG item'}  key={index} onClick={() => addItem(index)}>
        <img src={igredient.img} alt={igredient.name}/>
        <h6>{igredient.name}</h6>
      </div>
    
      )}
      </div>
      <center><div className='getRecipesBtn' onClick={() => getRecipes()}><h5>Get Recipes</h5></div></center>
  
      <br/>
      <center><h2>Recipes</h2></center>
      <br/>
  
      
  
      <div className="container products">
      {recipes.map((recipe, index) => <div key={index} className="item-big">
      {/* <Link to={{pathname:'/recipe', state:'KGKGKGKGKG'}}> */}
      <Link to='/recipe' state={{recipe:recipe}}>
      <img src={recipe.image}></img>
      </Link>
      <h6>{recipe.name}</h6>
      
      </div>)}
      </div>
  
  
      </>
    );
  }

  const rootElement = document.getElementById('root');

  return(



    <BrowserRouter>         


    <Routes>
    <Route path="/" element={<RecipePage/>} exact>                    
    </Route>
    <Route path="recipe" element={<Recipe/>}></Route>
    </Routes>
    

    
    </BrowserRouter>







  );

  
}



export default App;