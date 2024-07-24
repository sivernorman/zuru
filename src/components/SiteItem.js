import React from "react";


 function SiteItem({site}) {
    return(
        <div>
            <h3>{site.country}</h3>
            <p>Country:{site.country}</p>
            <p>Rating:{site.rating}/5</p>
        </div>
    )
 }



 export default SiteItem;