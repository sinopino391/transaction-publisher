import React from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="flex justify-center mt-4">
      <ul>
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
    </div>
  );
}

export default App;
