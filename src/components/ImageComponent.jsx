import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
background-color: white;
border-radius: 6px;
margin-right: 0px;
display: flex;
flex-direction: column;
margin-top: 20px;
max-width: 30%;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

@media (max-width: 768px)
 {
     width: 95%;
     margin-right: 0;
     margin: 0 auto;
     max-width: 95%;

 }
`;


const ImageComponent = ({ imageSrc, title, subTitle, description }) => {

    return (
        <ImageContainer>
            <img loading='lazy' style={{ height: '300px', borderRadius: '6px 6px 0 0' }} alt="cleaning" src={imageSrc}></img>
            <div className="classContainer" style={{ height: '50%' }}>
                <h4 style={{ color: '#333', fontSize: '1.8rem', margin: 0, fontWeight: 800, marginTop: '-30px', }}>{title}</h4>
                <h4 style={{ color: '#333', fontSize: '1.8rem', margin: 0, fontWeight: 200, marginTop: '-15px' }}>{subTitle}</h4>
                <div style={{ height: '0.5px', backgroundColor: '#333', width: '50%' }} />
                <p style={{ margin: 0, textAlign: 'center', color: '#333', fontWeight: 400, width: '100%', }}>{description}</p>
            </div>
        </ImageContainer>
    )

};

export default ImageComponent; 