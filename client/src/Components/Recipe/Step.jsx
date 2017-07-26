import React, {Component} from 'react';
import styled from 'styled-components';

const StepHolder = styled.div `
    margin-bottom: 3em;
`

class Step extends Component {

    render() {
        const StepText = styled[this.props.isEditing
                ? "textarea"
                : "div"]`
            font-family: 'Open Sans', sans-serif;
            font-size: 22px;
            color: #4A4A4A;
            margin-bottom: 1em;
            border: none;

            ${this.props.isEditing
            ? `
                min-height: 300px;
                width: 100%;
            `
            : null}  
        `
        const StepImage = styled.div `
            width: 100%;
            height: 400px;
            background-size: cover;
            border: none;
            background: url('${this.props.step.img}') no-repeat;
        `
        return (this.props.isEditing
            ? (
                <StepHolder className="list-group">
                    <div className="container list-group-item">
                        <StepText
                            onChange={(e) => {
                            this.props.lSteps[this.props.index].desc = e.target.value;
                        }}
                            defaultValue={this.props.lSteps[this.props.index].desc}/>
                        <StepImage img={this.props.step.img} className="align-items-center">
                            <input type="text"/>
                        </StepImage>
                    </div>
                </StepHolder>
            )
            : (
                <StepHolder>
                    <StepText className="container">{this.props.step.desc}</StepText>
                    <StepImage img={this.props.step.img}/>
                </StepHolder>
            ));
    }
}

export default Step;