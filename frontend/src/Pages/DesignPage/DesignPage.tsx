import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'

interface Props {}

const DesignPage = (props: Props) => {
  return (
    <>
        <h1>FinShark Design Page</h1>
        <h2>this is FinShark design page where we put our design</h2>
        <RatioList/>
        <Table/>
    </>
  )
}

export default DesignPage