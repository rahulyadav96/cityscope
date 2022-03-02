import { Button, Typography } from "@mui/material"
import { Appbar } from "./Appbar";
import { Box } from "@mui/material"
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export const Home = () => {
    const {auth,user,handleLogOut} = useContext(AuthContext)
    return (
        <Box>
            <Appbar>
                <Box className="leftAppbar">
                    <Typography variant="h5">CityScope</Typography>
                </Box>
                <Box className="rightAppbar">
                    {
                        auth?<Box >
                            <Typography variant="span">{user.user.fullName}</Typography>
                            <Button onClick={handleLogOut}>Log Out</Button>
                            </Box>:<Box>
                                <Link to="/sign-up" style={{textDecoration:"none"}}> <Button variant="text"> Sign Up </Button> </Link>
                                <Link to="/login" style={{textDecoration:"none"}}> <Button variant="text"> Login </Button></Link>
                            </Box>
                    }
                </Box>
            </Appbar>
            <Navbar />
        </Box>
    )
} 