import React,{ useState } from 'react'
import Data from './Data.js'

function Restaurants() {
    const [enteredKey, setEnteredKey] = useState("");
    const [rating, setRating] = useState(0)
    const filterResta = Data.filter((obj)=>
        obj.name.toLowerCase().includes(enteredKey.toLowerCase()) && (obj.rating >= rating )
    )
    const getStars = (rating) => {
        if(rating==NaN){
            return rating;
        }
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push("⭐");
        }
        if (halfStar) {
            stars.push("⭐️"); // Can be replaced with a half-star emoji/image
        }
        return stars.join(" ");
    };
    return (
        <div style={{margin:"20px 25px"}}>
            <style>
                {`
                input::placeholder {
                    color: rgb(138, 138, 139);  
                    font-style: Segoe UI; 
                    font-size: 16px;
                }
                `}
            </style>
            <div style={{display:"flex",justifyContent:"space-between", margin:"25px 50px", alignItems:"center"}}>
                <input type="text" placeholder="Search by restaurant name" onChange={(e) => setEnteredKey(e.target.value)} value={enteredKey} style={{padding:"10px 20px", width:"200px", border:"1px solid rgb(229,231,235)", borderRadius:"5px",fontSize:"16px" }}/>
                <div style={{display:"flex", gap:"10px" , alignItems:"center"}}>
                    <label htmlFor="ratingInput">Minimum Rating :</label>
                    <input type="number" name="" id="ratingInput" min={0} max={5} step={0.5} value={rating} onChange={(e)=>setRating(parseFloat(e.target.value))} style={{width:"40px",padding:"10px 20px", border:"1px solid rgb(229,231,235)", borderRadius:"5px",fontSize:"16px"}} />
                </div>
                
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
                {filterResta.map((obj) => (
                    <div key={obj._id.$oid} style={{
                        width: "30%", 
                        padding: "15px",
                        borderRadius: "5px",
                        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
                    }}>
                        <div  style={{ display: "flex", flexDirection:"column", alignItems:"start" }}>
                        <p>{obj.name} {getStars(obj.rating)}</p>
                        <p>📍 {obj.address}</p>
                        <p>{obj.outcode} {obj.postcode}</p>  
                        </div>
                        <div style={{ display: "flex", flexDirection:"column", alignItems:"start" }}>
                            <p>🍴 {obj.type_of_food}</p>
                            <a href={obj.URL} style={{ textDecoration: "none", color: "blue" }}>Visit Menu</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Restaurants