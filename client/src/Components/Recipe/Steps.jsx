import React, {Component} from 'react';
import styled from 'styled-components';

import Step from './Step.jsx';

const StepsHolder = styled.div `
    margin-bottom: 2em;
    >h1{
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        color: #646464;
    }
`

let localSteps = null;

class Steps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            steps: []
        }
    }

    componentWillMount() {
        this.setState({steps: this.props.steps});
        localSteps = this.state.steps;
    }

    addEmptyStep() {
        let EmptyStep = {
            desc: '',
            img: ''
        }

        let {steps} = this.state;
        steps.push(EmptyStep);
        this.setState({steps});

        localSteps.push(EmptyStep);

        console.log("added");
    }

    render() {
        return (
            <StepsHolder>
                <h1 className="container">Steps</h1>
                <div>
                    {this
                        .state
                        .steps
                        .map((stepInfo, i) => {
                            return (
                                <Step
                                key={i}
                                isEditing={this.props.isEditing}
                                step={stepInfo}
                                lSteps={localSteps}
                                index={i}/>)
                        })
}
                    <div className="container">
                        <div className="row justify-content-center">
                            <button className="btn btn-primary btn-lg" onClick={this.addEmptyStep}>
                                Add Step
                            </button>
                        </div>
                    </div>
                </div>
            </StepsHolder>
        );
    }
}

export default Steps;