import React from "react";
import { useTranslation } from "react-i18next";

interface IPartner {
  img: string;
  link: string;
  type: 'organization' | 'edu' | 'startup'
}

function Partners() {
  const partners: IPartner[] = [
    {
      img: 'digital.png',
      link: 'https://digital.uz/',
      type: 'organization'
    },
    {
      img: 'uzedu.png',
      link: 'https://uzedu.uz/',
      type: 'organization'
    },
    {
      img: 'imv.png',
      link: 'https://imv.uz/',
      type: 'organization'
    },
    {
      img: 'cbu.png',
      link: 'https://cbu.uz/uz/',
      type: 'organization'
    },
    {
      img: 'ucell.png',
      link: 'https://ucell.uz/uz/subscribers',
      type: 'organization'
    },
    {
      img: 'uztelecom.png',
      link: 'https://uztelecom.uz/',
      type: 'organization'
    },
    {
      img: 'sber.svg',
      link: 'https://sberbank.ru/',
      type: 'organization'
    },
    {
      img: 'aloqa.svg',
      link: 'https://aloqabank.uz/',
      type: 'organization'
    },
    {
      img: 'teachai.png',
      link: 'https://teachai.org/',
      type: 'organization'
    },
    {
      img: 'unesco.png',
      link: 'https://www.unesco.org/',
      type: 'organization'
    },
    {
      img: 'tstu.png',
      link: 'https://tdtu.uz/',
      type: 'edu'
    },
    {
      img: 'amity.png',
      link: 'https://amity.uz/',
      type: 'edu'
    },
    {
      img: 'tma.png',
      link: 'https://tma.uz/en/',
      type: 'edu'
    },
    {
      img: 'tatu.png',
      link: 'https://tuit.uz/',
      type: 'edu'
    },
    {
      img: 'zayed.png',
      link: 'https://www.zu.ac.ae/main/en/',
      type: 'edu'
    },
    {
      img: 'nuu.png',
      link: 'https://nuu.uz/',
      type: 'edu'
    },
    {
      img: 'inha.png',
      link: 'https://inha.uz/',
      type: 'edu'
    },
    {
      img: 'tashpmi.png',
      link: 'https://tashpmi.uz/',
      type: 'edu'
    },
    {
      img: 'raqamli.png',
      link: 'https://airi.uz/',
      type: 'edu'
    },
    {
      img: 'HUFS.png',
      link: 'https://www.hufs.ac.kr/',
      type: 'edu'
    },
    {
      img: 'yuridik.png',
      link: 'https://tsul.uz/',
      type: 'edu'
    },
    {
      img: 'mbzua.png',
      link: 'https://mbzuai.ac.ae/',
      type: 'edu'
    },
    {
      img: 'samgu.png',
      link: 'https://www.samdu.uz/',
      type: 'edu'
    },
    {
      img: 'tiiame.svg',
      link: 'https://tiiame.uz/',
      type: 'edu'
    },
    {
      img: 'tsue.png',
      link: 'https://tsue.uz/',
      type: 'edu'
    },
    {
      img: 'nus-edu.png',
      link: 'https://nus.edu.sg/',
      type: 'edu'
    },
    {
      img: 'nazzar.png',
      link: 'https://nazzar.uz/',
      type: 'startup'
    },
    {
      img: 'zyplal.png',
      link: 'https://zypl.ai/',
      type: 'startup'
    },
    {
      img: 'tass.png',
      link: 'https://tassvision.ai/',
      type: 'startup'
    },
    {
      img: 'smartchain.png',
      link: 'https://smartchain.uz/',
      type: 'startup'
    },
    {
      img: 'uzvc.png',
      link: 'https://nationaluzvc.uz/',
      type: 'startup'
    },
    {
      img: 'uzvca.png',
      link: 'https://uzvca.uz/',
      type: 'startup'
    },
  ];

  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="slider">
        <h2 className="section_title ">{t("home.partners")}</h2>
        <h3 className="slider__subtitle">{t("home.organizations")}</h3>

        <div className={`slide-track`}>
          {
            partners.filter(p => p.type === 'organization').map((p) => (
              <a key={p.link} href={p.link} target="_blank" className="slide" rel="noreferrer" >
                <img src={require(`src/assets/images/${p.img}`)} alt="" />
              </a>
            ))
          }
        </div>
        <h3 className="slider__subtitle">{t("home.universities")}</h3>
        <div className={`slide-track`}>
          {
            partners.filter(p => p.type === 'edu').map((p) => (
              <a key={p.link} href={p.link} target="_blank" className="slide" rel="noreferrer" >
                <img src={require(`src/assets/images/${p.img}`)} alt="" />
              </a>
            ))
          }
        </div>
        <h3 className="slider__subtitle">{t("home.startups")}</h3>
        <div className={`slide-track`}>
          {
            partners.filter(p => p.type === 'startup').map((p) => (
              <a key={p.link} href={p.link} target="_blank" className="slide" rel="noreferrer" >
                <img src={require(`src/assets/images/${p.img}`)} alt="" />
              </a>
            ))
          }
        </div>
      </div>
    </div >
  );
}

export default Partners;
