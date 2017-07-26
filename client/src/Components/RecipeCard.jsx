import React, {Component} from 'react';
import styled from 'styled-components';

const RecipeCardHolder = styled.div`
    animation: pop-in 1s forwards;

    @keyframes pop-in{
        0%{
            opacity: 0
        }
        100%{
            opacity: 1
        }
    }

`

class RecipeCard extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div
                    className="card"
                    style={{
                    width: "20rem",
                    margin: "1em"
                }}>
                    <div
                        className="card-img-top"
                        style={{
                        height: "15rem",
                        background: `url(${this.props.recipe.recipe_image != "" ? this.props.recipe.recipe_image : 'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg'}) no-repeat`,
                        backgroundSize: "cover"
                    }}
                        alt="Card image cap"></div>
                    <div className="card-block">
                        <h4 className="card-title">{this.props.recipe.name}</h4>
                        <p className="card-text">{this.props.recipe.desc}</p>
                        <button onClick={()=>{
                            this.props.viewRecipe(this.props.recipe)
                            }} href="#" className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecipeCard;