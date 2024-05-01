import { Link } from "react-router-dom"

 

function Search({handleClick,setSearch,search}) {

   

    
  return (
    <div>
        <input type="text" placeholder='Enter your city' value={search} onChange={(e)=>setSearch(e.target.value)} />
        <button onClick={handleClick}>Search</button>
        <Link></Link>
    </div>
  )
}

export default Search