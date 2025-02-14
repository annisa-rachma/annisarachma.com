import './App.css'
import homeImage from './assets/home.svg'
import githubImage from './assets/github.svg'
import linkedinImage from './assets/linkedin.svg'
import blogImage from './assets/blog.svg'
import mailImage from './assets/mail.svg'
import darkModeImage from './assets/darkmode.svg'

function App() {

  return (
    <>
      {/**1 */}
      <div className='border-[1.5px] rounded-tl-lg bg-purple grid place-items-center '>
        <img src={homeImage} alt="" className='w-[60%]' />
      </div>
      <div className='border-[1.5px] bg-green grid place-items-center'>
        <img src={githubImage} alt="" className='w-[60%]' />
      </div>
      <div className='border-[1.5px] bg-darkblue grid place-items-center'>
        <img src={linkedinImage} alt="" className='w-[55%]'/>
      </div>
      <div className='border-[1.5px]'>
      </div>
      <div className='border-[1.5px] bg-lightblue'>
      </div>
      <div className='border-[1.5px]'>
      </div>
      <div className='border-[1.5px] bg-green grid place-items-center'>
        <img src={blogImage} alt="" className='w-[60%]'/>
      </div>
      <div className='border-[1.5px] bg-purple grid place-items-center'>
      <img src={mailImage} alt="" className='w-[60%]'/>
      </div>
      <div className='border-[1.5px] rounded-tr-lg bg-red grid place-items-center'>
      <img src={darkModeImage} alt="" className='w-[55%]'/>
      </div>

      {/**2 */}
      <div className='border-[1.5px]'>
        
      </div>
      <div className='border-[1.5px] bg-red'>
        
      </div>
      <div className='border-[1.5px]'>
        
      </div>
      <div className='border-[1.5px] '>
        
      </div>
      <div className='border-[1.5px] col-span-2 bg-yellow'>
        
      </div>
      <div className='border-[1.5px]'>
        
      </div>
      <div className='border-[1.5px]'>
        
      </div>
      <div className='border-[1.5px] row-span-2 bg-yellow'>
        
      </div>

      {/**3 */}
      <div className='border-[1.5px] bg-yellow'>
        
      </div>
      <div className='border-[1.5px]'>
        
      </div>
      <div className='border-[1.5px] col-span-2 row-span-2 bg-lightblue'>
        
      </div>
      <div className='border-[1.5px] col-span-3'>
        
      </div>
      <div className='border-[1.5px] bg-lightblue'>
        
      </div>
      
      {/**4 */}
      <div className='border-[1.5px]'>
        
      </div>
      <div className='border-[1.5px] bg-purple'>
        
      </div>
      <div className='border-[1.5px]'>
        
      </div>
      <div className='border-[1.5px]'>
        
      </div>
      <div className='border-[1.5px]'>
        
      </div>
      <div className='border-[1.5px]'>
        
      </div>
      <div className='border-[1.5px] bg-darkblue'>
        
      </div>

      {/**5 */}
      <div className='border-[1.5px] rounded-bl-lg row-span-2 bg-lightblue'>
        
      </div>
      <div className='border-[1.5px]'>
        
      </div>
      <div className='border-[1.5px]'>
        
      </div>
      <div className='border-[1.5px] bg-darkblue'>
        
      </div>
      <div className='border-[1.5px]'>
        
      </div>
      <div className='border-[1.5px] col-span-3 bg-lightblue'>
        
      </div>
      <div className='border-[1.5px]'>
        
      </div>

      {/**6 */}
      
      <div className='border-[1.5px]'>
        
      </div>
      <div className='border-[1.5px] col-span-2 bg-green'>
        
      </div>
      <div className='border-[1.5px]'>
        
      </div>
      <div className='border-[1.5px] bg-red'>
        
      </div>
      <div className='border-[1.5px]'>
        
      </div>
      <div className='border-[1.5px]'>
        
      </div>
      <div className='border-[1.5px] rounded-br-lg bg-purple'>
        
      </div>
    </>
  )
}

export default App
