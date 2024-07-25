import React, {useState,  useEffect} from "react";
 
function SiteList(){
    const[sites,setSites] = useState([]);
    useEffect(()=> {
    // fetch sites data{simulated for now}
    const fetchSites = () => {
        const trueSites = [
            {id: 1,name:'Serengeti National Park', country:'Tanzania', rating:4.8},
            { id:2,name: 'Maasai Mara', country: "Kenya", rating:4.6},
            { id:3,name:'Bwindi Impenetrable National park', country:'Uganda', rating: 4.6},
            
        ];
        setSites(trueSites);
    };
    fetchSites();
}, []);

return (
    <div>
       <h2>Popular East African Destinations</h2> 
       <ul>
        {sites.map(site=>(
          <li key={site.id}>{site.name} - {site.country}</li>  
        ))}
       </ul>
    </div>
);
}




export default SiteList