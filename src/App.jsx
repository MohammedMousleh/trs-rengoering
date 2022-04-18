import './App.css';
import { IoChevronDown, IoCheckmarkCircle } from 'react-icons/io5';
import ladyCleaningAnimation from './assets/animations/cleaning-lady.json';
import ladyCleaningV2Animation from './assets/animations/cleaning-lady-v2.json';
import sofaBeforeAfter from './assets/animations/sofa-before-after.json';
import madressBeforeAfter from './assets/animations/madress-before-after.json';

import manCleaningAnimation from './assets/animations/man-cleaning.json';
// import servicesCleaningAnimation from './assets/animations/services-cleaning.json';

import React, { useEffect, useRef, useState, useCallback } from "react";
import lottie from "lottie-web";
import styled, { keyframes } from 'styled-components';


const Page = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  background-color: #e7ffef;
  align-items: center;
`;

const Page2 = styled.div`
  position: absolute;
  top: 100%;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
`;

const Page3 = styled.div`
  position: absolute;
  top: 200%;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  background-image: url("/blob-scatter.svg");
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
  return <div style={{ height, }} ref={anime}></div>;
};

const SofaBeforeAfter = ({ height, v2, loop = true, autoplay = true, ...props }) => {
  const anime = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop,
      autoplay,
      animationData: sofaBeforeAfter,
    });
  }, [autoplay, loop, v2]);
  return <div {...props} style={{ height, }} ref={anime}></div>;
};

const MadressBeforeAfter = ({ height, v2, loop = true, autoplay = true, }) => {
  const anime = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop,
      autoplay,
      animationData: madressBeforeAfter,
    });
  }, [autoplay, loop, v2]);
  return <div style={{ height, }} ref={anime}></div>;
};


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

// const ServicesClaning = () => {
//   const anime = useRef(null);
//   useEffect(() => {
//     lottie.loadAnimation({
//       container: anime.current,
//       renderer: "svg",
//       loop: true,
//       autoplay: true,
//       speed: 0.01,
//       animationData: servicesCleaningAnimation,
//     });
//   }, []);
//   return <div style={{ height: '700px' }} ref={anime}></div>;
// };

function delay(milliseconds) {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
}

function App() {

  const page1Ref = useRef();
  const page2Ref = useRef();
  const page3Ref = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const [canScroll, setCanScroll] = useState(true);

  const scrollTo = (page) => {
    if (page === 1) {
      return page1Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (page === 2) {
      return page2Ref.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
    if (page === 3) {
      return page3Ref.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  const onScrolling = useCallback(async () => {
    if (canScroll) {
      window.onwheel = e => {
        if (e.deltaY >= 0) {
          if (currentPage !== 3) {
            setCurrentPage(currentPage + 1);
            scrollTo(currentPage + 1);
          }
        } else {
          if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
            scrollTo(currentPage - 1);

          }
        }
      }
    }

  }, [canScroll, currentPage])

  const onScroll = useCallback(async () => {
    if (canScroll) {
      onScrolling();
      setCanScroll(false);
      await delay(500);
      setCanScroll(true);
    }
  }, [canScroll, onScrolling])

  useEffect(() => {
    onScroll();
  }, [onScroll]);

  return (
    <>
      <>
        {/* 
      <Header>
        <div style={{ width: '95%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>

          <div style={{ display: 'flex', alignItems: 'center', columnGap: '5px' }}>
            <img alt="logo" src="/trs-logo.png"></img>
            <p style={{ fontWeight: 800, color: '#25ba57', fontSize: '1.5rem' }}> TRS-rengøring</p>
          </div>


          <div style={{ display: 'flex', columnGap: '20px', alignItems: 'center', }}>
            <div style={{ backgroundColor: '#25ba57', padding: '10px 30px', borderRadius: '34px', display: 'flex', alignItems: 'center', columnGap: '5px' }}>
              <p style={{ margin: '0px', padding: '0px', color: 'white', fontWeight: '600' }}>Hjem</p>
              <IoChevronDown style={{ alignSelf: 'end', color: 'white', fontSize: '15px' }}></IoChevronDown>
            </div>

            <div style={{ backgroundColor: '#25ba57', padding: '10px 30px', borderRadius: '34px', display: 'flex', alignItems: 'center', columnGap: '5px' }}>
              <p style={{ margin: '0px', padding: '0px', color: 'white', fontWeight: '600' }}>Om os</p>
              <IoChevronDown style={{ alignSelf: 'end', color: 'white', fontSize: '15px' }}></IoChevronDown>
            </div>

            <div style={{ backgroundColor: '#25ba57', padding: '10px 30px', borderRadius: '34px', display: 'flex', alignItems: 'center', columnGap: '5px' }}>
              <p style={{ margin: '0px', padding: '0px', color: 'white', fontWeight: '600' }}>Ydelser</p>
              <IoChevronDown style={{ alignSelf: 'end', color: 'white', fontSize: '15px' }}></IoChevronDown>
            </div>

            <div style={{ backgroundColor: '#25ba57', padding: '10px 30px', borderRadius: '34px', display: 'flex', alignItems: 'center', columnGap: '5px' }}>
              <p style={{ margin: '0px', padding: '0px', color: 'white', fontWeight: '600' }}>Priser</p>
              <IoChevronDown style={{ alignSelf: 'end', color: 'white', fontSize: '15px' }}></IoChevronDown>
            </div>


            <div style={{ backgroundColor: '#25ba57', padding: '10px 30px', borderRadius: '34px', display: 'flex', alignItems: 'center', columnGap: '5px' }}>
              <p style={{ margin: '0px', padding: '0px', color: 'white', fontWeight: '600' }}>Galleri</p>
              <IoChevronDown style={{ alignSelf: 'end', color: 'white', fontSize: '15px' }}></IoChevronDown>
            </div>
          </div>


          <button style={{ backgroundColor: 'white', border: '1px solid #25ba57', width: '200px', borderRadius: '34px', cursor: 'pointer' }}>
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

          <div style={{ display: 'flex', flexDirection: 'column', rowGap: '10px', alignItems: 'center', justifyContent: 'center', width: '40%' }}>
            <h1 style={{ fontSize: '65px', color: '#25ba57', margin: '0px' }}>Hvor pletfri rengøring kommer til din dør!</h1>
            <p>Vi forstår at virksomheder er forskellige, og på samme måde er deres rengørings behov det også. </p>
            <div style={{ display: 'flex', width: '100%', columnGap: '20px' }}>
              <button style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', backgroundColor: '#25ba57', border: '1px solid #25ba57', width: '200px', padding: '7px 0px', borderRadius: '34px', cursor: 'pointer' }}>
                <p style={{ fontWeight: 800, color: 'white', fontSize: '0.9rem' }}>Bliv kontaktet</p>
              </button>

              <button style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', backgroundColor: 'white', border: 'none', width: '200px', padding: '7px 0px', borderRadius: '34px', cursor: 'pointer' }}>
                <p style={{ fontWeight: 800, color: '#25ba57', fontSize: '0.9rem' }}>Se vores priser</p>
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', rowGap: '10px', width: '60%', justifySelf: 'end' }}>
            <CleaningLady></CleaningLady>
            {/* <CleaningMan /> */}
          </div>

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
              <div style={{ position: 'relative' }}>
                <img alt="blob" src="/blob.svg" style={{ position: 'absolute', zIndex: '-1', height: '100%', width: '100%' }}></img>
                <CleaningLady autoplay={false} loop={false} height={400} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', rowGap: '20px', }}>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <h1 style={{ color: '#25ba57', fontSize: '3rem', margin: 0, fontWeight: 600, }}>Standard</h1>
                  <h1 style={{ color: '#25ba57', fontSize: '2.5rem', margin: 0, fontWeight: 200, marginTop: '-10px' }}>Rengøring</h1>
                </div>
                <p style={{ color: '#555555', textAlign: 'center', width: '80%', margin: '0 auto', }}>Vi tilbyder al form for rengøring. Har dit kontor, hjem, festsal eller andet brug for en god omgang rengøring? Så har du fået fat på de rigtige!</p>

                <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', margin: '20px auto', }}>

                  <div style={{ display: 'flex', flexDirection: 'column', rowGap: '5px' }}>

                    <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                      <IoCheckmarkCircle style={{ fontSize: '20px', color: '#25ba57', }} />
                      <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Køkkener</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                      <IoCheckmarkCircle style={{ fontSize: '20px', color: '#25ba57', }} />
                      <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Toiletter</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                      <IoCheckmarkCircle style={{ fontSize: '20px', color: '#25ba57', }} />
                      <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Soveværelser og stuer</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                      <IoCheckmarkCircle style={{ fontSize: '20px', color: '#25ba57', }} />
                      <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Vinduer</p>
                    </div>

                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', rowGap: '5px' }}>

                    <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                      <IoCheckmarkCircle style={{ fontSize: '20px', color: '#25ba57', }} />
                      <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Tæpper</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                      <IoCheckmarkCircle style={{ fontSize: '20px', color: '#25ba57', }} />
                      <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Indflytninger & Udflytninger</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                      <IoCheckmarkCircle style={{ fontSize: '20px', color: '#25ba57', }} />
                      <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Efter konstrution</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                      <IoCheckmarkCircle style={{ fontSize: '20px', color: '#25ba57', }} />
                      <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Ekstra ydelser</p>
                    </div>

                  </div>

                </div>

                <button style={{ marginTop: '20px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', backgroundColor: '#25ba57', border: '1px solid #25ba57', width: '200px', padding: '7px 0px', borderRadius: '34px', cursor: 'pointer' }}>
                  <p style={{ fontWeight: 800, color: 'white', fontSize: '0.9rem' }}>Få et gratis tilbud</p>
                </button>

              </div>


            </div>
          </div>
          <div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: ' center', }}>

            <div>
              <div style={{ position: 'relative' }}>
                <img alt="blob" src="/blob.svg" style={{ position: 'absolute', zIndex: -1, height: '100%', width: '100%' }}></img>
                <CleaningMan autoplay={false} loop={false} height={400} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', rowGap: '20px', }}>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <h1 style={{ color: '#25ba57', fontSize: '3rem', margin: 0, fontWeight: 600, }}>Kommerciel</h1>
                  <h1 style={{ color: '#25ba57', fontSize: '2.5rem', margin: 0, fontWeight: 200, marginTop: '-10px' }}>Rengøring</h1>
                </div>
                <p style={{ color: '#555555', textAlign: 'center', width: '80%', margin: '0 auto', }}>TRS-rengøring har nogle af de bedste maskiner til kommerciel rengøring. Med mere end 30-års efaring, så er der ikke noget vi ikke kan klare!  </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', margin: '20px auto', }}>

                  <div style={{ display: 'flex', flexDirection: 'column', rowGap: '5px' }}>

                    <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                      <IoCheckmarkCircle style={{ fontSize: '20px', color: '#25ba57', }} />
                      <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Supermarkeder & Butikker</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                      <IoCheckmarkCircle style={{ fontSize: '20px', color: '#25ba57', }} />
                      <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Slagterier</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                      <IoCheckmarkCircle style={{ fontSize: '20px', color: '#25ba57', }} />
                      <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Medicinske faciliteter</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                      <IoCheckmarkCircle style={{ fontSize: '20px', color: '#25ba57', }} />
                      <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Fabrikker</p>
                    </div>

                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', rowGap: '5px' }}>

                    <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                      <IoCheckmarkCircle style={{ fontSize: '20px', color: '#25ba57', }} />
                      <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Restauranter</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                      <IoCheckmarkCircle style={{ fontSize: '20px', color: '#25ba57', }} />
                      <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Offentlige faciliteter</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                      <IoCheckmarkCircle style={{ fontSize: '20px', color: '#25ba57', }} />
                      <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Lagerbygninger</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', }}>
                      <IoCheckmarkCircle style={{ fontSize: '20px', color: '#25ba57', }} />
                      <p style={{ fontWeight: '500', color: '#555555', margin: 0, }}>Festsaler</p>
                    </div>

                  </div>

                </div>


                <button style={{ marginTop: '20px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', backgroundColor: '#25ba57', border: '1px solid #25ba57', width: '200px', padding: '7px 0px', borderRadius: '34px', cursor: 'pointer' }}>
                  <p style={{ fontWeight: 800, color: 'white', fontSize: '0.9rem' }}>Få et gratis tilbud</p>
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
        <div>
          <div className="classContainer" style={{ width: 'fit-content', margin: '0 auto', boxShadow: 'none', marginBottom: '40px', height: 'fit-content', }}>
            <img src="agreement-100.png"></img>
            <h4 style={{ color: '#25ba57', fontSize: '2.5rem', margin: 0, fontWeight: 800, textAlign: 'center', marginTop: '-20px', }}>Grundene til</h4>
            <h4 style={{ color: '#25ba57', fontSize: '2.5rem', margin: 0, fontWeight: 200, marginTop: '-20px', textAlign: 'center', }}>Vores kunder vælger os  </h4>
          </div>

          <div style={{ display: 'flex', width: '100%', alignItems: 'center', jusitifyContent: 'center' }}>
            <div style={{ alignSelf: 'center', width: '100%' }}>
              <SofaBeforeAfter style={{ flex: 1 }} height={300} />
            </div>
          </div>

          <div style={{ width: '100%', backgroundColor: '#fffff', display: 'flex', marginTop: '20px', }}>
            <div style={{ width: '95%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', columnGap: '20px', }}>

              <div className="classContainer">
                <img src="cleaning-100.png"></img>
                <h4 style={{ color: '#25ba57', fontSize: '1.8rem', margin: 0, fontWeight: 800, }}>Over</h4>
                <h4 style={{ color: '#25ba57', fontSize: '1.8rem', margin: 0, fontWeight: 200, marginTop: '-10px' }}>30 års earfaring </h4>
                <div style={{ height: '0.5px', backgroundColor: '#e0e0e0', width: '50%' }} />
                <p style={{ margin: 0, textAlign: 'center', color: '#505050', fontWeight: 400, width: '100%', }}>Vores mikrofiberklude, som fanger støv og snavs i stedet for at flytte rundt på det, holder længere end traditionel bomuld.</p>
              </div>

              <div className="classContainer">
                <img src="agreement-100.png"></img>
                <h4 style={{ color: '#25ba57', fontSize: '1.8rem', margin: 0, fontWeight: 800, }}>100%</h4>
                <h4 style={{ color: '#25ba57', fontSize: '1.8rem', margin: 0, fontWeight: 200, marginTop: '-10px' }}>Tillid & tilfredshed</h4>
                <div style={{ height: '0.5px', backgroundColor: '#e0e0e0', width: '50%' }} />
                <p style={{ margin: 0, textAlign: 'center', color: '#505050', fontWeight: 400, width: '100%', }}>En pengene-tilbage-garanti, også kendt som en tilfredshedsgaranti, hvis en køber ikke er tilfreds med et produkt eller en service.</p>
              </div>

              <div className="classContainer">
                <img src="green-earth-100.png"></img>
                <h4 style={{ color: '#25ba57', fontSize: '1.8rem', margin: 0, fontWeight: 800, }}>Miljøvenlige</h4>
                <h4 style={{ color: '#25ba57', fontSize: '1.8rem', margin: 0, fontWeight: 200, marginTop: '-10px' }}>Rengørings produkter</h4>
                <div style={{ height: '0.5px', backgroundColor: '#e0e0e0', width: '50%' }} />
                <p style={{ margin: 0, textAlign: 'center', color: '#505050', fontWeight: 400, width: '100%', }}>Fordi indendørs forureningsrater typisk er højere end udendørs forureningsrater, tager vi støvfjernelse alvorligt.</p>
              </div>

              <div className="classContainer">
                <img src="green-investment-100.png"></img>
                <h4 style={{ color: '#25ba57', fontSize: '1.8rem', margin: 0, fontWeight: 800, }}>Grøn</h4>
                <h4 style={{ color: '#25ba57', fontSize: '1.8rem', margin: 0, fontWeight: 200, marginTop: '-10px' }}>Investering</h4>
                <div style={{ height: '0.5px', backgroundColor: '#e0e0e0', width: '50%' }} />
                <p style={{ margin: 0, textAlign: 'center', color: '#505050', fontWeight: 400, width: '100%', }}>Invister både i din og jordens hygiejne. Vi prøver både gennem vores produkter og din investering at skabe et bedre sted for vores generation og den næste.</p>
              </div>

            </div>
          </div>

        </div>
      </Page3>

    </>

  );
}

export default App;
