import './App.css';
import { useState } from "react";
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const handleLogin =(e) => {
    e.preventDefault();
    console.log("handle clicked");
    if(email=="swetha@ssd.com" && password=="5731"){
      setMsg("correct user information!");
    } else {
      setMsg("wrong user information!");
    }
    
    
  };
 
  return (
    <div className="App container mt-5">
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-md-4 offset-md-4 mt-5">
            <div className="card text-left">
              <div className="cord-body container mt-2 mb-2">
                <div className="text-center container textSty ">
                  <img src="https://portal.hibouconnect.com/logo.png" alt="" />
                  <p className='text'>Sign In to your account</p>
                  {msg && msg}
                </div>
                <form onSubmit={(e)=> handleLogin(e)}>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Email address</label>
                      <input type="email" 
                      className="form-control" 
                      id="exampleInputEmail1" 
                      aria-describedby="emailHelp"
                      onChange={(e)=>setEmail(e.target.value)}
                      />
                      
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Password</label>
                      <input type="password" 
                      className="form-control" 
                      id="exampleInputPassword1"
                      onChange={(e)=>setPassword(e.target.value)}
                      />
                    </div>
                    <div class="text-center">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>  
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
