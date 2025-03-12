import React from 'react'

function 
Header() {
  return (
    <div style={{display:"flex",alignItems:"center", justifyContent:"space-between", margin:"20px 50px", fontWeight:"600",fontSize:"16px"}}>
        <div style={{display:"flex" ,alignItems:"center", gap:"30px"}}>
            <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
            <span style={{fontSize:"24px"}}>GeekFoods</span>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between", gap:"30px"}}>
            <span>Home</span>
            <span>Quote</span>
            <span>Resturants</span>
            <span>Foods</span>
            <span>Contact</span>
        </div>
        <div style={{display:"flex",alignItems:"center",fontSize:"14px",padding:"10px 20px",borderRadius:"10px", backgroundColor:"rgb(30,64,175)",color:"white",fontWeight:"700"}}>
            <span>Get started</span>
        </div>
    </div>
  )
}

export default Header


