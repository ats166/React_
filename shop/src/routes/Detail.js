import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { Nav } from 'react-bootstrap'
import { cartPlus } from '../Store.js'
import { useDispatch } from 'react-redux'
// import styled from 'styled-components'

function Detail(props) {

  let [divshow, setDivshow] = useState(1);
  let [tab, setTab] = useState(0);
  let [count, setCount] = useState(0);
  let { detailid } = useParams();
  let dispatch = useDispatch()
  let navigate = useNavigate();

  let idx = props.shoes.find((item) => {
    return (
      Number(item.id) === Number(detailid)
    )
  })
  let shoesimg = "https://codingapple1.github.io/shop/shoes" + (parseInt(detailid) + 1) + ".jpg"

  useEffect(() => {
    let timer = setTimeout(() => {
      setDivshow(0);
    }, 2000)
    return () => {
      clearTimeout(timer)
      setDivshow(1);
    }
  }, [count])

  return (
    <div className="container">
      {divshow ? <div className="alert alert-warning"> 2초 이내 구매시 할인 </div> : null}
      {count}
      <button onClick={() => { setCount(count + 1) }}>버튼</button>
      <div className="row"> 
        <div className="col-md-6">
          <img src={shoesimg} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{idx.title}</h4>
          <p>{idx.content}</p>
          <p>{idx.price}</p>
          <button className="btn btn-danger" onClick={() => {
            dispatch(cartPlus(idx))
          }}>주문하기</button>
          <Nav.Link onClick={() => { navigate('/cart') }}>장바구니</Nav.Link>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey={`link${tab}`}>
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => { setTab(0) }}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={() => { setTab(1) }}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={() => { setTab(2) }}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      {tab === 0 ? <div>내용0</div> : null}
      {tab === 1 ? <div>내용1</div> : null}
      {tab === 2 ? <div>내용2</div> : null}
    </div>


  )
}

function TabContent(props){
  if (props.tab === 0){
    return <div>내용0</div>
  }
  if (props.tab === 1){
    return <div>내용1</div>
  }
  if (props.tab === 2){
    return <div>내용2</div>
  }
}


export default Detail
