import './App.css';
import {useState , useEffect} from "react";
import {db} from "./firebase-config";
import {collection, getDoc} from "firebase/firestore";

function App() {
  const [User, setUsers] = useState([]);
  const userCollectionRef = collection(db, "Users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDoc(userCollectionRef)
      console.log(data)
    }

    getUsers()
  },[])
  return (
    <div className="App">
      
    </div>
  );
} 

export default App;
