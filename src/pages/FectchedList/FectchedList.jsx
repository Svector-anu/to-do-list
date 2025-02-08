import React, { useState } from 'react'
import 'fectchedList.css';
import axios from 'axios';


const FectchedList = () => {
const [data, setdata] = useState([])
const[loading, setLoading] = useState(true)



const fetchedDate =async () =>{
    setLoading(true)




    try {
        const response = await axios.get('https://dummyjson.com/data/todo.json')
        setdata(response.data.todos);
  console.log(response.data.todos);
   console.log (response);



    } catch (error) {
        console.error('Error fetching data'error);
        
    }
    finally[
        setLoading(false);

    ]
};
useState(()=> {
    fectchData();

},[])

return (
    <div>
      <h1>FetchedList</h1>
   {data.map((item, ) => (
    <div key={item.id}>
        <p>Title:{item.todo</p>
        <p>Users ID:{item.u</p>


    </div>



}





    </div>
  )
}

export default FectchedList
