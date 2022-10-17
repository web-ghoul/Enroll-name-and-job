import React ,{useState , useEffect} from 'react'
import Header from "./Components/Header/Header"
import List from "./Components/List/List"
import Footer from "./Components/Footer/Footer"

function App() {
  let array  =[];
  if(localStorage.getItem("data")){
    array = JSON.parse(localStorage.getItem("data"))
    array.map((arr,i)=>arr.id = i)
  }
  const [data,setData] = useState([...array]) ;
  const itemsHandle = () =>{
    let array=[]
    if(localStorage.getItem("data")){
      array = JSON.parse(localStorage.getItem("data"))
      array.map((arr,i)=>arr[2] = i)
    }
    setData([...array])
  }
  const deleteItem = (id) =>{
    const newData = data.filter((arr)=>+arr[2] !== +id)
    setData(newData)
    if(newData.length>0){
      localStorage.setItem('data',JSON.stringify(newData))
    }
    else{
      localStorage.clear()
    }
  }
  useEffect(()=>{
    itemsHandle()
  } , [data])
  return (
    <main>
      <div className="container">
        <Header/> 
        <List data ={data} deleteItem={deleteItem}/>
        <Footer itemsHandle={itemsHandle} />
      </div>
    </main>
  );
}
export default App;
