/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App(){
 
  // let [바뀐제목, 제목안변경] = useState(['여자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [글제목, 제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [좋아요, 좋아요추가] = useState([0,0,0])
  let [modal, setModal] = useState(false);
  
  return (
    <div className="App">
      <div className="black-nav">
        <div> React Logo </div>
      </div>

      {/* <button onClick={ () => {
        let 정렬 = [...글제목];
        정렬.sort();
        제목변경(정렬);
      }}> 가나다순 정렬 </button> */}

      {
        글제목.map(function(name, i) {
          return (
          <div className="list" key={i}>
            <h4 onClick={ () => { setModal(!modal)} } >{ name } </h4>
            <button onClick={ () => { 
              let likecopy = [...좋아요];
              likecopy[i] += 1;
              좋아요추가(likecopy)
            }}
              >❤️</button> <span>{좋아요[i]}</span>
            <p>2월 17일 발행</p>

          </div> 
          )
        })
      }

      {/* <div className="list">
        <h4>{ 글제목[0] } 
        <button onClick={ () => { 좋아요추가(좋아요+1)}}>❤️</button> <span>{좋아요}</span></h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={ () => { setModal(!modal)} } >{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        modal ? <Modal
        글제목={글제목}
        글제목변경={글제목변경}
        /> : null
      }

    </div>
  )
}



function Modal(props) {
  return (
    <div className="modal">
      <h4> { props.글제목[0] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
      onClick={() => {
        props.글제목변경() =>
      }}
      >글 수정</button>
  </div>
  )
}


export default App;
 