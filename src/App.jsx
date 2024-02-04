
import './App.css'
import twitterLogo from './assets/twitter-right.png'
import googlelogo from './assets/google-logo.png'
import appleLogo from './assets/apple-logo.png'
function App() {

  return (
    <>
      <main className='flex'>
        <div className="left">
          <img src={twitterLogo} alt="logo" className='w-80 mt-52 ml-52' />
        </div>
        <div className="right pl-72 ml-6 mt-32">
          <h1 className='text-7xl font-bold'>Happening now</h1>
          <h2 className='font-semibold text-3xl mt-10'>Join today.</h2>
          <div className='mt-9'>
            <button className='flex bg-white px-4 py-3 space-x-1 border-2 border-gray-400 rounded-3xl w-60 mt-2 hover:border-2 hover:border-blue-300'>
              <span>
                <img src={googlelogo} alt="google-logo" className='w-6 h-6 ml-5'/>
              </span>
              Sign up with Google 
              </button>
            <button className='flex bg-white px-4 py-3 space-x-1 border-2 border-gray-400 rounded-3xl w-60 mt-2 hover:border-2 hover:border-gray-500'>
              <span>
                <img src={appleLogo} alt="google-logo" className='w-6 h-6 ml-5'/>
              </span>
                Sign up with Apple 
            </button>
            <div className='flex items-center mt-2 ml-2'>
              <div className='w-24 h-0.5 bg-gray-100'></div>
              <div>or</div>
              <div className='w-24 h-0.5 bg-gray-100'></div>
            </div>
            <button className='bg-blue-500 w-60 rounded-3xl h-12 text-white mt-2'>Create account</button>
            <p className='w-60 text-[10px] mt-2'>
              By signing up, you agree to the 
              <span className='text-blue-400 hover:underline'>
                Terms of Service</span> and 
                <span className='text-blue-400 hover:underline'>Privacy Policy,</span> 
                including 
                <span className='text-blue-400 hover:underline'>Cookie Use.</span>
            </p>

            <h2 className='mt-8'>Already have an account?</h2>
            <button className='bg-white w-60 rounded-3xl h-10 text-blue-400 mt-3 border-2 border-gray-200 hover:horder-2 hover:border-blue-100 hover:bg-blue-200'>Sign in</button>

            
          </div>
        </div>
      </main>
    </>
  )
}

export default App
