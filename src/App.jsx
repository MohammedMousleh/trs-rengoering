import './App.css';
import { IoChevronDown, IoCheckmarkCircle, IoCall } from 'react-icons/io5';
import ladyCleaningAnimation from './assets/animations/cleaning-lady.json';
import catWindow from './assets/animations/cat-window-animation.json';

import ladyCleaningV2Animation from './assets/animations/cleaning-lady-v2.json';

import manCleaningAnimation from './assets/animations/man-cleaning.json';
// import servicesCleaningAnimation from './assets/animations/services-cleaning.json';

import React, { useEffect, useRef, useState, useCallback } from "react";
import lottie from "lottie-web";
import styled, { keyframes } from 'styled-components';

const scrollup = keyframes`

0%{
margin-top: 0
}

`;

const Page = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 90%;
  margin: 0 auto;
  display: flex;
  background-color: #e7ffef;
  align-items: center;
  min-height:100%;
  background:linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url("/gallery/baggrund-5.jpg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  background-color: #333;
`;

const EcoProductsImage = styled.div`
  background:linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url("/gallery/eco-products-small.jpg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  background-color: #333;
  height: 300px;
  width: 100%;
  border-radius: .55rem .55rem 0 0;
`;

const TrustImage = styled.div`
  background:linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url("/gallery/trust-2.jpg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  background-color: #333;
  height: 300px;
  width: 100%;
  border-radius: .55rem .55rem 0 0;

`;

const GreenInvestmentImage = styled.div`
  background:linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url("/gallery/green-investment-small.jpg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  background-color: #333;
  height: 300px;
  width: 100%;
  border-radius: .55rem .55rem 0 0;

`;


const ThrityYearsImage = styled.div`
  background:linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url("/gallery/30-years.jpg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  background-color: #333;
  height: 300px;
  width: 100%;
  border-radius: .55rem .55rem 0 0;

`;


const Page2 = styled.div`
  position: absolute;
  top: 100%;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 90%;
  margin: 0 auto;
  background-color: #FFF9F9;
`;

const Page3 = styled.div`
  position: absolute;
  top: 200%;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 90%;
  margin: 0 auto;
  display: flex;
  /* background-image: url("/blob-scatter.svg"); */
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  background-color: #141922;
  `;

const Page4 = styled.div`
  position: absolute;
  top: 300%;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  /* background-image: url("/blob-scatter.svg"); */
  align-items: center;
  flex-direction: column;

  `;

const Header = styled.div`
background-color: rgba(255, 255, 255, 0.5);
-o-backdrop-filter: blur(4px);
-webkit-backdrop-filter: blur(4px);
-moz-backdrop-filter: blur(4px);
backdrop-filter: blur(4px);
height: 100px;
position: fixed;
top: 0;
z-index: 1;
width: 100%;
display: flex;
align-items: center;
`;


const Gallery = styled.div`
animation-name: ${scrollup};
animation-duration: 20s;
animation-iteration-count: infinite;
animation-direction: alternate-reverse;
overflow: hidden;
animation-function: linear;
width: 100%;
`;

const GalleryImg = styled.img`
width: 100%;
height: 100%;
object-fit: fit;
border-radius: .55rem;
`;

const ImageContainer = styled.div`
/* From https://css.glass */
background: rgba(0, 0, 0, 0.43);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(11.3px);
-webkit-backdrop-filter: blur(11.3px);
border: 1px solid rgba(0, 0, 0, 0.41);
padding: 20px;
border-radius: 6px;
margin: 20px;
`;



function range(low, hi) {
  function rangeRec(low, hi, vals) {
    if (low > hi) return vals;
    vals.push(low);
    return rangeRec(low + 1, hi, vals);
  }
  return rangeRec(low, hi, []);
}

const CleaningLady = ({ height, v2, loop = true, autoplay = true, }) => {
  const anime = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop,
      autoplay,
      animationData: v2 ? ladyCleaningV2Animation : ladyCleaningAnimation,
    });
  }, [autoplay, loop, v2]);
  return <div style={{ height, zIndex: 1, }} ref={anime}></div>;
};

const CatWindow = ({ height, width, v2, loop = true, autoplay = true, }) => {
  const anime = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop,
      autoplay,
      animationData: catWindow,
    });
  }, [autoplay, loop, v2]);
  return <div style={{ height, width, zIndex: 3 }} ref={anime}></div>;
};


// const SofaBeforeAfter = ({ height, v2, loop = true, autoplay = true, ...props }) => {
//   const anime = useRef(null);
//   useEffect(() => {
//     lottie.loadAnimation({
//       container: anime.current,
//       renderer: "svg",
//       loop,
//       autoplay,
//       animationData: sofaBeforeAfter,
//     });
//   }, [autoplay, loop, v2]);
//   return <div {...props} style={{ height, }} ref={anime}></div>;
// };


const CleaningMan = ({ loop = true, autoplay = true, }) => {
  const anime = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop,
      autoplay,
      animationData: manCleaningAnimation,
    });
  }, [autoplay, loop]);
  return <div style={{ height: '400px' }} ref={anime}></div>;
};


function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}


function App() {

  const page1Ref = useRef();
  const page2Ref = useRef();
  const page3Ref = useRef();
  const page4Ref = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  // const { height, width } = useWindowDimensions();


  const [images, setImages] = useState([]);

  useEffect(() => {
    const arr = [];
    range(1, 15).map((number, index) => {
      arr.push({ src: `/gallery/${number}.jpg`, height: '300px', width: '300px' })
    })
    setImages(arr);
  }, [])

  // const scrollTo = (page) => {
  //   if (page === 1) {
  //     return page1Ref.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  //   if (page === 2) {
  //     return page2Ref.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  //   if (page === 3) {
  //     return page3Ref.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  //   if (page === 4) {
  //     return page4Ref.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  // const onScrolling = useCallback(async () => {
  //   if (canScroll) {
  //     window.onwheel = e => {
  //       if (e.deltaY >= 0) {
  //         if (currentPage !== 4) {
  //           setCurrentPage(currentPage + 1);
  //           scrollTo(currentPage + 1);
  //         }
  //       } else {
  //         if (currentPage !== 1) {
  //           setCurrentPage(currentPage - 1);
  //           scrollTo(currentPage - 1);

  //         }
  //       }
  //     }
  //   }

  // }, [canScroll, currentPage])

  // const onScroll = useCallback(async () => {
  //   if (canScroll) {
  //     onScrolling();
  //     setCanScroll(false);
  //     await delay(500);
  //     setCanScroll(true);
  //   }
  // }, [canScroll, onScrolling])

  // useEffect(() => {
  //   onScroll();
  // }, [onScroll]);

  return (
    <div style={{ backgroundColor: 'rgb(15, 29, 52)', width: '100%' }}>
      <div style={{ backgroundColor: 'rgb(15, 29, 52)', width: '100%' }}>
        <>
          {/* 
      <Header>
        <div style={{ width: '95%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>

          <div style={{ display: 'flex', alignItems: 'center', columnGap: '5px' }}>
            <img alt="logo" src="/trs-logo.png"></img>
            <p style={{ fontWeight: 800, color: 'rgb(4, 141, 141)', fontSize: '1.5rem' }}> TRS-rengøring</p>
          </div>


          <div style={{ display: 'flex', columnGap: '20px', alignItems: 'center', }}>
            <div style={{ backgroundColor: 'rgb(4, 141, 141)', padding: '10px 30px', borderRadius: '34px', display: 'flex', alignItems: 'center', columnGap: '5px' }}>
              <p style={{ margin: '0px', padding: '0px', color: 'white', fontWeight: '600' }}>Hjem</p>
              <IoChevronDown style={{ alignSelf: 'end', color: 'white', fontSize: '15px' }}></IoChevronDown>
            </div>

            <div style={{ backgroundColor: 'rgb(4, 141, 141)', padding: '10px 30px', borderRadius: '34px', display: 'flex', alignItems: 'center', columnGap: '5px' }}>
              <p style={{ margin: '0px', padding: '0px', color: 'white', fontWeight: '600' }}>Om os</p>
              <IoChevronDown style={{ alignSelf: 'end', color: 'white', fontSize: '15px' }}></IoChevronDown>
            </div>

            <div style={{ backgroundColor: 'rgb(4, 141, 141)', padding: '10px 30px', borderRadius: '34px', display: 'flex', alignItems: 'center', columnGap: '5px' }}>
              <p style={{ margin: '0px', padding: '0px', color: 'white', fontWeight: '600' }}>Ydelser</p>
              <IoChevronDown style={{ alignSelf: 'end', color: 'white', fontSize: '15px' }}></IoChevronDown>
            </div>

            <div style={{ backgroundColor: 'rgb(4, 141, 141)', padding: '10px 30px', borderRadius: '34px', display: 'flex', alignItems: 'center', columnGap: '5px' }}>
              <p style={{ margin: '0px', padding: '0px', color: 'white', fontWeight: '600' }}>Priser</p>
              <IoChevronDown style={{ alignSelf: 'end', color: 'white', fontSize: '15px' }}></IoChevronDown>
            </div>


            <div style={{ backgroundColor: 'rgb(4, 141, 141)', padding: '10px 30px', borderRadius: '34px', display: 'flex', alignItems: 'center', columnGap: '5px' }}>
              <p style={{ margin: '0px', padding: '0px', color: 'white', fontWeight: '600' }}>Galleri</p>
              <IoChevronDown style={{ alignSelf: 'end', color: 'white', fontSize: '15px' }}></IoChevronDown>
            </div>
          </div>


          <button style={{ backgroundColor: 'white', border: '1px solid rgb(4, 141, 141)', width: '200px', borderRadius: '34px', cursor: 'pointer' }}>
            <p style={{ fontWeight: 800, color: '#333', fontSize: '0.9rem' }}>Beregn pris estimat</p>
          </button>

        </div>
      </Header> */}
        </>
        {/* page 1 */}
        <Page
          isHidden={currentPage !== 1}
          ref={page1Ref}>
          <div style={{ width: '95%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>

            <div style={{ display: 'flex', flexDirection: 'column', rowGap: '25px', alignItems: 'center', justifyContent: 'center', width: '50%', margin: '0 auto' }}>
              <h1 style={{ fontSize: '60px', color: 'white', margin: '0', textAlign: 'center', fontWeight: 800 }}>Vi er her for at hjælpe med rengøringen!</h1>
              <p style={{ fontSize: '25px', color: 'white', margin: '0px', textAlign: 'center', fontWeight: 400 }}>Vi forstår at virksomheder er forskellige, og på samme måde er deres rengørings behov det også. </p>
              <div style={{ display: 'flex', width: '100%', columnGap: '20px', alignItems: 'center', justifyContent: 'center' }}>
                <button style={{ border: 'none', backgroundColor: 'rgb(4, 141, 141)', margin: '0 auto', padding: '15px 30px', borderRadius: '6px', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', columnGap: '10px', alignItems: 'center', color: 'white', fontSize: '18px' }}>
                    <IoCall style={{ fontSize: '23px' }} />
                    <p style={{ fontWeight: 800, color: 'white', fontSize: '1.2rem', margin: 0 }}>Kontakt os</p>
                  </div>
                </button>
              </div>
            </div>

            {/* <div style={{ display: 'flex', rowGap: '10px', width: '60%', justifySelf: 'end', position: 'relative', zIndex: 1 }}>
              <CleaningLady styel={{ zIndex: 1 }}></CleaningLady>
              <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
                <CatWindow height="400px" width="400px"></CatWindow>
              </div>
            </div> */}

          </div>
        </Page>

        {/* page 2 */}
        <Page2
          isHidden={currentPage !== 2}
          display="block"
          ref={page2Ref}>
          <div style={{ width: '95%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>

            <div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: ' center', borderRight: '0.5px dashed #e0e0e0' }}>
              <div>

                <img alt="blob" src="/gallery/standard-cleaning.png" style={{ display: 'block', height: '350px', width: '350px', margin: '0 auto' }}></img>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', rowGap: '20px', margin: '-40px', }}>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <h1 style={{ color: '#138472', fontSize: '3rem', margin: 0, fontWeight: 600, }}>Standard</h1>
                    <h1 style={{ color: '#138472', fontSize: '2.5rem', margin: 0, fontWeight: 200 }}>Rengøring</h1>
                  </div>
                  <p style={{ color: '#555555', textAlign: 'center', width: '80%', margin: '0 auto', }}>Vi tilbyder al form for rengøring. Har dit kontor, hjem, festsal eller andet brug for en god omgang rengøring? Så har du fået fat på de rigtige!</p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', }}>

                    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '5px' }}>

                      <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                        <IoCheckmarkCircle style={{ fontSize: '20px', color: '#ebb74a', }} />
                        <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Køkkener</p>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                        <IoCheckmarkCircle style={{ fontSize: '20px', color: '#ebb74a', }} />
                        <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Toiletter</p>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                        <IoCheckmarkCircle style={{ fontSize: '20px', color: '#ebb74a', }} />
                        <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Soveværelser og stuer</p>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                        <IoCheckmarkCircle style={{ fontSize: '20px', color: '#ebb74a', }} />
                        <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Vinduer</p>
                      </div>

                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '5px' }}>

                      <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                        <IoCheckmarkCircle style={{ fontSize: '20px', color: '#ebb74a', }} />
                        <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Tæpper</p>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                        <IoCheckmarkCircle style={{ fontSize: '20px', color: '#ebb74a', }} />
                        <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Indflytninger & Udflytninger</p>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                        <IoCheckmarkCircle style={{ fontSize: '20px', color: '#ebb74a', }} />
                        <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Efter konstrution</p>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                        <IoCheckmarkCircle style={{ fontSize: '20px', color: '#ebb74a', }} />
                        <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Ekstra ydelser</p>
                      </div>

                    </div>

                  </div>

                  <button style={{ border: 'none', backgroundColor: 'rgb(76, 113, 251)', margin: '0 auto', padding: '15px 15px', borderRadius: '6px', cursor: 'pointer' }}>
                    <div style={{ display: 'flex', columnGap: '10px', alignItems: 'center', color: 'white', fontSize: '18px' }}>
                      <IoCall />
                      <p style={{ fontWeight: 800, color: 'white', fontSize: '1rem', margin: 0 }}>Kontakt os</p>
                    </div>
                  </button>

                </div>


              </div>
            </div>

            <div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: ' center', }}>

              <div>
                <img alt="blob" src="/gallery/commerciel-cleaning.png" style={{ display: 'block', height: '350px', width: '400px', margin: '0 auto', }}></img>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', rowGap: '20px', margin: '-40px', }}>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <h1 style={{ color: '#138472', fontSize: '3rem', margin: 0, fontWeight: 600, }}>Kommerciel</h1>
                    <h1 style={{ color: '#138472', fontSize: '2.5rem', margin: 0, fontWeight: 200 }}>Rengøring</h1>
                  </div>
                  <p style={{ color: '#555555', textAlign: 'center', width: '80%', margin: '0 auto', }}>Vi tilbyder al form for rengøring. Har dit kontor, hjem, festsal eller andet brug for en god omgang rengøring? Så har du fået fat på de rigtige!</p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', }}>

                    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '5px' }}>

                      <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                        <IoCheckmarkCircle style={{ fontSize: '20px', color: '#ebb74a', }} />
                        <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Supermarkeder & Butikker</p>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                        <IoCheckmarkCircle style={{ fontSize: '20px', color: '#ebb74a', }} />
                        <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Slagterier</p>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                        <IoCheckmarkCircle style={{ fontSize: '20px', color: '#ebb74a', }} />
                        <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Medicinske faciliteter</p>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                        <IoCheckmarkCircle style={{ fontSize: '20px', color: '#ebb74a', }} />
                        <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Fabrikker</p>
                      </div>

                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '5px' }}>

                      <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                        <IoCheckmarkCircle style={{ fontSize: '20px', color: '#ebb74a', }} />
                        <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Restauranter</p>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                        <IoCheckmarkCircle style={{ fontSize: '20px', color: '#ebb74a', }} />
                        <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Offentlige faciliteter</p>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                        <IoCheckmarkCircle style={{ fontSize: '20px', color: '#ebb74a', }} />
                        <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Lagerbygningern</p>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                        <IoCheckmarkCircle style={{ fontSize: '20px', color: '#ebb74a', }} />
                        <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Større bygninger & andet</p>
                      </div>

                    </div>

                  </div>

                  <button style={{ border: 'none', backgroundColor: 'rgb(76, 113, 251)', margin: '0 auto', padding: '15px 15px', borderRadius: '6px', cursor: 'pointer' }}>
                    <div style={{ display: 'flex', columnGap: '10px', alignItems: 'center', color: 'white', fontSize: '18px' }}>
                      <IoCall />
                      <p style={{ fontWeight: 800, color: 'white', fontSize: '1rem', margin: 0 }}>Kontakt os</p>
                    </div>
                  </button>

                </div>

              </div>

            </div>

          </div>
        </Page2>



        {/* page 3 */}
        <Page3
          isHidden={currentPage !== 3}
          ref={page3Ref}>

          <div style={{ display: 'flex', flexDirection: 'column', rowGap: '40px', width: '100%', height: '100%', padding: '20px 0px', justifyContent: 'center', }}>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'fit-content', margin: '0 auto', height: 'fit-content', }}>
              <h4 style={{ color: 'white', fontSize: '2.5rem', margin: 0, fontWeight: 800, textAlign: 'center', }}>Grundene til vores</h4>
              <h4 style={{ color: 'white', fontSize: '2.5rem', margin: 0, fontWeight: 400, textAlign: 'center', }}>Kunder vælger os</h4>
            </div>


            {/* <div style={{ display: 'flex', columnGap: '20px', rowGap: '20px', width: '70%', margin: '0 auto' }}>
              {images.slice(0, 4).map((image, index) => (
                <GalleryImg style={{ height: image.height, width: image.width }} alt="cleaning" src={`${image.src}`} />
              ))}
            </div> */}


            <div style={{ display: 'grid', gridTemplateColumns: '25% 25% 25% 25%', width: '95%', margin: '-20px  auto 0 auto', }}>

              <div style={{ backgroundColor: '#333', borderRadius: '.55rem', marginRight: '20px', display: 'flex', flexDirection: 'column' }}>
                <ThrityYearsImage></ThrityYearsImage>
                <div className="classContainer" >
                  <h4 style={{ color: 'white', fontSize: '1.8rem', margin: 0, fontWeight: 800, marginTop: '-30px', }}>Over</h4>
                  <h4 style={{ color: 'white', fontSize: '1.8rem', margin: 0, fontWeight: 200, marginTop: '-15px' }}>30 års earfaring </h4>
                  <div style={{ height: '0.5px', backgroundColor: '#e0e0e0', width: '50%' }} />
                  <p style={{ margin: 0, textAlign: 'center', color: '#acacac', fontWeight: 400, width: '100%', }}>Vores mikrofiberklude, som fanger støv og snavs i stedet for at flytte rundt på det, holder længere end traditionel bomuld.</p>
                </div>
              </div>

              <div style={{ backgroundColor: '#333', borderRadius: '.55rem', marginRight: '20px', display: 'flex', flexDirection: 'column' }}>
                <TrustImage></TrustImage>
                <div className="classContainer" style={{ height: '160px' }}>
                  <h4 style={{ color: 'white', fontSize: '1.8rem', margin: 0, fontWeight: 800, marginTop: '-30px', }}>100%</h4>
                  <h4 style={{ color: 'white', fontSize: '1.8rem', margin: 0, fontWeight: 200, marginTop: '-15px' }}>Tillid & tilfredshed</h4>
                  <div style={{ height: '0.5px', backgroundColor: '#e0e0e0', width: '50%' }} />
                  <p style={{ margin: 0, textAlign: 'center', color: '#acacac', fontWeight: 400, width: '100%', }}>En pengene-tilbage-garanti, også kendt som en tilfredshedsgaranti, hvis en køber ikke er tilfreds med et produkt eller en service.</p>
                </div>

              </div>

              <div style={{ backgroundColor: '#333', borderRadius: '.55rem', marginRight: '20px', display: 'flex', flexDirection: 'column' }}>
                <EcoProductsImage></EcoProductsImage>
                <div className="classContainer" style={{ height: '160px' }}>
                  <h4 style={{ color: 'white', fontSize: '1.8rem', margin: 0, fontWeight: 800, marginTop: '-30px', }}>Miljøvenlige</h4>
                  <h4 style={{ color: 'white', fontSize: '1.8rem', margin: 0, fontWeight: 200, marginTop: '-15px' }}>Rengørings produkter</h4>
                  <div style={{ height: '0.5px', backgroundColor: '#e0e0e0', width: '50%' }} />
                  <p style={{ margin: 0, textAlign: 'center', color: '#acacac', fontWeight: 400, width: '100%', }}>Fordi indendørs forureningsrater typisk er højere end udendørs forureningsrater, tager vi støvfjernelse alvorligt.</p>
                </div>
              </div>

              <div style={{ backgroundColor: '#333', borderRadius: '.55rem', marginRight: '20px', display: 'flex', flexDirection: 'column' }}>
                <GreenInvestmentImage></GreenInvestmentImage>
                <div className="classContainer" style={{ height: '160px' }}>
                  <h4 style={{ color: 'white', fontSize: '1.8rem', margin: 0, fontWeight: 800, marginTop: '-30px', }}>Grøn</h4>
                  <h4 style={{ color: 'white', fontSize: '1.8rem', margin: 0, fontWeight: 200, marginTop: '-15px' }}>Investering</h4>
                  <div style={{ height: '0.5px', backgroundColor: '#e0e0e0', width: '50%' }} />
                  <p style={{ margin: 0, textAlign: 'center', color: '#acacac', fontWeight: 400, width: '100%', }}>Invister både i din og jordens hygiejne. Vi prøver både gennem vores produkter og din investering at skabe et bedre sted for vores generation og den næste.</p>
                </div>
              </div>

            </div>

          </div>

        </Page3>

        {/* <Page4 ref={page4Ref}>

          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <h4 style={{ color: 'rgb(255, 255, 255)', fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', }}>Få et indblik i vores hverdag</h4>

            <div style={{ display: 'flex', }}>
              <div style={{ alignSelf: 'center', width: '100%', justifySelf: 'end' }}>

                <div style={{ overflow: 'hidden', width: '100%' }}>
                  <Gallery>
                    <div style={{ display: 'flex', height: '100%', width: '100%', columnGap: '20px', rowGap: '20px', }}>
                      {images.map((image, index) => (
                        <GalleryImg style={{ height: image.height, width: image.width }} alt="cleaning" src={`${image.src}`} />
                      ))}
                    </div>
                  </Gallery>
                </div>

              </div>
            </div>


          </div>

        </Page4> */}
      </div >
    </div >
  );
}

export default App;
