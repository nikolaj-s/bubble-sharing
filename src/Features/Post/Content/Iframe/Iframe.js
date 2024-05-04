
import React from 'react'

import { motion } from 'framer-motion';

import "./Iframe.css";

export const Iframe = ({link, marginLeft, maxWidth = 800, marginRight, disableMax, height = 350}) => {

    const [rendered, toggleRender] = React.useState(false);

    const primaryColor = "rgb(57, 62, 70)";

    const secondaryColor = "rgb(34, 40, 49)";

    const loaded = (e) => {
       
        toggleRender(true);
    }

    return (
        <>
        {link ?
            <div 
            className='iframe-outer-container'
>
                
                <iframe 
                onLoad={loaded}
                scrolling="no"
                title={link}
                sandbox='allow-scripts allow-same-origin allow-presentation allow-popups ' loading='lazy' src={link} allow="clipboard-write; encrypted-media;" frameBorder='0' allowFullScreen={false} ></iframe>
                {!rendered ?
                <motion.div 
            style={{
                background: `linear-gradient(270deg, ${secondaryColor}, ${primaryColor}, ${secondaryColor})`,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundSize: '600% 600%',
                zIndex: 3
            }}
            initial={{backgroundPosition: '0% 50%'}}
            animate={{backgroundPosition: ['0% 50%', '300% 50%']}}
            transition={{ease: 'linear', duration: 3, repeat: Infinity}}
            ></motion.div> 
               : null }
            </div>
        : null}
        </>
    )
}