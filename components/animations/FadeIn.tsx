'use client';
import {motion} from 'framer-motion';

export default function FadeIn({children, delay = 0, duration = 0.5, className}: any) {
    return (
        <motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0, transition: {delay, duration}}}
            viewport={{once: true}}
            // animate={{opacity: 1}}
            // transition={{delay, duration}}
            className={className}
        >
            {children}
        </motion.div>
    );
}
