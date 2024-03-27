import { makeStyles } from "@mui/styles";

export default makeStyles({
    Card:{
        width : 350,
        height : 550, 
        "&:hover": {
            "box-border":"0 0 5px rgba(15, 15, 15, 0.26)",
             transform: "translateY(-0.5vmax)",
        }
    },
    image:{
        width:"100%",
        height: 400
    },
    links:{
        textDecoration: "none",
    }
        
})