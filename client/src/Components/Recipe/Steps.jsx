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

class Steps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            steps: this.props.steps
        };
    }

    render() {
        return (
            <StepsHolder>
                <h1 className="container">Steps</h1>
                <div>
                    {
                        this
                        .state
                        .steps
                        .map((stepInfo, i) => {
                            return (<Step key={i} isEditing={this.props.isEditing} step={stepInfo} index={i}/>)
                        })
                    }
                    {
                        this.props.isEditing
                        ? (
                            <div className="container">
                                <div className="row justify-content-center">
                                    <button className="btn btn-primary btn-lg" onClick={this.props.addEmptyStep}>
                                        Add Step
                                    </button>
                                </div>
                            </div>
                        )
                        : null
                    }

                </div>
            </StepsHolder>
        );
    }
}

export default Steps;