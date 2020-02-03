import React,{Component} from 'react';

const Header = () =>{
    return (
        <header className='bienvenue'>
            <h1>Bienvenido a todos</h1>
        </header>
    )
}
const Main = () =>{
    return (
       <main className="generalGrid">
           <div className='cont1'>
               Contenedor 1
           </div>
           <div className='cont2'>
               Contenedor 2
           </div>
           <div className='cont3'>
               Contenedor 3
           </div>
       </main>
    )
}
const Footer = () =>{
    return (
       <footer className="pie">
           <h2>Nos vamos adios</h2>
       </footer>
    )
}

class Contenido extends Component{
    render(){
        return(
            <body>
                <Header />
                <Main />
                <Footer />
            </body>
        )
    }
}
export default Contenido;