"use client"

import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar/index'
import StoreProvider, { useAppSelector } from './redux'

type Props = {}

const DashboardLayout = ({children}:{children:React.ReactNode}) => {
  const isSidebarCollapsed = useAppSelector((state)=>state.global.isSideBarCollapsed,);

  const isDarkMode = useAppSelector((state)=>state.global.isDarkMode,);

  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
  })

  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
        <Sidebar/>
       <main className={`w-full flex flex-col bg-gray-50 dark:bg-dark-bg ${isSidebarCollapsed?"":"md:pl-64"}`}>
        <Navbar />
        {children}
       </main>
    </div>
  )
};

const dashboardWrapper = ({children}:{children:React.ReactNode}) => {
  return(
    <StoreProvider>
    <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  )
}

export default dashboardWrapper