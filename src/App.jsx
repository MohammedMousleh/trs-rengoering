import './App.css';
import { IoCheckmarkCircle, IoCall, IoMail, IoLocation } from 'react-icons/io5';

import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import ImageComponent from './components/ImageComponent';
import getWindowDimensions from './hooks/useWindowDimensions.js';
import CheckMarkColumn from './components/CheckMarkColumn';

const Page = styled.div`
  top: 0px;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100vh;
  width: 90%;
  margin: 0 auto;
  display: flex;
  background-color: #e7ffef;
  align-items: center;
  min-height:100vh;
  background:linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url("/gallery/baggrund-5.jpg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  background-color: #333;
  height: ${({ height }) => `${height}px`};
   @media (max-width: 768px)
 {
   width: 100%;
 }
`;

const Page2 = styled.div`
z-index: 1;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 90%;
  margin: 0 auto;
  background-color: #FFF9F9;
  
  @media (max-width: 768px)
  {
    width: 100%;
  }
`;

const Page2ContentContainer = styled.div`
width: 100%;
height: 100%;
margin: 0 auto;
display: flex;
alignItems: center;
justifyContent: space-between;
flex-wrap: wrap;
@media (max-width: 768px)
 {
   flex-direction: column;
   width: 100%;
 }

`;

const Page3 = styled.div`
  height: 100%;
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #333;
  padding: 20px 0px;

  @media (max-width: 768px)
 {
   width: 100%;
   background-color: #ebb74a;
 }
  `;

const Page4 = styled.div`
  height: 100%;
  width: 90%;
  margin: 0 auto;
  background-color: white;
  @media (max-width: 768px)
 {
   width: 100%;
   background-color: white;
 }
`;

const PageOneHeadline = styled.div`
font-size: 60px;
color: white;
margin: 0;
text-align: center;
font-weight: 800;
  @media (max-width: 768px) {
font-size: 35px;
  }
`;

const PageOneSubHeadline = styled.div`
font-size: 25px;
color: white;
margin: 0px;
text-align: center;
fontWeight: 400;

@media (max-width: 768px) {
  font-size: 16px;
}
`;

const PageOneHeadlineContainer = styled.div`
 display: flex;
 flex-direction: column;
 row-gap: 25px;
 align-items: center;
 justify-content: center;
 width: 50%;
 margin: 0 auto;

 @media (max-width: 768px)
 {
   width: 100%;
 }
`;

const PageOneButton = styled.button`
box-shadow: rgb(rgb(76, 113, 200)) 0px 20px 50px;
border: none;
background-color: rgb(76, 113, 251);
margin: 0 auto;
padding: 20px 40px;
border-radius: 30px;
cursor: pointer;
transition: all 0.3s;
&:hover{
  background-color: rgb(76, 113, 200);

}

 @media (max-width: 768px)
 {
   padding: 15px 20px;
 }
`;

const PageOneButtonContainer = styled.div`
display: flex;
column-gap: 10px;
align-items: center;
color: white;
font-size: 1.2rem;
justify-content: center;
color: white;

@media (max-width: 768px)
 {
   font-size: 1rem;
 }
`;



const CleaningTypeContainer = styled.div`
width: 50%;
flex: 1;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;
justify-content:  center;
border-right: 0.5px dashed #e0e0e0;
padding: 25px;

 @media (max-width: 768px)
 {
   width: 100%;
   border: none; 
   padding: 0px;
   border-bottom: 1px dashed #a7a7a7;
   padding-bottom: 20px;
 }
`;

const CleaningTypeImage = styled.img`
display: block;
margin: 0 auto;
height: 350px; 
width: 350px;
max-width: 100%;
 
@media (max-width: 768px)
 {
   width: 300px;
   height: 300px;
 }
`;

const CommercielTypeImage = styled.img`
display: block;
margin: 0 auto;
height: 350px; 
width: 400px;
max-width: 100%;
margin-top: -40px;

 
@media (max-width: 768px)
 {
   width: 350px;
   margin-top: 0;
   height: 300px;


 }
`;

const CleaningTypeHeader = styled.div`
 color: #138472;
 font-size: 3rem;
 margin: 0;
 font-weight: 600;
 width: 100%;
 text-align: center;

 @media (max-width: 768px)
 {
   font-size: 35px;
 }
`;

const CleaningTypeSubHeader = styled.div`
color: #138472;
font-size: 2.5rem;
margin: 0;
font-weight: 200;
width: 100%;
text-align: center;


 @media (max-width: 768px)
 {
   font-size: 30px;
 }
`;

const CleaningTypeParagraph = styled.div`
 color: #555555;
 text-align: center;
 width: 100%;
 margin: 0 auto;
 margin-top: 20px;
 
 @media (max-width: 768px)
 {
   width: 85%;
 }
`;

const CleaningTypeCheckMarkContainer = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
margin: 20px 0px;
 @media (max-width: 768px)
 {
   flex-direction: column;
   width: 85%;
 }
`;

const CleaningTypeButton = styled.button`
border: none; 
background-color: #ebb74a;
margin: 0 auto;
padding: 20px 40px;
border-radius: 30px;
margin-top: 10px;
cursor: pointer;


transition: all 0.3s;
&:hover{
  background-color: rgb(76, 113, 200);

}

@media (max-width: 768px)
 {
   width: 85%;
 }
`;

const ImageGridContainer = styled.div`
display: flex;
width: 95%;
justify-content: center;
flex-wrap: wrap;
row-gap: 20px;
@media (max-width: 768px)
 {
   display: flex; 
   flex-direction: column;
   row-gap: 20px;
   flex-wrap: wrap;

 }
`;


const Page3Heading = styled.h4`
color: white;
font-size: 2.5rem;
margin: 0;
font-weight: 800;
text-align: center;

@media (max-width: 768px)
 {
   font-size: 35px;

 }
`;

const Page3SubHeading = styled.h4`
color: white;
font-size: 2.5rem;
margin: 0;
font-weight: 400;
text-align: center;
margin-bottom: 20px;


@media (max-width: 768px)
 {
   font-size: 30px;

 }
`;

function range(low, hi) {
  function rangeRec(low, hi, vals) {
    if (low > hi) return vals;
    vals.push(low);
    return rangeRec(low + 1, hi, vals);
  }
  return rangeRec(low, hi, []);
}


function App() {

  const page1Ref = useRef();
  const page2Ref = useRef();
  const page3Ref = useRef();
  const [currentPage, setCurrentPage] = useState(1);

  const dimensions = getWindowDimensions();

  const [images, setImages] = useState([

  ]);

  useEffect(() => {

  }, [])

  useEffect(() => {
    const arr = [];
    range(1, 15).map((number, index) => {
      arr.push({ src: `/gallery/${number}.jpg`, height: '300px', width: '300px' })
    })
    setImages(arr);
  }, [])

  return (
    <div style={{ backgroundColor: 'rgb(15, 29, 52)', width: '100%' }}>
      <div style={{ backgroundColor: 'rgb(15, 29, 52)', width: '100%' }}>

        {/* page 1 */}
        <Page
          height={dimensions.height}
          isHidden={currentPage !== 1}
          ref={page1Ref}>
          <div style={{ width: '95%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>

            <PageOneHeadlineContainer>
              <PageOneHeadline>Vi er her for at hjælpe med rengøringen!</PageOneHeadline>
              <PageOneSubHeadline>Vi forstår at virksomheder er forskellige, og på samme måde er deres rengørings behov det også. </PageOneSubHeadline>
              <div style={{ display: 'flex', width: '100%', columnGap: '20px', alignItems: 'center', justifyContent: 'center' }}>
                <PageOneButton >
                  <PageOneButtonContainer>
                    <IoCall />
                    <p style={{ fontWeight: 800, margin: 0 }}>Kontakt os</p>
                  </PageOneButtonContainer>
                </PageOneButton>
              </div>
            </PageOneHeadlineContainer>

          </div>
        </Page>

        {/* page 2 */}
        <Page2
          isHidden={currentPage !== 2}
          display="block"
          ref={page2Ref}>
          <Page2ContentContainer >

            <CleaningTypeContainer>

              <CleaningTypeImage alt="blob" src="/gallery/standard-cleaning.png" />

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>

                <CleaningTypeHeader style={{ marginTop: '-40px' }}>Standard</CleaningTypeHeader>
                <CleaningTypeSubHeader>Rengøring</CleaningTypeSubHeader>
                <CleaningTypeParagraph>Vi tilbyder al form for rengøring. Har dit kontor, hjem, festsal eller andet brug for en god omgang rengøring? Så har du fået fat på de rigtige!</CleaningTypeParagraph>

                <CleaningTypeCheckMarkContainer>

                  <div style={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>

                    <CheckMarkColumn text="Køkkener"></CheckMarkColumn>

                    <CheckMarkColumn text="Toiletter"></CheckMarkColumn>

                    <CheckMarkColumn text="Soveværelser og stuer"></CheckMarkColumn>

                    <CheckMarkColumn text="Vinduer"></CheckMarkColumn>

                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>

                    <CheckMarkColumn text="Tæpper"></CheckMarkColumn>

                    <CheckMarkColumn text="Indflytninger & Udflytninger"></CheckMarkColumn>

                    <CheckMarkColumn text="Efter konstrution"></CheckMarkColumn>

                    <CheckMarkColumn text="Ekstra ydelser"></CheckMarkColumn>

                  </div>

                </CleaningTypeCheckMarkContainer>

                <CleaningTypeButton>
                  <div style={{ display: 'flex', columnGap: '10px', alignItems: 'center', color: 'white', fontSize: '18px', justifyContent: 'center' }}>
                    <IoCall />
                    <p style={{ fontWeight: 800, color: 'white', fontSize: '1rem', margin: 0 }}>Kontakt os</p>
                  </div>
                </CleaningTypeButton>

              </div>

            </CleaningTypeContainer>

            <CleaningTypeContainer>

              <CommercielTypeImage alt="blob" src="/gallery/commerciel-cleaning.png" />

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', }}>

                <CleaningTypeHeader>Kommerciel</CleaningTypeHeader>
                <CleaningTypeSubHeader>Rengøring</CleaningTypeSubHeader>
                <CleaningTypeParagraph>Vi tilbyder al form for rengøring. Har dit kontor, hjem, festsal eller andet brug for en god omgang rengøring? Så har du fået fat på de rigtige!</CleaningTypeParagraph>

                <CleaningTypeCheckMarkContainer>

                  <div style={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>

                    <CheckMarkColumn text="Supermarkeder & Butikker"></CheckMarkColumn>

                    <CheckMarkColumn text="Slagterier"></CheckMarkColumn>

                    <CheckMarkColumn text="Medicinske faciliteter"></CheckMarkColumn>

                    <CheckMarkColumn text="Fabrikker"></CheckMarkColumn>

                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>

                    <CheckMarkColumn text="Restauranter"></CheckMarkColumn>

                    <CheckMarkColumn text="Offentlige faciliteter"></CheckMarkColumn>

                    <CheckMarkColumn text="Lagerbygningern"></CheckMarkColumn>

                    <CheckMarkColumn text="Større bygninger & andet"></CheckMarkColumn>

                  </div>

                </CleaningTypeCheckMarkContainer>

                <CleaningTypeButton>
                  <div style={{ display: 'flex', columnGap: '10px', alignItems: 'center', color: 'white', fontSize: '18px', justifyContent: 'center' }}>
                    <IoCall />
                    <p style={{ fontWeight: 800, color: 'white', fontSize: '1rem', margin: 0 }}>Kontakt os</p>
                  </div>
                </CleaningTypeButton>

              </div>



            </CleaningTypeContainer>

          </Page2ContentContainer>
        </Page2>

        {/* page 3 */}
        <Page3
          isHidden={currentPage !== 3}
          ref={page3Ref}>


          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'fit-content', margin: '0 auto', height: 'fit-content', }}>
            <Page3Heading>Grundene til vores</Page3Heading>
            <Page3SubHeading>Kunder vælger os</Page3SubHeading>
          </div>

          <ImageGridContainer>

            <ImageComponent
              imageSrc="/gallery/30-years.jpg"
              title="Over"
              subTitle="30 års earfaring"
              description="Vores mikrofiberklude, som fanger støv og snavs i stedet for at flytte rundt på det, holder længere end traditionel bomuld."
            ></ImageComponent>


            <ImageComponent
              imageSrc="/gallery/trust-2.jpg"
              title="100%"
              subTitle="Tillid & tilfredshed"
              description="En pengene-tilbage-garanti, også kendt som en tilfredshedsgaranti, hvis en køber ikke er tilfreds med et produkt eller en service."
            ></ImageComponent>


            <ImageComponent
              imageSrc="/gallery/eco-products-small.jpg"
              title="Miljøvenlige"
              subTitle="Rengørings produkter"
              description="Fordi indendørs forureningsrater typisk er højere end udendørs forureningsrater, tager vi støvfjernelse alvorligt."
            ></ImageComponent>

            <ImageComponent
              imageSrc="/gallery/green-investment-small.jpg"
              title="Grøn"
              subTitle="Investering"
              description="Invister både i din og jordens hygiejne. Vi prøver både gennem vores produkter og din investering at skabe et bedre sted for vores generation og den næste."
            ></ImageComponent>

          </ImageGridContainer>


        </Page3>

        {/* Page 4 */}
        <Page4>
          <div style={{ display: 'flex', backgroundColor: '#33322', width: '100%', padding: '5px', }}>
            <div style={{
              padding: '20px',
              width: '30%',
              backgroundColor: '#ebb74a',
              backgroundSize: 'cover',
              position: 'relative',
              overflow: 'hidden',
              zIndex: 1,
              boxShadow: 'rgb(99, 99, 99) 0px 2px 8px 0px',
            }}>
              <p style={{ fontSize: '2.5rem', fontWeight: 600, margin: 0, color: 'white', }}>Kontakt information</p>
              <p style={{ color: 'white', fontSize: '16px', fontWeight: 400, }}>Udfyld kontaktformularen og vi vil vende tilbage til dig hurtigst muligt.</p>

              <div tyle={{ fontSize: '16px', columnGap: '10px', fontWeight: 500, color: 'white' }}>


                <div style={{ display: 'flex', width: '100%', alignItems: 'center', fontSize: '16px', columnGap: '10px', fontWeight: 500, color: 'white' }}>
                  <IoCall />
                  <p>34 34 24 32</p>
                </div>

                <div style={{ display: 'flex', width: '100%', alignItems: 'center', fontSize: '16px', columnGap: '10px', fontWeight: 500, color: 'white' }}>
                  <IoMail />
                  <p>trs-rengøring@gmail.com</p>
                </div>

                <div style={{ display: 'flex', width: '100%', alignItems: 'center', fontSize: '16px', columnGap: '10px', fontWeight: 500, color: 'white' }}>
                  <IoLocation />
                  <p>Agtoftsvej 31, 6400 Sønderborg</p>
                </div>

              </div>

              <div style={{ zIndex: -1, backgroundColor: 'rgb(76, 113, 200)', borderRadius: '50%', height: '400px', width: '400px', position: 'absolute', bottom: '-200px', right: '-150px', }}></div>
              <div></div>
            </div>

            <div style={{
              display: 'flex',
              width: '70%',
              flexDirection: 'column',
              justifyContent: 'start',
              alignItems: 'start',
              rowGap: '20px',
              padding: '40px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', columnGap: '40px', width: '100%' }}>

                <input style={{
                  width: '50%',
                  maxWidth: '500px',
                  height: '40px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid #333'
                }} placeholder='Fornavn'></input>

                <input style={{
                  width: '50%',
                  maxWidth: '500px',
                  height: '40px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid #333'
                }} placeholder='Efternavn'></input>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', columnGap: '40px', width: '100%' }}>

                <input style={{
                  width: '50%',
                  maxWidth: '500px',
                  height: '40px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid #333'
                }} placeholder='Email'></input>

                <input style={{
                  width: '50%',
                  maxWidth: '500px',
                  height: '40px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid #333'
                }} placeholder='Telefon/mobil nummer'></input>
              </div>
              <textarea style={{ minHeight: '300px', width: '100%' }}></textarea>
              <button>Send</button>

            </div>
          </div>
        </Page4>
      </div >
    </div >
  );
}

export default App;
