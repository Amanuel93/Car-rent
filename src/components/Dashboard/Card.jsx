import React from 'react'
import { IoCarSport } from "react-icons/io5";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { FcApprove } from "react-icons/fc";
import { FcDisapprove } from "react-icons/fc";

const Card = ({stat}) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
      {/* Total cars */}
      <div className="flex justify-around shadow-2xl bg-gray-800 py-2 text-white rounded-lg">
        <div className="md:text-[60px] text-[30px]">
          <IoCarSport/>
        </div>
        <div className="flex flex-col">
          <h1 className='font-bold md:text-[24px] text-12px'>{stat.totalCars}</h1>
          <p className='font-bold md:text-[22px] text-[16px]'>Cars</p>
        </div>
      </div>

      {/* Total requests */}
      <div className="flex justify-around shadow-2xl bg-gray-800 py-2 text-white rounded-lg">
        <div className="md:text-[60px] text-[30px]">
          < VscGitPullRequestGoToChanges />
        </div>
        <div className="flex flex-col">
          <h1 className='font-bold md:text-[24px] text-12px'>{stat.totalRequests}</h1>
          <p className='font-bold md:text-[22px] text-[16px]'>Requests</p>
        </div>
      </div>

      {/* Approved requests */}
      <div className="flex justify-around shadow-2xl bg-gray-800 py-2 text-white rounded-lg">
        <div className="md:text-[60px] text-[30px]">
          <FcApprove/>
        </div>
        <div className="flex flex-col">
          <h1 className='font-bold md:text-[24px] text-12px'>{stat.approvedRequests}</h1>
          <p className='font-bold md:text-[22px] text-[16px]'>Approved</p>
        </div>
      </div>

       {/* Rejected requests */}
      <div className="flex justify-around shadow-2xl bg-gray-800 py-2 text-white rounded-lg">
        <div className="md:text-[60px] text-[30px]">
          <FcDisapprove/>
        </div>
        <div className="flex flex-col">
          <h1 className='font-bold md:text-[24px] text-12px'>{stat.rejectedRequests}</h1>
          <p className='font-bold md:text-[22px] text-[16px]'>Rejected</p>
        </div>
      </div>
    </div>
  )
}

export default Card
