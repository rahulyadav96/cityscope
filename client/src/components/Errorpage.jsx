import { Typography, Button } from "@mui/material"
import { Box } from "@mui/system"
import { Link } from "react-router-dom"
export  const Errorpage = ()=>{
    return (
        <Box>
            <Link to="/" style={{textDecoration:"none"}}> <Button variant="contained">Go Back to Home</Button> </Link>
            <Typography variant="h3" style={{textAlign:"center", color:"red"}}>Opps.. this page does not exist</Typography>
        </Box>
    )
}