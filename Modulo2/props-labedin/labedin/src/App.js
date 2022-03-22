import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C5103AQECqu4hVjvwIQ/profile-displayphoto-shrink_800_800/0/1535606791464?e=2147483647&v=beta&t=tv4Chz6hkbhzUy_aCaYktxI2SC-Et_QmWln8KgjYX-k" 
          nome="Martin Sejas" 
          descricao="Meu nome é Martin Sejas, sou brasileiro-argentino e tenho 25 anos. Sou engenheiro mecânico e tenho atuado na industria petroleira como engenheiro de campo por mais de 2 anos, 
          trabalhando em plataformas por todo Brasil e no exterior. Dei inicio a minha carreira em tecnologia 
          cursando na Labenu o programa full stack e darei inicio a um mestrado de Inteligencia Artificial em Setembro."
        />
        
        <ImagemButton 
          imagem="https://th.bing.com/th/id/R.51e775e0c515a9fd8039300299e2080f?rik=F2%2f7CINyB9LaGQ&riu=http%3a%2f%2ffreevector.co%2fwp-content%2fuploads%2f2011%2f09%2f25610-arrow-pointing-down1.png&ehk=p3hB4lMje2q7xw23urryXsGJxysUCMvzmbSP2O4bwVY%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" 
          texto="Ver mais"
        />

        <CardPequeno 
          imagem = "https://th.bing.com/th/id/OIP.EaD2M_11RPyGYS3mRDZd7AHaHa?pid=ImgDet&rs=1"
          infoType = "Email"
          userInfo = "mhsejas@gmail.com"
        />
        <CardPequeno 
         imagem = "https://th.bing.com/th/id/OIP.F2BS7AMqk5Px4MUYKaAG3gHaHa?pid=ImgDet&rs=1"
          infoType = "Endereço"
          userInfo = "Rua Labenu 512, Rio de Janeiro, RJ, Brasil"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudante Full Stack Turma Shaw" 
        />

        <CardGrande 
          imagem="https://www.drillingcontractor.org/wp-content/uploads/2016/02/Logos-1.png"
          nome="Engenheiro de Campo ( Schlumberger )" 
          descricao=" Engenheiro de Campo na bacia de Campos, instalando equipamento de perfuração de ponta em plataformas de ultima geração" 
        />
        
      
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
