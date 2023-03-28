import React, { useEffect, useState } from "react";
import DataTable from "../../components/dataTable/DataTable";

export default function Home() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0585d14941mshcb4ff5c0bf045fbp100ea0jsnd432468ee42d',
    'X-RapidAPI-Host': 'imdb-top-100-movies1.p.rapidapi.com'
      }
    };

    const [data, setData] = useState([]);
    useEffect(() => {
      fetch('https://imdb-top-100-movies1.p.rapidapi.com/', options)
      .then(response => response.json())
      // .then(response => console.log(response[0].rank))
  .then(json => setData(json))
	.catch(err => console.error(err));
    }, []);
    


  return (
    <div style={{backgroundColor:'#C6C6C2'}}>
      <div style={{width:'60%', margin:'0px auto', backgroundColor:'#F8F8F8', padding:'20px'}}>
      <h3 style={{margin:'0px'}}>IMDb Charts</h3>
        <h1 style={{margin:'0px'}}>IMDb Top 250 Movies</h1>
        <p style={{marginTop:'0px'}}>IMDb Top 250 as rated by regular IMDb voters.</p>
        <div style={{borderTop:'1px solid #eeeeee'}}></div>
        { data.length > 0  && data.map((results,index) =>(
         <DataTable
         rank={results.rank}
         year={results.year}
         img={results.thumbnail}
         title={results.title}
         rating={results.rating}
         />
        ))}
      </div>
  
    </div>
  );
};
