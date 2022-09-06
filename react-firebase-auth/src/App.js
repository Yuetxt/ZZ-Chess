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
      <div>  
            <div id="Navbar">
          <a href="">
            <button id="Home">
              <h2>
                One Move Chess
              </h2>
            </button>
          </a>
          <ul id="List">
            <li class="items">
              <a href="#">
                <button>
                  <span class="List-item">Rank</span>
                </button>
              </a>
            </li>
            <li class="items">
              <a href="#">
                <button>
                  <span class="List-item">Rules</span>
                </button>
              </a>
            </li>
            <li class="items">
              <a href="#">
                <button>
                  <span class="List-item">Learn More</span>
                </button>
              </a>
            </li>
            <li class="item">
              <a href="UserLogin.html">
                <button>
                  <span class="List-item">Login</span>
                </button>
              </a>
            </li>
          </ul>
        </div>
        <div id="Login-box-container">
        <div id="Login-box">
          <div id="form-login">
            <span>
              Login Information
            </span> 
            <form type="box" action="#">
              <div class="Login-infos">
                  <input type="text" placeholder="Enter Username Or Email..." required/>
              </div>
              <div class="Login-infos">
                  <input type="password" placeholder="Enter Password" required/>
              </div>
              <div class="Login-infos">
                  <input id="submit" type="submit" value="Login"/>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
  )

} 


/*
 <div className="app"> 
    {Users.map((Users) => {
      return <div> 
        <h1> Name : {Users.Username} </h1>
        <h1> Rank : {Users.Rank}</h1>
      </div>
    })}   
  </div>


*/
export default App;
