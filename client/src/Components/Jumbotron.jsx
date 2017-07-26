import React, {Component} from 'react';
import styled from 'styled-components';

const JumbotronContainer = styled.div`
    transition: all 0.5s
`

class Jumbotron extends Component {
    render() {
        return (
            <JumbotronContainer>
                <div
                    className="jumbotron"
                    style={{
                    background: "#149778",
                    color: "#FFF",
                    borderRadius: "0"
                }}>
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