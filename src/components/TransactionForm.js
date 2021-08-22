import { useForm } from "react-hook-form"
import useData from "../hooks/useData"

const TransactionForm = ({ hideForm }) => {
  const { register, handleSubmit } = useForm()
  const {
    state: { categoriesState, usersState },
    actions: { addTransaction }
  } = useData()

  const onFormSubmit = formData => {
    addTransaction(formData)
  }

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      id="add-transaction-form"
    >
      <h4>Add new transaction</h4>
      <div
      className="add-transaction-form"
      >

      <div className="form-group">
        <label htmlFor="datetime">Date/Time</label>
        <input type="datetime-local" {...register("datetime")} id="datetime" required />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" {...register("name")} placeholder="Dinner shopping.. " id="name" defaultValue="" />
      </div>
      <div className="form-group">
        <label htmlFor="who">Who</label>
        <select {...register("who")} id="who" required>
          {usersState.map(item => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
        <div className="radio-group">
          <span>
            <input id="expense" {...register("type", { required: true })} type="radio" value="expense" />
            <label htmlFor="type">Expense</label>
          </span>
          <span>
            <input id="income" {...register("type", { required: true })} type="radio" value="income" />
            <label htmlFor="income">Income</label>
          </span>
      </div>
      <div className="form-group">
        <label htmlFor="value">Value (£)</label>
        <input type="number" {...register("value")} id="value" min="0.01" step="0.01" required />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select {...register("category")} id="category">
          {categoriesState.map(item => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      </div>
      <div className="btn-group">
        <button type="submit">Save</button>
        <button type="button" disabled>
          Clear
        </button>
        <button type="button" onClick={() => hideForm()}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default TransactionForm
