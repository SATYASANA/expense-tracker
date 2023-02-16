import React, { useState } from 'react'
import "./expenses.css"
import Card from './Card'

import ExpensesList from './ExpensesList'
import ExpenseFilter from '../ExpenseFilter'
import ExpensesChart from './ExpensesChart'
export default function Expenses(props) {
  const [filteredYear,setFilteredYear]=useState('2020')
  const filterChangeHandler=(selectedYear)=>{
   
    setFilteredYear(selectedYear)
  }
const expenseFilteredYear=props.item.filter(expense=>{
  return expense.date.getFullYear().toString()===filteredYear
})


  return (
    <div>
    <Card className='expenses'>
    <ExpenseFilter defaultYear={filteredYear} onChangeFilter={filterChangeHandler}/>
    <ExpensesChart expenses={expenseFilteredYear}/>
    <ExpensesList items={expenseFilteredYear}/>
    </Card>
    </div>
  )
}
