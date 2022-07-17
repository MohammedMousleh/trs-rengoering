import './App.css';
import { IoCall, IoMail, IoLocation, IoMailOutline, IoCallOutline } from 'react-icons/io5';

import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import ImageComponent from './components/ImageComponent';
import getWindowDimensions from './hooks/useWindowDimensions.js';
import CheckMarkColumn from './components/CheckMarkColumn';
import Input from './components/Input';

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
column-gap: 25px;
row-gap: 25px;
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
  background-color: #ffffff;
  padding: 20px 0px;
  padding-bottom: 100px;

  @media (max-width: 768px)
 {
   width: 100%;
 }
  `;

const Page4 = styled.div`
  height: 100%;
  width: 90%;
  margin: 0 auto;
  background-color: white;
    background:linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url("/gallery/baggrund-5.jpg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
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
border: none;
background-color: #138472;
margin: 0 auto;
padding: 20px 40px;
border-radius: 6px;
cursor: pointer;
transition: all 0.3s;
&:hover{
  background-color: #035043;

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
background-color: white;
border-radius: 6px;
padding: 25px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

 @media (max-width: 768px)
 {
   width: 90%;
   border: none; 
   padding: 0px;
   padding-bottom: 20px;
   margin: 0 auto;
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
 color: #333;
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
color: #333;
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
background-color: #138472;
margin: 20px auto;
padding: 20px 40px;
border-radius: 6px;
cursor: pointer;
color: white;
transition: all 0.3s;
&:hover{
  background-color: #035043;

}

 @media (max-width: 768px)
 {
   padding: 15px 20px;
 }
`;

const ImageGridContainer = styled.div`
display: flex;
width: 95%;
justify-content: center;
flex-wrap: wrap;
row-gap: 25px;
column-gap: 25px;
@media (max-width: 768px)
 {
   display: flex; 
   flex-direction: column;
   row-gap: 20px;
   flex-wrap: wrap;

 }
`;


const Page3Heading = styled.h4`
font-size: 2.5rem;
margin: 40px 0px 0px 0px;
font-weight: 800;
text-align: center;

@media (max-width: 768px)
 {
   font-size: 35px;

 }
`;

const Page3SubHeading = styled.h4`
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

const Page2Wrapper = styled.div`
background-color: white;
width: 90%;
margin: 0 auto;

@media (max-width: 768px)
 {
   width: 100%;

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


      <div style={{ display: 'flex', columnGap: '25px', padding: '0px 20px', alignItems: 'center', position: 'fixed', top: '0', height: '70px', backgroundColor: '#ffffff', width: '100%', margin: '0 auto', }}>
        <div style={{ display: 'flex', columnGap: '25px', padding: '0px 20px', alignItems: 'center', height: '70px', backgroundColor: '#ffffff', width: '90%', margin: '0 auto', }}>
          <img style={{ height: '80px' }} src="/gallery/logo-sbs.png"></img>
          <div style={{ display: 'flex', alignItems: 'center', columnGap: '5px' }}>
            <IoCallOutline style={{ fontSize: '18px', }} />
            <p style={{ margin: 0, fontWeight: '500', }}>Mobil: 26342474</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', columnGap: '5px' }}>
            <IoMailOutline style={{ fontSize: '20px', alignSelf: 'center', }} />
            <p style={{ margin: 0, marginTop: '-2px', fontWeight: '500', }}> Email: trs-rengøring@hotmail.com</p>
          </div>
        </div>
      </div>

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
        <Page2Wrapper >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'fit-content', margin: '0 auto', height: 'fit-content', }}>
            <Page3Heading>Få indsigt i</Page3Heading>
            <Page3SubHeading>Hvad vi tilbyder</Page3SubHeading>
          </div>

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
                    <div style={{ display: 'flex', columnGap: '10px', alignItems: 'center', fontSize: '18px', justifyContent: 'center' }}>
                      <IoCall />
                      <p style={{ fontWeight: 800, fontSize: '1rem', margin: 0 }}>Kontakt os</p>
                    </div>
                  </CleaningTypeButton>

                </div>

              </CleaningTypeContainer>

              <CleaningTypeContainer>

                <CommercielTypeImage alt="blob" src="/gallery/commerciel-cleaning.png" />

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>

                  <CleaningTypeHeader>Kommerciel</CleaningTypeHeader>
                  <CleaningTypeSubHeader>Rengøring</CleaningTypeSubHeader>
                  <CleaningTypeParagraph>Vi har mange års earfaring med kommerciel rengøring. Derfor har vi det nødvendige maskiner som sørg for at der altid er rent på din arbejdsplads.</CleaningTypeParagraph>

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
                    <div style={{ display: 'flex', columnGap: '10px', alignItems: 'center', fontSize: '18px', justifyContent: 'center' }}>
                      <IoCall />
                      <p style={{ fontWeight: 800, fontSize: '1rem', margin: 0 }}>Kontakt os</p>
                    </div>
                  </CleaningTypeButton>

                </div>



              </CleaningTypeContainer>

            </Page2ContentContainer>
          </Page2>
        </Page2Wrapper>
        {/* page 3 */}
        <Page3
          isHidden={currentPage !== 3}
          ref={page3Ref}>


          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'fit-content', margin: '0 auto', height: 'fit-content', color: '#333' }}>
            <Page3Heading>Grundene til vores</Page3Heading>
            <Page3SubHeading>Kunder vælger os</Page3SubHeading>
          </div>

          <ImageGridContainer>

            <ImageComponent
              imageSrc="/gallery/1.jpg"
              title="Over"
              subTitle="20 års earfaring"
              description="Vores mikrofiberklude, som fanger støv og snavs i stedet for at flytte rundt på det, holder længere end traditionel bomuld."
            ></ImageComponent>


            <ImageComponent
              imageSrc="/gallery/2.jpg"
              title="100%"
              subTitle="Tillid & tilfredshed"
              description="En pengene-tilbage-garanti, også kendt som en tilfredshedsgaranti, hvis en køber ikke er tilfreds med et produkt eller en service."
            ></ImageComponent>


            <ImageComponent
              imageSrc="/gallery/4.jpg"
              title="Grøn"
              subTitle="Investering"
              description="Invister både i din og jordens hygiejne. Vi prøver både gennem vores produkter og din investering at skabe et bedre sted for vores generation og den næste."
            ></ImageComponent>

          </ImageGridContainer>


        </Page3>

        {/* Page 4 */}
        <Page4>

          <div style={{

            width: '100%', margin: '0 auto', columnGap: '25px', color: 'white',
          }}>

            <div style={{
              padding: ' 100px 20px',
              width: '90%',
              margin: '0 auto',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '6px',
              color: 'white',
              backgroundColor: 'transparent',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 1,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',

            }}>


              <div>
                <p style={{ fontSize: '2.5rem', fontWeight: 600, margin: 0, }}>TRS-Rengøring</p>
                <p style={{ fontSize: '1.2rem', fontWeight: 500, margin: 0, marginTop: '25px', }}>
                  Med mere end 30 års eafaring inden for branchen er vi nogle af de bedste til det vi gør.
                </p>
                <p>© 2020 TRS-rengøring ApS</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', rowGap: '15px', alignItems: 'center', width: '100%', }}>

                <div style={{ display: 'flex', flexDirection: 'column', rowGap: '15px', }}>
                  <p style={{ fontSize: '2rem', fontWeight: 600, margin: 0, }}>Kontakt Infomation</p>

                  <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}>
                    <IoCallOutline fontSize="20px" />
                    <p style={{ fontSize: '1.2rem', fontWeight: 600, margin: 0, }}><a style={{ color: 'white', }} href="tel:sbsren@hotmail.com">+45 22 47 78 57</a></p>
                  </div>


                  <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}>
                    <IoMailOutline fontSize="20px" />
                    <p style={{ fontSize: '1.2rem', fontWeight: 600, margin: 0, }}><a style={{ color: 'white', }} href="mailto:sbsren@hotmail.com">sbsren@hotmail.com</a></p>
                  </div>
                </div>
              </div>


            </div>



          </div>
        </Page4>
      </div >
    </div >
  );
}

export default App;
