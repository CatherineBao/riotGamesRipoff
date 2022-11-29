import './App.css';
import { useState } from 'react';
import facebook from './images/Facebook-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  function handleTextChange(text) {
    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

    function secondHandleTextChange(text) {
      if (text !== '') {
        setIsActive2(true);
      } else {
        setIsActive2(false);
      }
    }

  return (
    <div className='p-7 pt-4'>
      <div className='h-24 p-3 flex items-center lg:justify-start justify-center'>
        <img className='h-2/3' src='https://i.imgur.com/sww2NOF.png' alt="avaFolkman" />
      </div>
      <div className='flex items-center justify-center w-full'>
        <div className='bg-mainText lg:w-[32%] w-full lg:p-5 p-2 flex flex-col items-center justify-center'>
        <h1 className='my-10 pb-5 text-3xl font-semibold text-textDark tracking-wider'>Sign In</h1>
          <form className='w-full'>
          <div id="float-label" className='flex flex-row px-2 lg:px-10 w-full relative'>
            <input required className='text-text w-full h-[56px] p-3 bg-background hover:bg-backgroundHover rounded-sm' type="text" onChange={(e) => handleTextChange(e.target.value)} />
            <label className={ isActive ? "Active" : "text-text absolute translate-x-3.5 translate-y-3.5 origin-top-left duration-200 uppercase font-bold tracking-wider"} htmlFor="email">
              Username
            </label>
          </div>
          <div id="float-label2" className='flex flex-row px-2 lg:px-10 w-full relative mt-5'>
            <input required className='text-text w-full h-[56px] p-3 bg-background hover:bg-backgroundHover rounded-sm' type="password" onChange={(e) => secondHandleTextChange(e.target.value)} />
            <label 
              className={ isActive2 ? "Active" : "text-text absolute origin-top-left duration-200 uppercase font-bold tracking-wider"} 
              htmlFor="email"
              placeholder="Enter Password"
            >
              Password
            </label>
          </div>
          <div className='flex gap-3 items-center justify-center mt-8 mb-5 w-full'>
            <button className='rounded-sm bg-facebook w-1/4 flex items-center justify-center hover:bg-facebookHover duration-200'> 
              <img 
              alt='facebook logo'
              className='h-10 p-2' 
              src={facebook} />
            </button>
            <button className='rounded-sm bg-mainText w-1/4 flex items-center justify-center drop-shadow hover:bg-background duration-200'> 
              <img 
              alt='google logo' 
              className='h-10 p-2' 
              src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png' />
            </button>
            <button className='rounded-sm bg-black w-1/4 flex items-center justify-center hover:bg-offBlack duration-200'> 
              <img 
              alt='apple logo' 
              className='h-10 p-2' 
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1200px-Apple_logo_white.svg.png' />
            </button>
          </div>
          <div className='flex w-full items-center justify-start pl-10'>
            <input className='w-5 h-5 text-backgroundHover border-none accent-accent' type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label className='ml-3 tracking-wide text-md font-normal text-text' for="vehicle1"> Stay signed in </label><br></br>
          </div>
          <div className='w-full my-10 flex items-center justify-center'>
            <button id='submit' className='hover:border-accent hover:bg-accent rounded-sm flex items-center w-20 h-20 justify-center border-4 rounded-3xl border-background duration-200' type="submit"> 
            <FontAwesomeIcon className='text-4xl text-background hover:text-mainText' icon={faArrowRight} />
            </button>
          </div>
          </form>
          <div className='w-full tracking-wider flex flex-col text-center justify-center font-[600] text-[0.75em] text-text hover:cursor-pointer'>
            <a className='hover:text-black'>
              CAN'T SIGN IN?
            </a>
            <a className='hover:text-black'>
              CREATE ACCOUNT
            </a>
          </div>
        </div>
      </div>
      <div className='p-3 flex lg:flex-row flex-col-reverse items-center lg:justify-start justify-center gap-5 mt-5 md:mt-14 uppercase text-mainText opacity-80 text-[0.7em] font-[600] tracking-wider'>
        <p className='hover:cursor-pointer'> support </p>
        <p className='hover:cursor-pointer'> privacy notice </p>
        <p className='hover:cursor-pointer'> terms of service </p>
        <p className='hover:cursor-pointer'> cookie preferences </p>
        <div className='flex gap-2 bg-mainText/50 p-2 rounded-md hover:bg-accent/100 duration-200'>
          <p>EN</p>
          <FontAwesomeIcon icon={faGlobe} className='text-sm'/>
        </div>
      </div>
      <p className='mt-5 md:mt-0 text-center md:text-left pl-3 uppercase text-mainText opacity-80 text-[0.6em] font-semibold tracking-wider'>© 2020 RIOT GAMES. ALL RIGHTS RESERVED.</p>
    </div>
  );
}

export default App;