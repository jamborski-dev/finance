import { useState } from "react"
import useData from "../hooks/useData"
import TransactionForm from "../components/TransactionForm"

const Transactions = () => {
  const {
    state: { transactionsState, categoriesState, usersState },
    actions: { getCategoryName, getUserName }
  } = useData()

  const [showTransactionForm, setTransactionForm] = useState(true)

  const hideForm = () => {
    setTransactionForm(false)
  }

  return (
    <>
      <h2>Transactions List</h2>
      <header className="table-tools">
        <button className="table-tool" onClick={() => setTransactionForm(true)}>
          Add
        </button>
        <button className="table-tool" disabled>
          Edit
        </button>
        <button className="table-tool" disabled>
          Delete
        </button>
        <div className="form-group">
          <label htmlFor="sorting">Sort by</label>
          <select name="sorting">
            <option value="date">date</option>
            <option value="user">user</option>
            <option value="transaction-value">value</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="user-filter">Show</label>
          <select name="user-filter">
            <option value="all">All</option>
            <option value="rob">Rob</option>
            <option value="zuza">Zuza</option>
          </select>
        </div>
      </header>
      {showTransactionForm && <TransactionForm hideForm={hideForm} />}
      <table>
        <thead>
          <tr>
            <td></td>
            <td>Date</td>
            <td>Name</td>
            <td>Who</td>
            <td>Value</td>
            <td>Category</td>
          </tr>
        </thead>
        <tbody>
          {transactionsState.map(item => (
            <tr key={item.id}>
              <td>
                <input type="checkbox" name={item.id} />
              </td>
              <td>29/03/2021</td>
              <td>{item.name}</td>
              <td>{getUserName(item.userId)}</td>
              <td
                className={`${
                  item.type === "expense" ? "transaction-type--expense" : "transaction-type--income"
                }`}
              >
                <span className="transaction-sign">{item.type === "expense" ? "-" : "+"}</span> £
                {item.value}
              </td>
              <td>{getCategoryName(item.categoryId)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Transactions
