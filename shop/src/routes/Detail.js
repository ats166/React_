import { useParams } from "react-router-dom"

function Detail(props) {

  let { detailid } = useParams();
  return (
    props.shoes.map((a,i) => {
      console.log(detailid,a.id)
      return (
        (detailid == a.id) ? <Item key={i}/> : <Null key={i}/>
      )
    })
  )
}

function Item(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[0]}</h4>
          <p>{props.shoes[0]}</p>
          <p>{props.shoes[0]}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
}

function Null(props) {
  return (
    <div>
      찾으시는 정보가 없습니다.
    </div>
  )
}


export default Detail
