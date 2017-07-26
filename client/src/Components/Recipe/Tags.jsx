import React, { Component } from 'react';
import styled from 'styled-components';

const TagsHolder = styled.div`
    margin-bottom: 2em;
    >h1{
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        color: #646464;
    }
`
const Tag = styled.div`
    margin: 0.5em;
    background: #EBEBEB;
    color: #4A4A4A;
    padding: 0.5em;
    min-width: 100px;
    min-height: 30px;    
    border-radius: 5px;

`
class Tags extends Component {
    render() {
        return (
            <TagsHolder className="container">
                <h1>Ingredients</h1>
                <div className="row justify-content-first">
                    {
                        this.props.tags.map((tag, i)=>{
                            return(
                                <Tag key={i}>{tag}</Tag>
                            )
                        })
                    }
                </div>
            </TagsHolder>
        );
    }
}

export default Tags;