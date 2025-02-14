import { on } from 'events'
import React, { SyntheticEvent } from 'react'

interface Props  {
    onPortfolioCreate: (e: SyntheticEvent) => void
    symbol: string
}

const AddPortfolio = (props: Props) => {
  return (
    <div>
        <form onSubmit={props.onPortfolioCreate}>
            <input readOnly = {true} hidden = {true} value={props.symbol} />
            <button type="submit" className="p-2 px-8 text-white bg-darkBlue rounded-lg hover:opacity-70 focus:outline-none">
              Add
            </button>
        </form>
    </div>
  )
}

export default AddPortfolio