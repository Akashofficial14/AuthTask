import React from 'react'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = () => {
  //jab user login ho rha hai tab uska data jo backend se bheja tha lsd me save kar lege or agar data aagya matlab login hai tabhi wo profie me 
  //direct patrh ke through ja payega warna nhi
  let LSD=JSON.parse(localStorage.getItem("userData"))
  console.log("lsd data is",LSD) 
  if(!LSD) {
    return <Navigate to="/"/>
  }
  return (
  <Outlet/>
  )
}

export default ProtectedRoute
