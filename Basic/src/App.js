/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App(){
 
  // let [바뀐제목, 제목안변경] = useState(['여자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [글제목, 제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [좋아요, 좋아요추가] = useState([0,0,0])
  let [날짜, 날짜변경] = useState(['2022-2-17', '2022-2-17', '2022-2-17'])
  let [modal, setModal] = useState(false);
  let [모달제목, 모달제목변경] = useState('')
  let [모달날짜, 모달날짜변경] = useState('')
  let [InputData, setInputData] = useState('')
  let [InputDate, setInputDate] = useState('')
  
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
            <h4 onClick={ () => { 
              setModal(!modal)
              let modaltitle = [...모달제목];
              let modaldate = [...모달날짜];
              modaldate = 날짜[i];
              modaltitle = name;
              모달날짜변경(modaldate)
              모달제목변경(modaltitle)              
              } 
            } >{ name } </h4>
            <button onClick={ () => { 
              let likecopy = [...좋아요];
              likecopy[i] += 1;
              좋아요추가(likecopy)
            }}
              >❤️</button> <span>{좋아요[i]}</span>
            <p>{날짜[i]}</p>
            <button onClick={ () => {
              let copy = [...글제목]
              copy.splice(i,1)
              제목변경(copy)
            }}
            
            >글 삭제</button>

          </div> 
          )
        })
      }
      <div>
      <input onChange={ (e) => {
        setInputData(e.target.value);
      }}
      ></input>
      <input type='date' onChange={ (e) => {
        setInputDate(e.target.value);
      }}
      
      ></input>
      <button onClick={ () => {
        let copy = [...글제목];
        let copy2 = [...좋아요];
        let copy3 = [...날짜];
        InputData == '' ? 제목변경(글제목) : 제목변경(copy);
        InputData == '' ? 좋아요추가(좋아요) : 좋아요추가(copy2);
        InputDate == '' ? 날짜변경(InputDate) : 날짜변경(copy3);
        copy3.unshift(InputDate)
        copy2.unshift(0)
        copy.unshift(InputData)
      }}
      > 글 생성</button>
      </div>
      

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
        모달제목={모달제목}
        모달날짜={모달날짜}
        /> : null
      }

    </div>
  )
}



function Modal(props) {
  return (
    <div className="modal">
      <h4> { props.모달제목 }</h4>
      <p> 날짜 : { props.모달날짜} </p>
      <p>상세내용</p>
      {/* <button
      onClick={() => {
      let changetitle = [...props.글제목];
      changetitle[0] = '여자 코트 추천';
      props.제목변경(changetitle)      
      }}
      >글 수정</button> */}
  </div>
  )
}


export default App;
 