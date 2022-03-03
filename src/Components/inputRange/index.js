import React from 'react';
import styles from './index.module.css'

const InputRange = ({value, color, setValue, max = '100', min = '0'}) => {

    const Fill = {
        width: `${(value / max) * 100}%`
    }

    function convertColor(color) {

        if(color.substring(0,1) == '#') {
            color = color.substring(1);
        }

        let rgbColor = {};
        rgbColor.r = parseInt(color.substring(0,2),16);
        rgbColor.g = parseInt(color.substring(2,4),16);
        rgbColor.b = parseInt(color.substring(4),16);

        // return rgbColor;
    }

    convertColor(color)

    return (
            <div className={styles.wrapper}>
                <span className={styles.bar}>
                    <span
                        style={Fill}
                        className={styles.fill}/>
                </span>
                <input
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    className={styles.slider}
                    type="range"
                    min={min}
                    max={max}/>
            </div>
    );
};

export default InputRange;