import React, {Component} from 'react';
import styled from 'styled-components';


import Jumbotron from './Jumbotron.jsx';
import Ingredients from './Ingredients.jsx';
import Steps  from './Steps.jsx';
import Tags  from './Tags.jsx';

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            recipe : this.props.recipe
        }

    }

    handleEditToggle(){
        this.setState({isEditing: !this.state.isEditing})
    }

    addEmptyStep() {
        let EmptyStep = {
            desc: '',
            img: ''
        }

        let {steps} = this.state.recipe;
        steps.push(EmptyStep);
        this.setState({steps});
    }

    handleRemoveEntry(prop, index){
        let {recipe} = this.state;
        recipe[prop].splice(index, 1);
        this.setState({recipe});
    }

    handleAddEntry(prop, entry){
        let {recipe} = this.state;
        if(recipe[prop] && typeof recipe[prop] == "object"){
            recipe[prop].push(entry);
        }
        this.setState({recipe});
    }

    handleEditEntry(prop, index, newStep){
        let {recipe} = this.state;
        recipe[prop][index] = newStep;
        this.setState({recipe});
    }

    render() {
        const RecipeContainer = styled.div `
            width: 100%;
            min-height: 500px;
            >.jumbotron{
                ${this.state.recipe.recipe_image !== "" ? (
                    `background: url(${this.state.recipe.recipe_image}) no-repeat;`
                ): (
                    `background: grey;`
                )}
                >h1{

                }
                >p{

                }
            }
        `;

        return (
            <RecipeContainer>
                <Jumbotron isEditing={this.state.isEditing} handleEditToggle={this.handleEditToggle.bind(this)} heading={this.state.recipe.name} desc={this.state.recipe.desc}/>
                <Ingredients handleAddEntry={this.handleAddEntry.bind(this)} handleRemoveEntry={this.handleRemoveEntry.bind(this)} isEditing={this.state.isEditing} ingredients={this.state.recipe.ingredients} />
                <Steps 
                    isEditing={this.state.isEditing}
                    steps={this.state.recipe.steps}
                    addEmptyStep={this.addEmptyStep.bind(this)}
                    handleEditEntry={this.handleEditEntry.bind(this)}
                    />
                <Tags isEditing={this.state.isEditing} tags={this.state.recipe.tags} />
            </RecipeContainer>
        );
    }
}

export default Recipe;