import logo from './assets/logo.jpg'
import play from './assets/play.png'
import lay_1 from './assets/lay-1.png'
import lay_2 from './assets/lay-2.png'
import lay_3 from './assets/lay-3.png'

import logo_bar from './assets/logo-bar.png'

import card_1 from './assets/card-1.png'
import card_2 from './assets/card-2.png'
import card_3 from './assets/card-3.png'
import card_4 from './assets/card-4.png'
import card_5 from './assets/card-5.png'

export default function App() {
  return(
    <>
      <nav className="w-[100%] p-[24px] flex justify-around bg-[#0a121f]">
        <div className="flex justify-center items-center gap-[8px]">
          <img src={ logo } className='h-[60px]' alt="logo" />
          <h1 className="text-2xl font-medium text-[#3A68B8]">Artificial Intelligence</h1>
        </div>
        <div className='flex items-center'>
          <ul className="flex gap-[24px]">
            <li><a href="#" className="text-white duration-[0.5s] hover:text-[#8F9BB3]">Home</a></li>
            <li><a href="#" className="text-white duration-[0.5s] hover:text-[#8F9BB3]">About</a></li>
            <li><a href="#" className="text-white duration-[0.5s] hover:text-[#8F9BB3]">Services</a></li>
            <li><a href="#" className="text-white duration-[0.5s] hover:text-[#8F9BB3]">Blog</a></li>
            <li><a href="#" className="text-white duration-[0.5s] hover:text-[#8F9BB3]">Contact</a></li>
          </ul>
        </div>
        <div className='duration-[0.5s] cursor-pointer hover:text-[#3A68B8] hover:bg-white bg-[#3A68B8] text-white p-[18px] flex items-center rounded-[16px]'>Sign In</div>
      </nav>

      <main className='bg-[#0a121f]'>
        <div className="flex">
          <div className="w-[60%] p-[100px]">
            <p className='text-[#3A68B8]'>Next genaretion platform</p>
            <h1 className='text-white text-[50px] font-bord'>Artificial intelligence & <br /> Syber security</h1><br />
            <p className='text-[#FFFFFF] opacity-[0.7]'>Lorem ipsum is placeholder text commonly used in the graphic, <br /> print, and publishing industries for previewing layouts and <br /> visual mockups.</p><br />
            <div className="flex gap-[12px]">
              <div className="duration-[0.5s] cursor-pointer hover:text-[#3A68B8] hover:bg-white bg-[#3A68B8] text-white p-[10px] flex items-center rounded-[8px]">Get Started</div>
              <div className="duration-[0.5s] cursor-pointer hover:text-[#3A68B8] hover:bg-white bg-[#3A68B8] text-white p-[10px] gap-[12px] flex items-center rounded-[8px]"><img src={ play } alt="play" />Watch Vidio</div>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <img src={ lay_1 } alt="lay-1" />
          </div>
        </div>
        <br /><br />
        <div className="flex justify-center gap-[100px] pb-[100px]">
          <img src={ logo_bar } alt="logo-bar" />
        </div>
      </main>

      <main className='flex bg-[#020a17] p-[100px]'>
        <div className='w-[50%]'><img src={ lay_2 } alt="lay-2" /></div>
        <div className='w-[50%] flex flex-col justify-center'>
          <h1 className='text-[36px] text-white font-bold'>Apply AI, Deep Learning and Data Sciece to solve</h1><br />
          <p className='text-[#ffffff] opacity-[0.7]'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p><br />
          <div className="duration-[0.5s] cursor-pointer hover:text-[#3A68B8] hover:bg-white bg-[#3A68B8] text-white p-[10px] flex items-center rounded-[8px]">Learn More</div>
        </div>
      </main>

      <main className='flex bg-[#020a17] gap-[30px] p-[50px]'>
        <div className="bg-[#0f1724] rounded-[8px] p-[15px] flex justify-center items-center flex-col gap-[30px]">
          <img src={ card_1 } className='size-[100px]' alt="logo-1" />
          <h1 className='text-white font-bold text-[20x] text-center'>Naxly as the Winners in Global Agency Awards</h1>
          <p className='text-white opacity-[0.7] text-center'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
        <div className="bg-[#0f1724] rounded-[8px] p-[15px] flex justify-center items-center flex-col gap-[30px]">
          <img src={ card_2 } className='size-[100px]' alt="logo-2" />
          <h1 className='text-white font-bold text-[20x] text-center'>Expert Prespective Agency Awards</h1>
          <p className='text-white opacity-[0.7] text-center'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
        <div className="bg-[#0f1724] rounded-[8px] p-[15px] flex justify-center items-center flex-col gap-[30px]">
          <img src={ card_3 } className='size-[100px]' alt="logo-3" />
          <h1 className='text-white font-bold text-[20x] text-center'>Business Prespective Global Agency Awards</h1>
          <p className='text-white opacity-[0.7] text-center'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
        <div className="bg-[#0f1724] rounded-[8px] p-[15px] flex justify-center items-center flex-col gap-[30px]">
          <img src={ card_4 } className='size-[100px]' alt="logo-4" />
          <h1 className='text-white font-bold text-[20x] text-center'>Value for Results in Global Agency Awards</h1>
          <p className='text-white opacity-[0.7] text-center'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
        <div className="bg-[#0f1724] rounded-[8px] p-[15px] flex justify-center items-center flex-col gap-[30px]">
          <img src={ card_5 } className='size-[100px]' alt="logo-5" />
          <h1 className='text-white font-bold text-[20x] text-center'>Global Experience in Agency Awards</h1>
          <p className='text-white opacity-[0.7] text-center'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
      </main>

      <main className='flex bg-[#020a17] p-[100px]'>
        <div className='w-[50%] flex flex-col justify-center'>
          <h1 className='text-[36px] text-white font-bold'>Apply AI, Deep Learning and Data Sciece to solve</h1><br />
          <p className='text-[#ffffff] opacity-[0.7]'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p><br />
          <div className="duration-[0.5s] cursor-pointer hover:text-[#3A68B8] hover:bg-white bg-[#3A68B8] text-white p-[10px] flex items-center rounded-[8px]">Learn More</div>
        </div>
        <div className='w-[50%]'><img src={ lay_3 } alt="lay-3" /></div>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div>
          <img src={logo} alt="Logo" className="mb-4" />
          <p className="text-sm">
            Learn how to quickly create text commonly used in the graphic, print, and layout mockups.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Email: <a href="mailto:cyberspace@gmail.com" className="text-blue-400 hover:underline">cyberspace@gmail.com</a></li>
            <li>Phone: (904) 552-0333</li>
            <li>Address: 400 Wall Street, USA, New York</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-white mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">New Collection</a></li>
            <li><a href="#" className="hover:text-white">About Store</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Latest News</a></li>
            <li><a href="#" className="hover:text-white">Order History</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-white mb-4">Footer Menu</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Instagram Profile</a></li>
            <li><a href="#" className="hover:text-white">New Collection</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Purchase Theme</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-white mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Instagram Profile</a></li>
            <li><a href="#" className="hover:text-white">New Collection</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Purchase Theme</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-600 mt-10">
        <p>© 2024 www.company.com - All Rights Reserved</p>
        <p>English</p>
      </div>
    </footer>
    </>
  )
}
