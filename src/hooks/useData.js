import { useContext } from "react"
import { DataContext } from "../context/dataContext"

const useData = () => {
  const contextObject = useContext(DataContext)
  return contextObject
}

export default useData
