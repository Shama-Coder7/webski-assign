import React from 'react';
import './Home.css';
import Navbar from './Navbar';
import ContactUs from './ContactUs';
import Process from './Process';
import Footer from './Footer';
function Home() {
  return (
    <div>
    <header>

        <Navbar/>
        <div className='header-body'>
                <div>THE</div> EDUCATED APPROACH
               <div className='line-1'><p>to modern mortgage lending</p> </div>
        </div>
    </header>
        <div>
{/** picturesection */}
<Process/>
        </div>
{/*Contact Us */}
<ContactUs/>
        <footer>
<Footer/>
        </footer>
    </div>
  )
}

export default Home