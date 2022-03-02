import { Box, Button, Card, CardContent, Container, Grid, Typography } from "@mui/material"
import { Appbar } from "./Appbar";
import { Link } from 'react-router-dom';
import { useState } from "react";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
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
                            <Typography variant="h2">
                                Rahul
                            </Typography>
                        </Box>
                       
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleOpen}>
                            Save changes
                        </Button>
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