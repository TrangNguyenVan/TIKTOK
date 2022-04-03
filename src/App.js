import {useState}  from 'react';
import UseState from './UseState';
import TwoWayBinding from './TwoWayBinding';
import Content from './Content';
import UseEffectDOM from './UseEffectDOM';
import TimerEffect from './TimerEffect';
import CleanupEfffect from './CleanupEfffect';
import ChatAppEffect from './ChatAppEffect';
import Jobs from './Job';
import  {BasicTable}  from './ComponentTable/BasicTable';
import { SortingTable } from './ComponentTable/SortingTable';

const gifts = [
  'RealMadrid',
  'Machester United',
  'Bayern Muchen'
];


function App() {
 
// const [show, setShow] =useState(false);
  return(
    <div style={{padding:20}}>
      {/* <button onClick={()=>setShow(!show)}>Toggel</button> */}
      {/* {show && <Content/>} */}
      {/* {show &&<UseState/> } */}
      {/* {show && <TwoWayBinding/>} */}
      {/* {show && <UseEffectDOM/>} */}
      {/* {show && <TimerEffect/>} */}
      {/* {show && <CleanupEfffect/>} */}
      {/* <ChatAppEffect/> */}
      
      {/* <Jobs/> */}
      {/* <BasicTable/> */}
      <SortingTable/>

    </div>
  )
}
export default App;

// UseState

  /*
  const [counter,setCounter] = useState(1);
  const handleCounter =() => {
    setCounter(counter+1);
  }
  return (
    <div className="App" style={{padding:20}}>
      <h1>{counter}</h1>
      <button onClick={handleCounter}>Increase Counter</button>
    </div>
  );
  */
 
    /*
  const [info,setInfo] = useState({
    name : 'Nguyen Van A',
    age: 18,
    addr : 'Nam Dinh'
  });
  const handleInfo =() => {
    setInfo({
      ...info,
      bio : 'Real Madrid'
    })
  };
  return(
    <div className="App" style={{padding :20}}>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleInfo}>Update</button>
    </div>
  ) 
  */

  /*
  const [counter,setCounter] = useState(1);
  const handleDem=() => {
    setCounter(counter +1);
  };

  return (
    <div className='App' style={{padding:20}}>
      <h1>{counter}</h1>
      <button onClick={handleDem}>Click</button>
    </div>
  )*/

  //gift
  /*const [gift,setGift] = useState();
  const randomGift =() =>{
    const index = Math.floor(Math.random() * gifts.length)

    setGift(gifts[index]);
  };
   return(
    <div className='App' style={{padding:20}}>
      <h1>
       {gift || 'Nothing...'}
      </h1>
      <button onClick={randomGift}>Change</button>
    </div>
  )
  */


