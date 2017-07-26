import React, {Component} from 'react';

import RecipeCard from './RecipeCard.jsx';

class RecipesHolder extends Component {
    constructor(props){
        super(props);
        this.state = {
            recipes: []
        }
    }

    componentWillMount() {
        fetch('/recipes', {
            headers:{
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            method: 'GET'
        })
        .then(res=>res.json())
        .then(json=>{
            this.setState({recipes: json.recipes})
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    {
                        this.state.recipes.map((recipe)=>{
                            return (
                                <RecipeCard viewRecipe={this.props.viewRecipe} key={recipe._id} recipe={recipe}/>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default RecipesHolder;