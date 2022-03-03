import { Box, Button, Card, CardContent, Container, Grid, Input, MenuItem, Select, TextareaAutosize, Typography } from "@mui/material"
import { Appbar } from "./Appbar";
import { Link } from 'react-router-dom';
import { useContext, useState } from "react";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';

import { AuthContext } from "../context/AuthContext";
import axios from "axios";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export const Dashboard = () => {
    const { user } = useContext(AuthContext);

    const [open, setOpen] = useState(false);
    const [articleData, setArticleData] = useState({
        author: user.user.fullName,
        img: "",
        title: "",
        short_Summary: "",
        content_Categary: "",
        city: "",
        time_to_read: ""
    })

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setArticleData({ ...articleData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/articles',articleData,{
            headers: {
              'encType': 'multipart/form-data'
            }
        })
        .then(res=>{
            alert("article added")
            setOpen(!open);
        })
        .catch(err=>console.log(err))
        //console.log(articleData);
    }

    return (
        <Box>
            <Appbar>
                <Link to="/" style={{ textDecoration: "none" }}> <Button variant="text">Home</Button> </Link>
            </Appbar>
            <br />
            <Box>
                <Container style={{ textAlign: "right" }}>
                    <Button variant="contained" onClick={handleOpen}>Add Article</Button>
                </Container>
                <BootstrapDialog
                    onClose={handleOpen}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleOpen}>
                        Add Article
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                        <Box>
                            <form style={{ display: "flex", flexDirection: "column", gap: "15px" }} onSubmit={handleSubmit} >

                                <Box style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "12px" }} required>
                                    <label>Image</label>
                                    <input type="file" name="img" onChange={handleChange} required />
                                </Box>
                                <Box style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "12px" }} required>
                                    <label>Title</label>
                                    <TextField
                                        type="text"
                                        name="title"
                                        placeholder="Content Title"
                                        value={articleData.title}
                                        onChange={handleChange}
                                        required
                                    />
                                </Box>
                                <Box style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "12px" }} required>
                                    <label>Short Summary</label>
                                    <TextareaAutosize
                                        type="text"
                                        name="short_Summary"
                                        style={{ width: "inherit", padding: "15px", resize: "none" }}
                                        minRows={4}
                                        aria-label="maximum height"
                                        placeholder="Message"
                                        value={articleData.short_Summary}
                                        onChange={handleChange}
                                        required
                                    />
                                </Box>
                                <Box style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "12px" }} required>
                                    <label>Content Category</label>
                                    <Select name="content_Categary" value={articleData.content_Categary} onChange={handleChange} required>
                                        <MenuItem value="Delhi">Delhi</MenuItem>
                                        <MenuItem value="tech">Technology</MenuItem>
                                        <MenuItem value="health">Health And Education</MenuItem>
                                        <MenuItem value="lifestyle">LifeStyle</MenuItem>
                                    </Select>
                                </Box>
                                <Box style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "12px" }} required>
                                    <label>City</label>
                                    <Select name="city" value={articleData.city} onChange={handleChange} required>
                                        <MenuItem value="Delhi">Delhi</MenuItem>
                                        <MenuItem value="Mumbai">Mumbai</MenuItem>
                                        <MenuItem value="Banglore">Banglore</MenuItem>
                                        <MenuItem value="Lucknow">Lucknow</MenuItem>
                                    </Select>
                                </Box>
                                <Box name="time_to_read" style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "12px" }} required>
                                    <label>Time to read</label>
                                    <TextField type="text"
                                        name="time_to_read"
                                        value={articleData.time_to_read}
                                        onChange={handleChange}
                                        required
                                    />
                                </Box>


                                <input type="submit" value="Submit" />
                            </form>
                        </Box>

                    </DialogContent>
                    <DialogActions>
                    </DialogActions>
                </BootstrapDialog>
            </Box>
            <br />
            <Container>
                <Box>
                    <Grid spacing={2}>
                        <Grid>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">This is Dashboard</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}