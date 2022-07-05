import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    '@keyframes animationPreload': {
        from: {transform: 'rotate(-90deg)',},
        to: {transform: 'rotate(-450deg)',},
    },
    root: {
        position: 'relative',
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        background: 'conic-gradient(from 180deg at 50% 50%, #3D9ECC 0deg, rgba(225, 245, 254, 0.07) 360deg);',
        transform: 'rotate(-90deg)',
        animation: '$animationPreload 4s linear infinite',
        // animationName: '$animationPreload',
        // animationDuration: '4s',
        // animationIterationCount: 'infinite',
        // animationDelay: '0s',
        // animationTimingFunction: 'linear'
        // animationTimingFunction: 'ease-in-out'
    },
    cirlce: {
        position: 'absolute',
        // top: '5px',
        // left: '5px',
        // height: '90px',
        // width: '90px',
        background: 'white',
        borderRadius: 100,
    }
});


const Preloader = ({weight = 20, size = 100}) => {
    const classes = useStyles();
    const maxWeight = size / 2;
    const wght = weight >= maxWeight ? maxWeight : weight;

    return (
        <div className={classes.root} style={{
            borderRadius: `${size}px`,
            height: `${size}px`,
            width: `${size}px`,
        }}>
            <span className={classes.cirlce} style={{
                top: `${wght}px`,
                left: `${wght}px`,
                height: `${size - 2 * wght}px`,
                width: `${size - 2 * wght}px`,
                borderRadius: `${size}px`
            }
            }/>
        </div>
    );

}

export default Preloader;
