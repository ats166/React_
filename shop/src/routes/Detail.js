import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
// import styled from 'styled-components'

function Detail(props) {

  let [divshow, setDivshow] = useState(1);
  let [count, setCount] = useState(0);
  let { detailid } = useParams();
  let idx = props.shoes.find((item) => {
    return (
      Number(item.id) === Number(detailid)
    )
  })
  let shoesimg = "https://codingapple1.github.io/shop/shoes" + (parseInt(detailid) + 1) + ".jpg"

  useEffect(() => {
    setTimeout(() => {
      setDivshow(0);
    }, 2000,[])
  })


  return (
    <div className="container">
      {divshow ? <div className="alert alert-warning"> 2초 이내 구매시 할인 </div> : null}
      <button onClick={() => { setCount(count + 1) }}>버튼</button>
      <div className="row">
        <div className="col-md-6">
          <img src={shoesimg} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{idx.title}</h4>
          <p>{idx.content}</p>
          <p>{idx.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
}


export default Detail
