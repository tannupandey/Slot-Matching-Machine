import React from 'react';
import SlotM from './SlotMatch';

const App = () =>{
return <>
    <h1 className="heading_style"> 🎰 Welcome to <span>
     </span> <span style={{fontWeight:'bold'}}> Slot machine</span> 🎰</h1>
    
    <div className='slot_box'>
    <SlotM x='😀' y='😀' z='😀'/>
    <SlotM x='❤️' y='❤️' z='⭐'/>
    <SlotM x='💃' y='💃' z='💃'/>
    <SlotM x='🧑‍🎄' y='🧑‍🎄' z='🔥'/>
    </div>
    </>
   

};
export default App;