import { createContext, useState } from "react"

import { transactions } from "../data/transactions"
import { categories } from "../data/categories"
import { standingOrders } from "../data/standing-orders"
import { users } from "../data/users"

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [transactionsState, setTransactions] = useState(transactions.data)
  const [standingOrdersState, setStandingOrders] = useState(standingOrders.data)
  const [categoriesState, setCategories] = useState(categories.data)
  const [usersState, setUsersData] = useState(users.data)

  const getCategoryName = _categoryId => {
    const category = categoriesState.filter(item => item.id === _categoryId)
    return category[0].name
  }

  const getUserName = _userId => {
    const user = usersState.filter(item => item.id === _userId)
    return user[0].name
  }

  const addTransaction = _data => {
    setTransactions(prevState => [
      ...prevState,
      {
        id: prevState.length + 1,
        name: _data.name,
        type: _data.type,
        userId: parseInt(_data.who),
        categoryId: parseInt(_data.category),
        value: _data.value
      }
    ])
  }

  return (
    <DataContext.Provider
      value={{
        state: {
          transactionsState,
          categoriesState,
          standingOrdersState,
          usersState
        },
        actions: {
          getCategoryName,
          getUserName,
          addTransaction
        }
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
