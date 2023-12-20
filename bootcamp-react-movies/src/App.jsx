import './App.css'
import MyFirstButton from './user/get/ui/Button';
import { getUser } from './user/get/application/get-user';
import { useEffect, useState } from 'react';
import { UserDetails } from './user/user-details/ui/UserDetails';
import UserPage from './user/page/UserPage';
import { Provider } from 'react-redux';
import EcomerceStore from './redux/store';
import { AppRouter } from './AppRouter';

function App() {

  const [user,setUser]  = useState(undefined);
  const [cont,setCont] = useState(1);
  const [userMails,setUserMails] = useState(new Set([]));

  const get = async (e) => {
    const url = `${import.meta.env.VITE_REQ_SINGLE_USER}/${cont}`;
    const user = await getUser(url);

    // console.log(user);
    setUser(prev => user);
    setCont(prev => prev +1);
  }

  const resetUser = () => {
    setUser(prev => undefined);
    setCont(prev => 1);
  }

  //hook useEffect
  /*useEffect(() => {
    console.log('siempre');
  });//siempre todo el tiempo
  */
  useEffect(() => {
    console.log('una vez');//inicializar datos cuando se esta cargando el componente
  },[]);

  useEffect(() => {
    //guardo el el mail 
    if(user) {      
      userMails.add(user.email);
      //setUserMails(prev => prevs);
      console.log(userMails);
    }
  },[user]);

  return (
    <>
    {/*
      <MyFirstButton
        text={'Get User '}
        click={get}
      />   
      <hr/>
      { user ? 
        <>
          <MyFirstButton 
            text={'Reset User'}
            click={resetUser}
            />
          <hr/>
          <UserDetails user={user} id={user.email}/>
        </>
        : 'Primero busque un user....'
      }
    */}
    <Provider store={EcomerceStore}>
      <AppRouter/>
    </Provider>
    </>
  )
}

export default App