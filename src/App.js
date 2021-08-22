// Libs
import { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"

// Views
import Overview from "./views/Overview"
import StandingOrders from "./views/StandingOrders"
import Transactions from "./views/Transactions"
import useData from "./hooks/useData"

function App() {
  const {
    state: { usersState }
  } = useData()

  const [usersTotal, setUsersTotal] = useState(0)

  useEffect(() => {
    let total = 0
    usersState.forEach(user => {
      total = total + user.balance
    })

    setUsersTotal(total)
  }, [])

  return (
    <div className="App">
      <header className="Header">
        <h1>Finance App</h1>
        <div className="balance">
          {usersState.map(user => (
            <div className="user-balance">
              {user.name} £{user.balance.toFixed(2)}
            </div>
          ))}
          <div className="users-total">Total £{usersTotal.toFixed(2)}</div>
        </div>
      </header>
      <aside className="Aside">
        <nav>
          <ul>
            <li>
              <a href="/">Overview</a>
            </li>
            <li>
              <a href="/transactions">Transactions</a>
            </li>
            <li>
              <a href="/standing-orders">Standing Orders</a>
            </li>
            <li>
              <a href="#">Monthly Costs</a>
            </li>
            <li>
              <a href="#">Savings</a>
            </li>
            <li>
              <a href="#">Debt</a>
            </li>
            <li>
              <a href="#">Statistics</a>
            </li>
            <li>
              <a href="#">Account Settings</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="Content">
        <Switch>
          <Route exact path="/">
            <Overview />
          </Route>
          <Route exact path="/transactions">
            <Transactions />
          </Route>
          <Route exact path="/standing-orders">
            <StandingOrders />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
