import "./index.css";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {firebaseAuth} from './utils/firebase'; // Make sure to import your firebaseAuth object

function App() {
  const handleLogin = async() => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(firebaseAuth, provider);
    console.log(user);
  }
  return (
    <div className='w-screen h-screen bg-slate-200 flex flex-col justify-center items-center'>
      <img alt="img" src="https://www.pngarts.com/files/7/Zoom-Logo-Free-PNG-Image.png" />
      <h1 className="font-bold text-4xl text-zoom-blue">One Platform To Connect</h1>
      <button onClick={handleLogin} className="bg-zoom-blue rounded-lg p-2 mt-4 text-white font-semibold hover:bg-zoom-dark-blue">Login With Google</button>
    </div>
  );
}

export default App;
