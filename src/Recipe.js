import React from 'react'
import './App.css';
import {BrowserRouter, Route, Routes, Link, useLocation} from 'react-router-dom';



function Recipe()  {
    const location = useLocation();
    const recipe = location.state.recipe;
    return (
        <>
        <center><h2>{recipe.name}</h2></center>
        <br/>
        <center><img src={recipe.image} width='200'></img></center>
        <br/>
        <br/>
        <center><h4>{recipe.description}</h4></center>
        <br/>
        <br/>

        <center><h2>Ingredients</h2></center>
        {recipe.ingredient.map((igredient, index) => 
        <div key={index}>
            <center><h6>{igredient.amount}  {igredient.unit}  {igredient.name}</h6></center>
        </div>
        )}

        <br/>
        <br/>
        <center><h2>Steps</h2></center>
        <br/>
        <br/>
        {recipe.step.map((step, index) => 
        <>
        <div key={index}>
            
            <center><h6>{step.description}</h6></center>
            
        </div>
        <br/>
        </>
        )}




        
        </>
    );
}

export default Recipe;
