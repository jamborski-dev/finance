import React from "react"

import useData from "../hooks/useData"

const StandingOrders = () => {
  const { state: { standingOrdersState, usersState } } = useData()

  return (
    <>
      <h2>Standing Orders</h2>
      {usersState.map(user => (
        <React.Fragment key={user.id}>
          <h3>{user.name}</h3>
          <table>
            <tbody>
              {standingOrdersState
                .filter(item => item.userId === user.id)
                .map(item => (
                  <tr key={item.id}>
                    <td>{item.day}</td>
                    <td>{item.name}</td>
                    <td>£{parseInt(item.amount).toFixed(2)}</td>
                    <td>{item.repeat}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </React.Fragment>
      ))}
    </>
  )
}

export default StandingOrders
