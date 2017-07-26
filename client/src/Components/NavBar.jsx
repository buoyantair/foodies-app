import React, {Component} from 'react';
import styled from 'styled-components';

const NavHolder = styled.div `
    background: red;
`

class NavBar extends Component {
    render() {
        return (

            <nav
                className="navbar navbar-toggleable-md navbar-inverse bg-faded"
                style={{
                backgroundColor: "#1AB38F"
            }}>
                <button
                    className="navbar-toggler navbar-toggler-right"
                    type="button"
                    data-toggle="collapse"
                    data-target="#NavBar"
                    aria-controls="NavBar"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <h1 className="navbar-brand" href="#">RECIPIES</h1>
            </nav>
        );
    }
}

export default NavBar;