import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {

  debugger

   return (
    <BrowserRouter>
      <div className='app-wrapper'>
   
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
      
        <Route path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/settings' component={Settings}/>
        <Route path='/dialogs' 
              render={ () => <DialogsContainer />}/>

        <Route path='/profile' 
              render={ () => <Profile />}/>
        
        <Route path='/users' 
              render={ () => <UsersContainer />}/>
           
        </div>
      </div>
    </BrowserRouter>);
}
export default App;
