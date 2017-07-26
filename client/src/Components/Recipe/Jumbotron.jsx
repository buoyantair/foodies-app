import React, {Component} from 'react';
import styled from 'styled-components';

const jumbotron_bg_color = "#149778";

const JumbotronContainer = styled.div`
    transition: all 0.5s
`

const RecipeOptions = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    margin: 2em;
    width: 40px;
    height: 40px;
    color: ${jumbotron_bg_color};
    background: #FFF;
    text-align: center;
    font-size: 20px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    border-radius: 100%;
    border: none;
    transition: all 0.5s;

    &:hover, &:active, &:focus{
        outline: none;
    }

    &:hover{
        translate: scale(0.1);
        box-shadow: 0px 10px 50px 1px rgba(0,0,0,0.3);
        cursor: pointer;
    }
`

class Jumbotron extends Component {
    constructor(props){
        super(props);
                
    }

    
    render() {
        return (
            <JumbotronContainer>
                <div
                    className="jumbotron"
                    style={{
                    background: jumbotron_bg_color,
                    color: "#FFF",
                    borderRadius: "0",
                    position: "relative"
                }}>
                    <RecipeOptions  className={`${this.props.isEditing ? "ion-ios-navigate-outline": "ion-ios-compose-outline"}`} onClick={this.props.handleEditToggle}/>
                    <h1>{this.props.heading}</h1>
                    <p>
                        {this.props.desc}
                    </p>
                </div>

            </JumbotronContainer>
        );
    }
}

export default Jumbotron;