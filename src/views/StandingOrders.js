import React from "react"

import useData from "../hooks/useData"

const StandingOrders = () => {
  const { standingOrdersData, getUsers } = useData()
  const users = getUsers()

  return (
    <>
      <h2>Standing Orders</h2>
      {users.map(user => (
        <React.Fragment key={user.id}>
          <h3>{user.name}</h3>
          <table>
            <tbody>
              {standingOrdersData
                .filter(item => item.userId === user.id)
                .map(item => (
                  <tr key={item.id}>
                    <td>{item.day}</td>
                    <td>{item.name}</td>
                    <td>{item.amount}</td>
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
