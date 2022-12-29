/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App(){
 
  // let [바뀐제목, 제목안변경] = useState(['여자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [글제목, 제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);

  
  return (
    <div className="App">
      <div className="black-nav">
        <div> React Logo </div>
      </div>

      <button onClick={ () => {
        let 정렬 = [...글제목];
        정렬.sort();
        제목변경(정렬);
      }}> 가나다순 정렬 </button>

      <div className="list">
        <h4>{ 글제목[0] } 
        <button onClick={ () => {
            let copy = [... 글제목];
            copy[0] = '여자 코트 추천';
            제목변경(copy); 
            }}>❤️</button></h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  )
}

export default App;
 