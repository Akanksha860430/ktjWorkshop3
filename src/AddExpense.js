import React from 'react'
import  {useState} from 'react'
export default function AddExpense() {
    const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
 
  
  const [expenses, setExpenses] = useState([]);
  const handleTextChange=(event)=>{
    setText(event.target.value)
  }
  const handleAmountChange=(event)=>{
    setAmount(event.target.value)
  }
  const handleCategoryChange = (event, category) => {
    event.preventDefault();
    setCategory(category);
  };
  
  const handleSubmit = (event) => {
    console.log({ text, amount, category });
    event.preventDefault();
    if (!text || !amount || !category) {
        alert("Please fill out all fields.");
        return;
      }
    const newExpense = {
      id: new Date().getTime(), // unique id for the expense
      text,
      amount,
      category,
      date: new Date().toLocaleString(),
    };
      setExpenses([...expenses, newExpense]);
      setText('');
      setAmount('');
      setCategory('');
  };
  const handleDelete = (id) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(updatedExpenses);
  };
  const calculateTotalExpenses = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  return (
  <div>
    <div className="AddExpense">
       <h2>Add New Expense</h2>
 <div className="str">
       <div className="dropdown">
    <button className="dropbtn">Category</button>
   
    <div className="dropdown-content">
            <a href="/" onClick={(e) => handleCategoryChange(e, 'Stationary')}>Stationary</a>
            <a href="/" onClick={(e) => handleCategoryChange(e, 'Food')}>Food</a>
            <a href="/" onClick={(e) => handleCategoryChange(e, 'Trip')}>Trip</a>
            </div>
  </div> 
  <label htmlFor="description">Description:</label>
      <input type="text" id="description" value={text} onChange={handleTextChange} name="description" placeholder="Enter description"/>

      <label htmlFor="amount">Amount:</label>
      <input type="number" id="amount" name="amount" value={amount} onChange={handleAmountChange} placeholder="Enter amount"/>
      </div>
      <form>
         <div className="dropbtn" onClick={handleSubmit} >Submit</div>
   
    </form> 
    </div>
   <div className="ExpenseList">
<h2>Expense List</h2>
<br />
<div className="list">
    
      {expenses.map(expense => (
        <div className="list-preview" key={expense.id} >
          <h3>{ expense.category }</h3>
          <p>Expense: INR {expense.amount}</p>
          <p>About Expense: { expense.text }</p>
        <p>{expense.date}</p>

          <button onClick={() => handleDelete(expense.id)}>Delete</button>
        </div>
      ))}
    </div>
  <h3>Total Expenses: INR {calculateTotalExpenses()}</h3>
   </div>
    </div>
  )
}
