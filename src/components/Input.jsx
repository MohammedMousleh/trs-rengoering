import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
padding-left: 10px; 
height: 43px; 
width: 200px; 
border: 1px solid #333;
background-color: transparent;
border-radius: 3px; 

`;

export default function Input({ onChange, value, type, onClick, ...props }) {
    return (
        <StyledInput {...props} onChange={onChange} value={value} type={type} onClick={onClick}></StyledInput>
    )
}
