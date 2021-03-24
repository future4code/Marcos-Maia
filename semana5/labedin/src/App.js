import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQHFsOhIkq9SyA/profile-displayphoto-shrink_800_800/0/1583027990437?e=1620864000&v=beta&t=_UyP3RwX5TMXDmgJoWIdPqIDMRu2MQEjrswGj1i-ePo" 
          nome="Marcos Maia" 
          descricao="Oi, eu sou o Marcos Maia. Estudante de fullstack development na Labenu, que adora tecnologia (óbvio), gosta de escrever roteiros e de narrativas, sua profissão atual, que, espera, se tornará apenas um hobbie, já que fará um app milionário que será vendido para o Facebook ou para Google."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <h2>Contatos</h2>
        <CardPequeno
          imagem="data:image/png;base64,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"
          nome="Email"
          descricao="marcosmaiadev@gmail.com"
          link=""
        />
        <CardPequeno
          imagem="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAAwMDCGhoYJCQmbm5v7+/s3NzfOzs4FBQX09PSKioq7u7u+vr65ublaWlrW1tZUVFRGRkbFxcUmJiZgYGBoaGhLS0tRUVHg4OA2Njatra1+fn7q6uotLS0aGhp1dXWRkZGnp6ciIiJ4eHgTExNsbGxkol5kAAAEV0lEQVR4nO2d6VarMBRG6QB4gQ50HsRavfX9H/HK7bLWkhMCBM4hfvuvoWavDITkJPE8AAAAAAAAAAAAAAAAAACAvhFN4jQcSiBM40lk3S/ZDWSxSKz6TYfcQgpeptb8ohm3DMHMUl2dj7lNSMZzG4JLbg0ty+aCc26HEhqXYiS3il4ZN22LUjuZb2bNBKfc+Teg2UvjhTv7BgybCCbcuTeiyehmy515I7b1BSPuvBtSvzudcGfdkEltw5g764bEtQ1T7qwbktY2DLmzbkhY21DiV6GK+m9EGA5Wu/VmvVt1YaGjLcPQ319fRNHeP3TkoqYdw8PPb88lZ0G2YugXEp+78inShuGTIjXfdEcLhntlcrYJD/uGqhLM4SpF64bFNvgF00DWtuGBfiDgmROwbaibojx27HbFsqF+mHvq2i7HsiHdCnNGXdvlWDZUvym+YOlO7RquSiZFOtcb2DbclTzTud7AtuG65BmOeQG7hpuSZzimWFGG1Qzdb4fu96Xuvw9LxjTPXdvlWDbUfFp8flxcurbLwbdFVcMV/UDEM+Nm/Rv/TD7A0grbmKeh6ilXXEMLc23qMJ2nLq3uaWO+VFWKfJEprcx5x49Dm4ipDea0s26xOt6nDI7OrVt8chp91dXliOVFf6PVFdJwK2ApHGvAMJQPDGEoHxjCUD4whKF8emJ4efaT+X4/Xx7Pm4qP2jcc/1Gj2EFEJX1IG75lP/5zdqyyhmXdcEQ+4BcEAyppcPfV9aqa98l84yrEakgm/Tb8oFZCjCcOZBu+UyFk/xMVfrB/hs8lWchM2qNkwyP59xvnXhvqauiN8p07cg0Nd7iWxq0KNTyYlWBOmaJQw/c384yUrIjINIz+VsmJfuVVpmFAjnaUvPbPsCKBbgjnhKG2KbphqKunjhhmzhtqwiBcMaQL0RVDb91jQ7OXIzkEF24YTV/T8LDd+PqgR09zkoxow/sQjm3ZUJyag5Ns+BCD86GvrW/9MyzssAkzXXLqK0quoWIL0VAXZJ0RQS1iDZVhYtpIeWLLuFRD4mwY3eQUcbShVENim9tF09sQnalQw4iKFNOcbEUMTYUakiMUzfFkRLELNSQ/FU50d9ovQ3Icrdmz0i/DBWlITxT3yjCgozbp4SkMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGv9GQvlCxSmwibUjHJhI39Vg3XMQjNXEx0pxI+Ql9X8sH+ftExGZPTuBpAAxhKB8Y0gg4QNeI+nfJun8fsPt3Ort/L7f7d6uzXN5UnW19QS/hzrwRSQNDj+dOymrUfxvm8N3oYE6jIvS8GXf+S9FsyDSCPKlBCpcGHekVtmuMDTE81U4H32XUJugunzJmLreiji2UYE4ktbuZNW6DNxLiuAZWXhq+Jh4diQMb2FjY9cuJJnEaDiUQpvHEXv0EAAAAAAAAAAAAAAAAAADoin/72XJ3ymh/WQAAAABJRU5ErkJggg=="
          nome="Linkedin"
          descricao="Marcos Maia Ideia"
          link="https://www.linkedin.com/in/marcos-maia-ideia-a86a781a1/"
        />
        
        
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://yt3.ggpht.com/ytc/AAUvwnieUkYT7u3tOAbbxR8CRQB5mGYKlRO6WnTlt2E90A=s900-c-k-c0x00ffffff-no-rj" 
          nome="TV Rede Minas" 
          descricao="Roteirista de TV responsável pelo desenvolvimento de pesquisa e roteiro para o Programa Estações."
        />
        
        <CardGrande 
          imagem="https://www.otaboanense.com.br/wp-content/uploads/2020/03/logo_senac__alta.jpg" 
          nome="SENAC SP" 
          descricao="Docente para os cursos de formação profissional das áreas de publicidade e design gráfico do Senac Santana (ZN-SP)." 
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

