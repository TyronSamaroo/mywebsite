import React from 'react'
import styled from 'styled-components'
import mypic from './tyronpic.jped'
const Styles = styled.div`
height: 100;
radius: 50;


	

`;
export const ProfilePhoto = () => {
    return (
        <div>
            <h2>Tyron Samaroo</h2>
            <Styles>
                <img src={mypic} alt={"mypic" />
            </Styles>
        </div>
    )
}

