import './App.css';
import { IoChevronDown } from 'react-icons/io5';
function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', alignItems: 'center', height: '30px', padding: '10px', backgroundColor: '#247ffb1a', }}>
        <p style={{ margin: 0, fontSize: '0.875rem', paddingLeft: '40px' }}>Ring til os og få et tilbud. tlf: +45 26 34 24 74 </p>
      </div>
      <div style={{ display: 'flex', columnGap: '30px', alignItems: 'center', fontWeight: '600', color: 'white', width: '80%', margin: '0 auto', }}>
        <img style={{ marginRight: '60px' }} src="/trs-logo-2.png"></img>
        <div style={{ columnGap: '10px', padding: '10px 15px', backgroundColor: '#247ffb', borderRadius: '30px', display: 'flex', alignItems: 'center' }}>
          <p style={{
            margin: 0, fontSize: '0.875rem'
          }}>Hjem</p>
          <IoChevronDown style={{ alignSelf: 'end' }} />
        </div>

        <div style={{ columnGap: '10px', padding: '10px 15px', backgroundColor: '#247ffb', borderRadius: '30px', display: 'flex', alignItems: 'center' }}>
          <p style={{
            margin: 0, fontSize: '0.875rem'
          }}>Om os</p>
          <IoChevronDown style={{ alignSelf: 'end' }} />
        </div>

        <div style={{ columnGap: '10px', padding: '10px 15px', backgroundColor: '#247ffb', borderRadius: '30px', display: 'flex', alignItems: 'center' }}>
          <p style={{
            margin: 0, fontSize: '0.875rem'
          }}>Ydelser</p>
          <IoChevronDown style={{ alignSelf: 'end' }} />
        </div>


        <div style={{ columnGap: '10px', padding: '10px 15px', backgroundColor: '#247ffb', borderRadius: '30px', display: 'flex', alignItems: 'center' }}>
          <p style={{
            margin: 0, fontSize: '0.875rem'
          }}>Priser</p>
          <IoChevronDown style={{ alignSelf: 'end' }} />
        </div>

        <button style={{ justifySelf: 'end', padding: '15px 30px', borderRadius: '34px', border: 'none', fontSize: '0.9rem', fontWeight: '700', color: '#333', backgroundColor: 'yellow' }}>Anmod om et tilbud</button>
      </div>
    </div>
  );
}

export default App;
