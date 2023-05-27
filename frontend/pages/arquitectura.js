import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Base from "@layouts/Baseof";
import { FaInfoCircle } from 'react-icons/fa';
const Arquitectura = ({

}) => {

    return (
        <Base title={"Categorias Aztecas"}>

            <section className="section pt-0">
                {markdownify(
                    " Arquitectura",
                    "h1",
                    "h2 mb-16 bg-theme-light dark:bg-darkmode-theme-dark py-12 text-center lg:text-[55px]"
                )}



                <div className="sketchfab-embed-wrapper">
                    
                    <iframe
                    style={{width: '40%', height: '400px'}}
                        title="Templo"
                        frameBorder="0"
                        allowFullScreen
                        mozallowfullscreen="true"
                        webkitallowfullscreen="true"
                        allow="autoplay; fullscreen; xr-spatial-tracking"
                        xr-spatial-tracking
                        execution-while-out-of-viewport
                        execution-while-not-rendered
                        web-share
                        src="https://sketchfab.com/models/365e637944d84d48837ffdd96163287e/embed?ui_theme=dark"
                    ></iframe>
                    <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
                        <a
                            href="https://sketchfab.com/3d-models/templo-365e637944d84d48837ffdd96163287e?utm_medium=embed&utm_campaign=share-popup&utm_content=365e637944d84d48837ffdd96163287e"
                            target="_blank"
                            rel="nofollow"
                            style={{ fontWeight: 'bold', color: '#1CAAD9' }}
                        >
                            Templo
                        </a>{' '}
                        by{' '}
                        <a
                            href="https://sketchfab.com/rivas.lina?utm_medium=embed&utm_campaign=share-popup&utm_content=365e637944d84d48837ffdd96163287e"
                            target="_blank"
                            rel="nofollow"
                            style={{ fontWeight: 'bold', color: '#1CAAD9' }}
                        >
                            rivas.lina
                        </a>{' '}
                        on{' '}
                        <a
                            href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=365e637944d84d48837ffdd96163287e"
                            target="_blank"
                            rel="nofollow"
                            style={{ fontWeight: 'bold', color: '#1CAAD9' }}
                        >
                            Sketchfab
                        </a>
                    </p>
                    <p style={{ fontSize: '23px', fontWeight: 'normal', margin: '20px', color: '#000' }}>
                        El Templo Mayor de Tenochtitlán, también conocido como Templo Mayor Azteca. Era uno de los<br />
                        principales templos y centros religiosos de la antigua ciudad azteca de Tenochtitlán, que<br />
                        actualmente se encuentra en el corazón de la Ciudad de México.
                    </p>
                    
                    
                </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}></div>
            <div class="sketchfab-embed-wrapper">
            
            <iframe style={{width: '40%', height: '400px'}} title="Aztec Temple" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/3279eccde05346b3af53bf19f0f21690/embed"> 
            </iframe> 
            
            <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}> 
            <a href="https://sketchfab.com/3d-models/aztec-temple-3279eccde05346b3af53bf19f0f21690?utm_medium=embed&utm_campaign=share-popup&utm_content=3279eccde05346b3af53bf19f0f21690" target="_blank" rel="nofollow" 
            style={{ fontWeight: 'bold', color: '#1CAAD9' }}> Aztec Temple </a> by <a href="https://sketchfab.com/cjmitchell?utm_medium=embed&utm_campaign=share-popup&utm_content=3279eccde05346b3af53bf19f0f21690" 
            target="_blank" rel="nofollow" 
            style={{ fontWeight: 'bold', color: '#1CAAD9' }}> 
            cjmitchell 
            </a> 
            on 
            <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=3279eccde05346b3af53bf19f0f21690" target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
                Sketchfab
                </a>
                </p>
                </div>
         <div>
         <p style={{ fontSize: '23px', fontWeight: 'normal', margin: '20px', color: '#000' }}>
                Los aztecas estaban bien organizados y contaban con una fuerte infraestructura y sistemas que movilizaban gentes
                y recursos materiales con el objetivo de construir grandes edificios que satisficieran las necesidades de sus pobladores.
                Tenochtitlán, la ciudad capital, simbolizaba el poder azteca. La arquitectura azteca, que era similar a la de otras culturas mesoamericanas, 
                poseía un innato sentido del orden y de la simetría. Los diseños geométricos y las líneas extensas eran representaciones de dogmas religiosos y 
                del poder del Estado. Además, los aztecas usaron bajorrelieves, muros, plazas y plataformas como medios con los cuales representar a sus dioses e ideales. 
                Durante las distintas épocas del imperio, los aztecas agregaron nuevas técnicas y materiales a sus estructuras. Ejemplos de la monumentalidad y grandeza de los 
                aztecas se hacen evidentes en el Templo Mayor, cuya plaza podía dar cabida a 8,000 personas, y en el mercado de Tlatelolco, que podía albergar a 
                20,000 personas en los días de mercado. La adaptación arquitectónica azteca y su ingenio pueden verse en Malinalco (véase la sección correspondiente más abajo),
                donde hay un templo que fue esculpido en la roca misma y que quedó integrado a una montaña.
            
            </p>
         </div>
         
                

                <MasInformacion />
            </section>

        </Base>



    );

};

export default Arquitectura;

// for homepage data
const MasInformacion = () => {
    return (
        <div className="center-container">
            <FaInfoCircle size={50} />
            <span style={{ marginLeft: '5px' }}>Más información próximamente</span>
        </div>
    );
};