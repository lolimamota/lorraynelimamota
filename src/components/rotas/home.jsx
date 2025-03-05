import React from 'react'

//IMPORT MEDIA
import BgMobile from "../../assets/video/bgMobile.mp4";

//IMPORT STYLES
import S from '../styles/styleHome.module.scss';

function home() {
  return (
    <section className={S.sectionHome}>
      <video autoPlay muted loop className={S.videoHome}>
        <source src={BgMobile} type='video/mp4' />
      </video>
      <div className={S.content}>
        <div className={S.h2Home}>
          <h2 className={S.h2Home}>
            Hello!
          </h2>
          <h2 className={S.h2Home}>
            I'm Lorrayne,
          </h2>
          <h2 className={S.h2Home}>
            a Front-end Developer
          </h2>
        </div>
        <p>
          Currently located in Brazil, I love design and build Practical and Simple web pages.
        </p>
        <button>
          Let's get started
        </button>
      </div>
    </section>
  )
}

export default home