import React from 'react';

const Header = ({logado, nome}) => {
  if(logado){
    return <header>Olá {nome}, esse é o cabeçalho!</header>
  }else{
    return <header>Faça seu Login</header>
  }
  
}
 export default Header;