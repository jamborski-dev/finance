import { useState } from "react"
import MUIDataTable from "mui-datatables"

import useData from "../hooks/useData"
import TransactionForm from "../components/TransactionForm"
import { users } from "../data/users"

const Transactions = () => {
  const {
    state: { transactionsState },
    actions: { getCategoryName, getUserName, getUserColor }
  } = useData()

  const [showTransactionForm, setTransactionForm] = useState(false)


  const options = {
    filterType: 'checkbox',
  }

  const columns = [
    { 
      name: "date",
      label: "Date",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return "20/03/2021"
        }
      }
    },
    { 
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      }
    },
    { 
      name: "userId",
      label: "Who",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          const userName = getUserName(value)
          const userColor = getUserColor(value)
          return <div className={`user-name user-dot user-dot__${userColor}`}>{userName}</div>
        }
      }
    },
    { 
      name: "value",
      label: "Value",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          const nf = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })

          return <span className={value > 0 ? 'transaction-type--income' : 'transaction-type--expense'}>{nf.format(value)}</span>
        }
      }
    },
    { 
      name: "categoryId",
      label: "Category",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return getCategoryName(value)
        }
      }
    },
  ]

  const hideForm = () => {
    setTransactionForm(false)
  }

  return (
    <>
      <header className="table-tools">
        <button className="table-tool" onClick={() => setTransactionForm(true)}>
          Add transaction
        </button>
        <button className="table-tool" disabled>
          Edit selected
        </button>
      </header>
      {showTransactionForm && <TransactionForm hideForm={hideForm} />}
      <MUIDataTable
        title={"Transactions List"}
        data={transactionsState}
        columns={columns}
        options={options}
      />
    </>
  )
}

export default Transactions
