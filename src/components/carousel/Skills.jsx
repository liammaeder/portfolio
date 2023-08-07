import { technologies } from "../../constants";
import {fadeIn} from "../../utils/motion.js";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <motion.div variants={fadeIn("up", "spring", 0.1, 0.75)}>
            <div className="grid grid-cols-3 gap-4">
                {technologies.map((technology) => (
                    <div className={`rounded-full h-[100px] flex justify-center items-center bg-white object-contain`}>
                        <img className="h-full max-w-full rounded-lg" src={technology.icon} alt={technology.name} key={technology.name}/>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Skills