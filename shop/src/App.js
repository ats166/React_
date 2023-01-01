import './App.css';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import data from './data.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.js'

function App() {

  let [shoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">쇼핑몰이름</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<div>
          <div className='main-bg'></div>

          <div className="container">
            <div className="row">
              {
                shoes.map(function (name, i) {
                  return (
                    <Item
                      shoes={shoes}
                      i={i}
                      key={i}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>} />
        < Route path="/detail/:detailid" element={<Detail shoes={shoes} />} />
        < Route path="*" element={<div> 없는 페이지 </div>} />

        <Route path="/event" element={<div> <h3> 오늘의 이벤트 </h3> <Outlet></Outlet></div>}>
          <Route path="one" element={<div> <h5> 첫 주문시 양배추즙 서비스 </h5></div>}/>
          <Route path="two" element={<div> <h5> 생일기념 쿠폰받기 </h5></div>}/>
        </Route>
      </Routes >

    </div>
  );
}

function Item(props) {
  // let [shoes] = useState(data)
  let shoesimg = './shoes' + (props.i + 1) + '.png'
  return (
    <div className="col-md-4" key={props.i}>
      <img src={shoesimg} width='80%' />
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].content}</p>
    </div>
  )
}

export default App;
