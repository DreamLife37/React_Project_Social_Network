import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/login/Login';


const App = (props) => {
   return (
    <BrowserRouter>
      <div className='app-wrapper'>
   
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
      
        <Route path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/settings' component={Settings}/>
        <Route path='/dialogs' 
              render={ () => <DialogsContainer />}/>

        <Route path='/profile/:userId?' 
              render={ () => <ProfileContainer />}/>
        
        <Route path='/users' 
              render={ () => <UsersContainer />}/>

        <Route path='/login' 
              render={ () => <Login />}/>    
           
        </div>
      </div>
    </BrowserRouter>);
}
export default App;
