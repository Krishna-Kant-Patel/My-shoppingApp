import { useEffect, useState } from "react";



function Users(){
 const [userdata, setData] = useState([])
    
    function getusers(){
        fetch('https://randomuser.me/api/?results=100')
        .then((res)=>res.json())
        .then((data)=>{
            
            setData(data.results)
        })
        .catch(()=>{
            console.log("error");
        })
    }
    const filterdata=(e)=>{
        const fdata = userdata.filter((item)=> item.gender===e.target.value)
        setData(fdata)
    }


    return <>
    <h1>users</h1>
    <button onClick={getusers}>Get users</button>
    <input type="radio" name="gender" id="" value="male" onChange={filterdata} />Male
    <input type="radio" name="gender" id="" value="female" onChange={filterdata} /> Female
    <div  >
        {userdata &&
        userdata.map((item)=>{
            return(<>
            <div style={{display: "flex", justifyContent:"space-evenly"}}>
                <img src={item.picture.medium} alt="" />
                <p>{item.name.first}</p>
                <p>{item.email}</p>
                <p>{item.gender}</p>
            </div>
            </>)
        })

        }
    </div>
    </>
}

export default Users;