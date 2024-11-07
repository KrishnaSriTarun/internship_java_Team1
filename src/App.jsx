import './App.css'
import Network from './Network';
import ProviderAccount from './ProviderAccount';
import ProviderLogin from './ProviderLogin';
import UserAccount from './UserAccount';
import UserLogin from './UserLogin';

function App() {

  return (
    <>
      <Network/>
      <ProviderLogin/>
      <ProviderAccount/>
      <UserLogin/>
      <UserAccount/>
    </>
  )
}

export default App
