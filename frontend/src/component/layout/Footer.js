import react from 'react';
import { Container, IconButton, Typography, Box, Toolbar } from '@mui/material';
import { FaInstagram } from "react-icons/fa6";
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    img: {
        width: "9.5vmax",
        heigth: "1vmax",
        border: "none"
    },
    container: {
        "background-color": "rgb(34, 33, 33)",
         paddingTop:"1vmax"
    },
    "img-container": {
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        color:"white",
        fontSize: "0.8vmax",
        "font-family": "Roboto",
        textDecoration:"none"
    }
}))

const Footer = () => {
    const classes = useStyles();
    return (<>
        <Toolbar className={classes.container}>
            <Box flexGrow={1}>
                <Typography variant="h8"className={classes.text}>DOWNLOAD OUR APP</Typography>
                <Typography className={classes.text}>Download App for Android and IOS mobile phone</Typography>
                <div className={classes['img-container']}>
                    <img className={classes.img} src="https://cdn.pixabay.com/photo/2021/09/22/16/07/google-play-6647242_1280.png" />
                    <img className={classes.img} src="https://cdn.pixabay.com/photo/2021/09/22/16/07/google-play-6647242_1280.png" />
                </div>
            </Box>
            <Box flexGrow={1}>
                <Typography variant='h1' sx={{color:"red"}}>ECOMMERCE.</Typography>
                <Typography className={classes.text}>High Quality is our first priority</Typography>
                <Typography className={classes.text}>Copyrights 2021 @ReenaYadav</Typography>

            </Box>
            <Box flexGrow={1.7}>
                <Typography variant='h5'className={classes.text} ><Link style={{"color":"white"}} to="/">Follow Us</Link></Typography>
                <Typography ><Link  to="/" className={classes.text}>Instagram</Link></Typography>
                <Typography ><Link  to="/" className={classes.text}>Youtube</Link></Typography>
                <Typography ><Link  to="/" className={classes.text}>Facebook</Link></Typography>

            </Box>
        </Toolbar>
    </>)
}

export default Footer;