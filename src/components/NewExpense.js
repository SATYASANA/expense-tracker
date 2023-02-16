import React,{useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
export default function NewExpense(props) {
  const [isediting,setIsediting] = useState(false)
  const startEditingHandler=()=>{
    setIsediting(true)
  }
  const stopEditingHandler=()=>{
    setIsediting(false)
  }
const saveExpenseDataHandler=(enteredExpenseData)=>{
 
  const expenseData={
    ...enteredExpenseData,
    id:Math.random.toString()
  }
  
 props.onAddExpense(expenseData)
}

  return (
    <div className='new-expense'>
    {!isediting&&<button onClick={startEditingHandler}>Add New Expenses</button>}
      {isediting&&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  )
}
