import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useContext, useState } from 'react';
import { Container } from '@mui/material';
import { ArticleContext } from '../context/ArcticleContext';
export const Navbar = () => {
    const {showArticle, setShowArticle} = useContext(ArticleContext);
    const handleChange = (event, newValue) => {
        console.log(newValue)
        setShowArticle(newValue)
    }
    return <>
        <Container>

            <Box>
                <Tabs value={showArticle} onChange={handleChange} indicatorColor="secondary" >
                    <Tab value="stories" label="Stories so far" />
                    <Tab value="lifestyle" label="Lifestyle" />
                    <Tab value="health" label="Healthcare and Education" />
                    <Tab value="cities" label="Cities" />
                    <Tab value="tech" label="Technology" />
                    <Tab value="world" label="The World - Explained" />
                    <Tab value="art" label="Art and Culture" /> 
                </Tabs>
            </Box>
        </Container>
    </>
} 