import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";



import './styles.css';


function Home() {
    return ( 
        <div id="page-home">
            <div id="page-home-container">
                <div className="NavBar-container">
                    <PageHeader />
                </div>
            <img className="img" src="/img/imagemhome.png" />
            </div>
            <div className="buttons-container"> 
            <div className="Descrition">
                <p>Novidade na área</p>
                <h1 style={{color:'#5aa1ff'}}>FaleMais</h1>
                <p>Com o <span style={{color:'#5aa1ff'}} ><b>FaleMais</b></span> da Telzir você adquire um plano e pode falar de graça até
                um determinado tempo (em minutos) e só paga os minutos excedentes.</p>
            
               <div className="plan-content">
                <h4>Nossos Planos</h4>
               <b><p>FaleMais 30(<span style={{color:'#5aa1ff'}} >30 minutos</span>);</p>
               <p>FaleMais 60(<span style={{color:'#5aa1ff'}} >60 minutos</span>);</p>
               <p>FaleMais 120(<span style={{color:'#5aa1ff'}} >120 minutos</span>);</p></b>
                </div>
            
            </div >


            <Link to="/Calculate" className="calculate">Calcular seu FaleMais</Link>

            </div>

        </div>
    );
  }
  
  export default Home;