import React from 'react'

async function getData(id: number){
    const res = await fetch('https://www.melivecode.com/api/attractions/'+id);
    return res.json();
}

async function page({ params }: any) {
  const { id } = params
  const item = await getData(id)
  return (
    <div>
        <div className="card" key={item.id}>
        <img src={item.attraction.coverimage} alt={item.attraction.name} />
        <div className="container">
          <h4><b>{item.attraction.name}</b></h4> 
          <p>{item.attraction.detail}</p>
        </div>
      </div>
    </div>
  )
}

export default page