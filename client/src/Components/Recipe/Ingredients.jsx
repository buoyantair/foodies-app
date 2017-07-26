import React, {Component} from 'react';
import styled from 'styled-components';

const IngredientsHolder = styled.div `
    margin-bottom: 2em;
    >h1{
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        color: #646464;
    }

    >.list-group{
        >.ingredient{
            font-family: 'Open Sans', sans-serif;
            font-size: 22px;
            color: #4A4A4A;
        }
    }
`
const InputBox = styled.input `
    &:focus{
        border-color: #1AB38F;
    }
`

class Ingredients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredient: ""
        }
    }

    render() {
        return (
            <IngredientsHolder className="container">
                <h1>Ingredients</h1>
                <form
                    className="list-group"
                    onSubmit={(e) => {
                    e.preventDefault();
                    this
                        .props
                        .handleAddEntry("ingredients", this.state.ingredient)
                }}>
                    {this
                        .props
                        .ingredients
                        .map((ingredient, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`${this.props.isEditing
                                    ? ("list-group-item")
                                    : "ingredient"}`}
                                    style={{
                                    position: "relative"
                                }}>
                                    {`${ingredient}`}
                                    {this.props.isEditing
                                        ? (
                                            <button
                                                type="button"
                                                className="close"
                                                aria-label="Close"
                                                style={{
                                                position: "absolute",
                                                right: "0",
                                                top: "50%",
                                                transform: "translateY(-50%)"
                                            }}
                                                onClick={(e) => {
                                                e.preventDefault();
                                                this
                                                    .props
                                                    .handleRemoveEntry("ingredients", index)
                                            }}>
                                                <span
                                                    aria-hidden="true"
                                                    style={{
                                                    margin: "1em"
                                                }}>&times;</span>
                                            </button>
                                        )
                                        : null
}
                                </div>
                            )
                        })
}
                    {this.props.isEditing
                        ? (
                            <div className="input-group list-group-item">
                                <InputBox
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter the ingredient"
                                    onChange={(e) => {
                                    e.preventDefault();
                                    this.setState({ingredient: e.target.value});
                                }}/>
                                <span className="input-group-btn">
                                    <button
                                        className="btn btn-secondary"
                                        type="submit"
                                        style={{
                                        color: "#FFF",
                                        background: "#1AB38F",
                                        fontSize: "18px",
                                        border: "none"
                                    }}>
                                        <span className="ion-ios-paperplane-outline"></span>
                                    </button>
                                </span>
                            </div>
                        )
                        : null
}
                </form>
            </IngredientsHolder>
        );
    }
}

export default Ingredients;