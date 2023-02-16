import React  from 'react'
import ExpenseDate from './ExpenseDate'
import "./ExpenseItem.css"
import Card from './Card'
export default function ExpenseItem(props) {
  // const [title,setTitle]=useState(props.title);
  // const titleHandler=()=>{
  //   setTitle("updated")
  // }
  return (
    <li>
    <Card className='expense-item'>
     <div>
        <ExpenseDate date={props.date}/>
     </div>
     <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
     </div>
    
    </Card>
    </li>
  )
}
