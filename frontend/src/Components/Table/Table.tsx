import React from 'react'
import { testIncomeStatementData } from './testData'

type Props = {}

const data = testIncomeStatementData

type Company = (typeof data)[0]



const configs = [ 
    {
    Label : "year",
    render: (company:Company) => company.acceptedDate
},
{
    Label: "Revenue",
    render: (company:Company) => company.revenue
}
]
const Table = (props: Props) => {
    const renderedRows = data.map((company) => {
        return (
            <tr key = {company.cik}>
                {configs.map((val:any) =>  {
                    return <td className = "p-4 whitespace-nowrap text-sm font-normal text-gray-900">{val.render(company)}</td>
                })}
                <td className = "p-4 whitespace-nowrap text-sm font-normal text-gray-900"></td>
            </tr>
        )
    }
);
 const renderedHeaders = configs.map((config:any) => {
    return (
            <th key = {config.Label} scope = "col" className = "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >{config.Label}</th>
    )
 })
  return (
    <div className = "bg-white shadow rounded-lg sm:rounded-md">
        <table>
            <thead className = "min-w-full divide-y divide-gray-200 m-5">{renderedHeaders}</thead>
            <tbody>{renderedRows}</tbody>
        </table>
    </div>
  )
}

export default Table