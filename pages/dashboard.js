import axios from "axios";
import { useState, useEffect } from "react";

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [dashboardData, setDashboardData] = useState(null);

    useEffect(() =>{
        (async function(){
            const { data } = await axios.get("http://localhost:3001/dashboard");
            setDashboardData(data);
            setLoading(false);
        }())
    }, [])

    if(loading){
        return <h1>loading...</h1>
    }

    return ( 
        <section>
            <h2>{dashboardData.view}</h2>
            <h2>{dashboardData.posts}</h2>
            <h2>{dashboardData.followers}</h2>
            <h2>{dashboardData.following}</h2>
        </section>
     );
}
 
export default Dashboard;