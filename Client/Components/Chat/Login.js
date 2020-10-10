import React,{useState} from 'react'
import '../../App.css';
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faTimes} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';


const Login =()=> {
    
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return(
        <div className="loginform">
            <div  className="logdev">
                 <label className="firstname"> UserName: </label><br></br>
                 <label className="password"> PassWord: </label>
                 <input className="inputingthree" type="password" placeholder="Enter your room id " onChange={(event)=>setRoom(event.target.value)}></input>
                <input className="inputingtwo" type="text" placeholder="Enter your Email-id " onChange={(event)=>setName(event.target.value)}></input>
                
                 <p>Login form</p>
                 <a href="/"><FontAwesomeIcon  icon={faTimes} size="2x"/></a>
            <div className="Linktrans">
                <Link to={`/chat?name=${name}&room=${room}`}>
                     <button  onClick={(event)=>(!name || !room)? event.preventDefault() : null} className="submitbutton"><label>Login</label></button>
                </Link>
            </div>
            </div>

            
            
        </div>

    )
} 

export default Login;
