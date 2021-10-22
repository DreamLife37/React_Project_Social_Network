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


const App = (props) => {

  debugger

   return (
    <BrowserRouter>
      <div className='app-wrapper'>
   
        <Header />
        <Navbar state={props.state.sidebar} />
        <div className='app-wrapper-content'>
        {/* <Route path='/dialogs' component={Dialogs}/>
        <Route path='/profile' component={Profile}/> */}
        <Route path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/settings' component={Settings}/>
        <Route path='/dialogs' 
              render={ () => <DialogsContainer
                  /* dialogs={props.state.dialogsPage.dialogs} 
                  messages={props.state.dialogsPage.messages}/>}/> ниже более компактная запись */
                 /*  dialogs={props.state.dialogsPage.dialogs}
                  messages={props.state.dialogsPage.messages} 
                  newMessageText={props.state.dialogsPage.newMessageText}
                  dispatch={props.dispatch} */
                  store={props.store}
              />}/>


        <Route path='/profile' 
              render={ () => <Profile store={props.store}
                  
              />}/>
           
        </div>
      </div>
    </BrowserRouter>);
}
export default App;
