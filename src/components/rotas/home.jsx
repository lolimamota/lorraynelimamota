import React from 'react'

//IMPORT DE NAVEGAÇÃO
import { useNavigate } from 'react-router-dom';

//IMPORT MEDIA
import BgMobile from "../../assets/video/bgMobile.mp4";

//IMPORT STYLES
import S from '../styles/styleHome.module.scss';

function home() {

  //NAVIGATE
  const navigate = useNavigate();

  const goProject = () =>{
    navigate('/projects')
  }

  return (
    <section className={S.sectionHome}>
      <video autoPlay muted loop className={S.videoHome}>
        <source src={BgMobile} type='video/mp4' />
      </video>
      <div className={S.content}>
        <div className={S.divh2Home}>
          <h2 className={S.h2Home}>
            Hello!
          </h2>
          <h2 className={S.h2Home}>
            I'm <span className={S.span}>Lorrayne</span> ,
            </h2>
          <h2 className={S.h2Home}>
            a Front-end Developer
          </h2>
        </div>
        <p className={S.paragraph}>
          Currently located in Brazil, I love design and build <span className={S.span}>
          Practical
          </span> and <span className={S.span}>
          Simple
          </span> web pages.
        </p>
        <button className={S.btnHome} onClick={goProject}>
          Let's get started
        </button>
      </div>
    </section>
  )
}

export default home