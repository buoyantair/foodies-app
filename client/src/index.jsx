import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import NavBar from './Components/NavBar.jsx';
import Jumbotron from './Components/Jumbotron.jsx';
import RecipesHolder from './Components/RecipesHolder.jsx';
import Recipe from './Components/Recipe/Recipe.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "home",
            recipe: null
        }
    }

    viewRecipe(recipe) {
        if (!recipe) {
            console.error("No recipe argument!");
        }

        this.setState({page: "view_recipe", recipe});
    }

    submitHandler(e) {
        e.preventDefault();
        console.log("fetching")
        fetch('/login', {
            headers: {
                'Content-Type': 'application/json'
            },
                mode: 'cors',
                method: 'POST',
                body: this.state.currentUser
            })
            .then(res => res.json())
            .then(json => {
                if (json.result == true) {
                    this.setState({loggedin: true})
                }
            });
    }

    render() {

        const FrontPage = (this.state.page === "home")
            ? (
                <div>
                    <Jumbotron heading="Let's learn food" desc="This is the coolest thing every! :D"/>
                    <RecipesHolder
                        viewRecipe={this
                        .viewRecipe
                        .bind(this)}/>
                </div>
            )
            : (null);

        const RecipeObject = (this.state.page === "view_recipe") ? (
            <Recipe recipe={this.state.recipe}/>
        ) : null;

        return (
            <div>
                <NavBar/> 
                {FrontPage}
                {RecipeObject}
            </div>
        )
    }
}

ReactDOM.render(
    <App/>, document.getElementById('root'))