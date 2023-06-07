
import './App.css';
import { FaTrashAlt } from "react-icons/fa";
import avtaar1 from "./Assets/avtaar1.png";
import Avatar2 from "./Assets/Avatar2.png";
import Avatar3 from "./Assets/Avatar3.png";
import Avatar4 from "./Assets/Avatar4.png";

import { useEffect, useState } from 'react';
import Todo from './Todo';

// to get the data from local storage
const getLocalItems = () => {
  let list = localStorage.getItem('lists');

  if (list) {
    return JSON.parse(localStorage.getItem('lists'));
  }
  else {
    return [];
  }
}

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState(getLocalItems());
   const [state, setState] = useState([]);

  const itemevent = (e) => {
    setInputList(e.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList('');
  };

  const deleteitems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  }


  // delete all 


//    let deleteall = () => {
//            this.state.items = '';
//          this.setState({
//       items: []
//  }); 
//       }

  // Add local storage

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(items))
  }, [items]);


  return (
    <div className="App">
      <div className="container">
        <section>
          <p className='task'>Task Details</p>
          <br></br>
          <div className='title'>Task title</div>
          <h2>NFT Web App Prototype</h2>
          <p className="decs">Description</p>
          <p className='last'>Last year was a fantastic year for NFTs, with the market reaching a $40 billion valuation for the first time. In addition, more than $10 billion worth of NFTs are now sold every week – with NFT..</p>

          <div className=" img flex ml-10 mt-4 lmd:mt-2">
              <span className="img1 z-1">
                <img src={avtaar1} alt="" className=" w-12" />
              </span>
              <span className="img2  z-1">
                <img src={Avatar2} alt="" className=" w-12" />
              </span>
              <span className="img3  z-1">
                <img src={Avatar2} alt="" className=" w-7" />
              </span>
              <span className="img4 z-1">
                <img src={Avatar4} alt="" className=" w-12" />
              </span>
             
              {/* <div className=" left-[-10px] ml-[-18px] z-1 w-12 h-12 rounded-full bg-[#5871D7] text-[14px] text-white flex items-center justify-center leading-[12px]">
                +100
              </div> */}
            </div>

          <div className='list'>Task List
            <FaTrashAlt className='icon'  />
          </div>



          <ol>
            {/* <li><input type="checkbox"/>{inputList} buy apple</li> */}
            {items.map((itemval, index) => {
              return <Todo key={index} id={index} text={itemval} onselect={deleteitems} />
            })}
          </ol>

          <div class="parent">
            <button onClick={listOfItems}> + </button>

            <input type="text" placeholder='Add a Items'
              value={inputList}
              onChange={itemevent} />
          </div>

        </section>
      </div>

    </div>
  );
}

export default App;
