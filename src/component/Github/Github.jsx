import React from 'react'
import { useState,useEffect } from 'react';

function Github() {
 const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/ANSHSINGH020404')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 
     text-3xl'>Github followers: {data.followers}
     <img src="https://w7.pngwing.com/pngs/490/316/png-transparent-computer-icons-github-github-icon-cat-like-mammal-carnivoran-black.png" alt="Git picture" width={300} />
     </div>
  )
}

export default Github


// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//     return response.json()
// }