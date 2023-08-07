import React, {useEffect, useState} from 'react';
import { motion } from "framer-motion";

import { BallCanvas } from './canvas';
import { Skills } from './carousel';
import { SectionWrapper } from '../hoc';
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion.js";
import { styles } from "../styles.js";

const Tech = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        let details = navigator.userAgent;
        let regexp = /android|iphone|kindle|ipad/i;

        setIsMobile(regexp.test(details));

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        window.addEventListener("change", handleMediaQueryChange);

        return () => {
            window.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    if (isMobile) {
        return (
            <>
                <motion.div variants={textVariant()}>
                    <p className={`${styles.sectionSubText}`}>My Skillset</p>
                    <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
                </motion.div>

                <div className="w-full mt-20 flex-wrap gap-7">
                    <Skills />
                </div>
            </>
        )
    } else {
        return (
            <>
                <motion.div variants={textVariant()}>
                    <p className={`${styles.sectionSubText}`}>My Skillset</p>
                    <h2 className={`${styles.sectionHeadText}`}>Skills</h2>
                </motion.div>

                <div className="flex flex-row flex-wrap justify-center gap-10">
                    {technologies.map((technology) => (
                        <div className="w-28 h-28" key={technology.name}>
                            <BallCanvas icon={technology.icon}/>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}

export default SectionWrapper(Tech, "")