import './App.css';
import {useState , useEffect, useSyncExternalStore} from "react";
import {db} from "./firebase-config";
import {collection, getDocs} from "firebase/firestore";

function App() {
  const [Users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "Users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef)
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getUsers()
  },[])

  return (
    <div className="app"> 
    {Users.map((Users) => {
      return <div> 
        <h1> Name : {Users.Username} </h1>
        <h1> Rank : {Users.Rank}</h1>
      </div>
    })}   
  </div>
  )
} 

export default App;
