import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    '@keyframes animationPreload': {
        from: {transform: 'rotate(-90deg)',},
        to: {transform: 'rotate(-450deg)',},
    },
    root: {
        position: 'relative',
        height: '100px',
        width: '100px',
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        background: 'conic-gradient(from 180deg at 50% 50%, #3D9ECC 0deg, rgba(225, 245, 254, 0.07) 360deg);',
        borderRadius: 100,
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
        top: '5px',
        left: '5px',
        height: '90px',
        width: '90px',
        background: 'white',
        borderRadius: 100,
    }
});


function Preloader() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <span className={classes.cirlce}></span>
        </div>
    );

}

export default Preloader;
