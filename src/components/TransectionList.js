import { useContext } from "react"
import { GlobalContext } from "../ContextAPI/GlobalContext"
import { Transaction } from "./Transaction"

export const TransectionList = () => {

  const { transaction } = useContext(GlobalContext)
  // console.log(context)
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {
          transaction.map((trans) => <Transaction key={trans.id} {...trans} />)
        }

      </ul>
    </>
  )
}