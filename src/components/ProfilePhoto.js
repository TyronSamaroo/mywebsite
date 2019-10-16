import React from 'react'
import styled from 'styled-components'
//import mypic from './images/tyronpic.jpeg';
const Styles = styled.div`
height: 100;
radius: 50;
text-align:center;


	

`;
export const ProfilePhoto = () => {
    return (
        <div>
            <h2>Tyron Samarooo</h2>
            <Styles>
                <img src={'./images/tyronpic.jpeg'} alt={"mypic" }/>
            </Styles>
        </div>
    )
}

