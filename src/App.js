import './App.css';
// import './componets/login/'
import { useState, createContext } from 'react';
import Home from './componets/Home';
import { Routes, Route } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
// import './login.css';
export const globalValue = createContext();
function App() {

  const [model, setModle] = useState(false);

  const modelFunction = () => {
    setModle(!model)
    console.log(model)
  }

  return (

    <globalValue.Provider value={{ modelFunction: modelFunction }}>
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user_login' element />
        </Routes>
        {/* <Home/> */}

        {
          model && 
          <div className="container-fluid main">
            <div className="row sub_element">
              <h2  onClick={modelFunction}>< FaTimes id='close_btn'/></h2>
              <div className="col ">
                <div className="row heading">
                  <div className="col">
                    <h1>Local-Sewa</h1>
                  </div>

                </div>

                <div className="row  bg-white input_box ">
                  <div className="col box">
                    <div className=''>
                      <h2 className=''>Sing in</h2>
                    </div>
                    <div className='user-input'>

                      {/* <label htmlFor="user_id">User Id/Email Id</label> */}
                      <input type="text" id='user_id' placeholder='User Id/Email Id' />
                    </div>
                    <div className='user-input'>
                      <input type="text" placeholder='Enter Password' />
                    </div>

                    <div className='user-input'>
                      <input type="text" id='captcha' placeholder='CAPTCHA' />
                      <span style={{ color: "red" }}>545655</span>
                    </div>


                    <div className="">
                      <button className='btn btn-info w-75 mt-5 fs-5'>Login</button>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        }
      </>
    </globalValue.Provider>
  );
}

export default App;