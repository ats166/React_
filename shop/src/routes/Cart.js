import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeAge } from '../store/userSlice.js'
import { countPlus } from '../Store.js'

function Cart() {

  let cartdata = useSelector((state) => { return state.cartdata })
  let user = useSelector((state) => { return state.user })
  let dispatch = useDispatch()

  return (
    <div>
      <p>{user.name} 의 장바구니 {user.age}</p>
      <button onClick={() => {
        dispatch(changeAge())
      }} > + </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            cartdata.map(function (data,i){
              return (
                <tr key={i}>
                  <td> {data.id}</td>
                  <td> {data.name} </td>
                  <td> {data.count} </td>
                  <td> <button onClick={() => {
                    dispatch(countPlus(data.id))
                  }}> + </button> </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Cart