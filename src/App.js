import './App.css';
// import './componets/login/'
import { useState, createContext,useRef,useEffect} from 'react';
import Home from './componets/Home';
import { Routes, Route } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import Slider from './componets/SLIDERMENU/Slider';
// import './login.css';
export const globalValue = createContext();
function App() {

  const [model, setModle] = useState(false);
  const [slider, setSlider] = useState(false);
  const sliderRef = useRef();
  const loginFormRef = useRef();

  const modelFunction = () => {
    setModle(!model)
    // console.log(model)
  }

  const sliderFunction = () => {
    setSlider(!slider)
    // console.log(slider)
  }

  useEffect(()=>{
    let handler = (e)=>{
      if(!loginFormRef.current.contains(e.target)){
        setModle(false)
      }
    };

    document.addEventListener('mousedown',handler);

    return ()=>{
      document.removeEventListener('mousedown',handler)
    }
  })


  useEffect(()=>{
    let handler = (e)=>{
      if(!sliderRef.current.contains(e.target)){
        setSlider(false)
      }
    };

    document.addEventListener('mousedown',handler);

    return ()=>{
      document.removeEventListener('mousedown',handler)
    }
  })

  console.log(loginFormRef.current)

  
  // let target;
  //  if(slider){
  //   document.body.classList.add('active_slider')
    
  //  }else(
  //    target = document.getElementById("slider_id")
    
  //   target.classList.add('active_slider');
  //   // document.body.classList.remove('active_slider')
  //  )

  return (

    <globalValue.Provider value={{ modelFunction: modelFunction, sliderFunction,slider }}>
      <>
      <Slider sliderRef={sliderRef}/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/user_login' element />
        </Routes>
        {/* <Home/> */}

        {
          model &&
          <div  className="container-fluid main">
            <div ref={loginFormRef} className="row sub_element">
              <h2 onClick={modelFunction}>< FaTimes id='close_btn' /></h2>
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


        {/* {slider &&
          <div className="container slider_menu">
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Category</li>
                    <li>Orders</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        } */}



      </>
    </globalValue.Provider>
  );
}

export default App;