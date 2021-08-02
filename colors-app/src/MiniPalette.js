import { withStyles } from '@material-ui/styles';
import React from 'react';
import styles from './styles/MiniPalette';
import DeleteIcon from '@material-ui/icons/Delete';

function MiniPalette(props) {
    const {classes, paletteName, emoji, colors, handleClick, handleDelete} = props;
    const miniColorBoxes = colors.map( color => (
        <div className={classes.miniColor}
             style = {{backgroundColor: color.color }}
             key = {color.name}
        >

        </div>
    ));

    const deletePalette = (e) => {
        e.stopPropagation();
        handleDelete(props.id)
    }
    
    return (  
        <div className={classes.root} onClick={handleClick}>    
        <DeleteIcon 
            className={classes.deleteIcon} 
            style={{transition: 'all 0.3s ease-in-out'}} 
            onClick={deletePalette}
        />
        <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <div className={classes.title}>
                {paletteName}
                <span className={classes.emoji}>{emoji}</span>
            </div>
            
        </div>
    )
}

export default withStyles(styles)(MiniPalette);