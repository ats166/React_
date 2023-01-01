import { useParams } from "react-router-dom"
import styled from 'styled-components'

function Detail(props) {

  let { detailid } = useParams();
  let idx = props.shoes.find((item) => {
    return (
      item.id == detailid
    )
  })
  let shoesimg = "https://codingapple1.github.io/shop/shoes" + (parseInt(detailid)+1) + ".jpg"
  return (
    <div className="container">
      
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
