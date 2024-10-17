import React from 'react'
import Card from './Card';
import Chart1 from '../Dashboard/Chart1'
import Table from '../Dashboard/Table'

const Dashboard = () => {
  // const Menus = [
  //   { totalCars: "100 Cars", icon: <IoCarSport className='text-3xl'/> },
  //   { totalRequests: "300", icon: <VscGitPullRequestGoToChanges className='text-3xl'/>},
  //   { approvedRequests: "2000", icon: <FcApprove className='text-3xl'/> },
  //   { rejectedRequests: "2500", icon: <FcDisapprove className='text-3xl'/> },
  // ];

  const stat =  { 
    totalCars: "100",
    totalRequests:"100",
    approvedRequests:"100",
    rejectedRequests:"100"
  }
  
  return (
    <div className='w-full px-4 py-2 flex flex-col space-y-10'>
       <Card stat = {stat}/>
       <div className="">
        <Table/>
       </div>
    </div>
  )
}

export default Dashboard
