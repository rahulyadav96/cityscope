import { Button, Typography } from "@mui/material"
import { Appbar } from "./Appbar";
import { Box } from "@mui/material"
import { Navbar } from "./Navbar";
export const Home = () => {
    return (
        <Box>
            <Appbar>
                <div className="leftAppbar">
                    <Typography variant="h5">CityScope</Typography>
                </div>
                <div className="rightAppbar">
                    <Button variant="text"> Login </Button>
                </div>
            </Appbar>
            <Navbar />
        </Box>
    )
} 