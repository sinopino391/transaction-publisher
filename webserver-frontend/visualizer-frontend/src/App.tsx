import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {

  useEffect(() => {
    const interval = setInterval(() => {
      addItem();
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  function addItem() {
    const listel = document.createElement("li");
    listel.className = 'border-4 mt-4 p-4 h-16 flex';
    listel.innerHTML = `<span class='bg-yellow-400 rounded-full px-2 text-gray-100 font-bold '>17:30</span>
    <span>
      <img src="./logo_avec.png" class="max-h-4 inline-block ml-2 pr-2" />
    </span>
    <span class='pr-4'>
      avec 24/7 Hardplatz
    </span>
    <span class="font-bold ml-auto">
      15,30 CHF
    </span>`;
    listel.classList.add("opacity-0", "transition-opacity", "duration-1000", "ease-in-out");
    const liste = document.getElementById("liste");
    liste?.prepend(listel);
    setTimeout(function () {
      listel.classList.remove("opacity-0");
    }, 500);
    if (liste.childNodes.length > 8) {
      let last = liste.lastChild;
      last?.classList.add("opacity-0", "transition-opacity", "duration-1000", "ease-in-out");
      setTimeout(() => {
        liste?.removeChild(last);
      }, 1000);
    }
  }


  return (
    <div className="flex justify-center mt-4 border-4">
      <ul id="liste">
        <li className="border-4 mt-4 p-4 h-16 flex">
          <span className='bg-yellow-400 rounded-full px-2 text-gray-100 font-bold '>17:30</span>
          <span>
            <img src="./logo_avec.png" className="max-h-4 inline-block ml-2 pr-2" />
          </span>
          <span className='pr-4'>
            avec 24/7 Hardplatz
          </span>
          <span className="font-bold ml-auto">
            15,30 CHF
          </span>
        </li>
        <li className="border-4 mt-4 p-4 h-16 hover:bg-gray-400 flex">
          <span className='bg-yellow-400 rounded-full px-2 text-gray-100 font-bold'>17:28</span>
          <span>
            <img src="./logo_avec.png" className="max-h-4 inline-block ml-2 pr-2" />
          </span>
          <span className="pr-4">
            avec box Oberohringen
          </span>
          <span className='font-bold ml-auto'>
            20,00 CHF
          </span>
        </li>
        <li className="border-4 mt-4 p-4 h-16 hover:bg-gray-400 flex">
          <span className='bg-yellow-400 rounded-full px-2 text-gray-100 font-bold'>17:28</span>
          <span>
            <img src="./logo_avec.png" className="max-h-4 inline-block ml-2 pr-2" />
          </span>
          <span className="pr-4">
            avec box Oberohringen
          </span>
          <span className='font-bold ml-auto'>
            20,00 CHF
          </span>
        </li>
        <li className="border-4 mt-4 p-4 h-16 hover:bg-gray-400 flex">
          <span className='bg-yellow-400 rounded-full px-2 text-gray-100 font-bold'>17:28</span>
          <span>
            <img src="./logo_avec.png" className="max-h-4 inline-block ml-2 pr-2" />
          </span>
          <span className="pr-4">
            avec box Oberohringen
          </span>
          <span className='font-bold ml-auto'>
            20,00 CHF
          </span>
        </li>
      </ul>
      <div id="button" className='flex justify-right'>
      </div>
    </div>
  );
}

export default App;
