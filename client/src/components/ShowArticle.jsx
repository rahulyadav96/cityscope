import {Box, CardContent, CardMedia, Container,Card, Grid, Typography} from "@mui/material"
import { useContext } from "react"
import { ArticleContext } from "../context/ArcticleContext"
export const ShowArticle = ()=>{
    const {showArticle, articles} = useContext(ArticleContext)
    return (
        <Container>
            <Grid container spacing={2}>
                {
                    articles?.filter(item=> {
                        if (showArticle=="stories") return item;
                        else if(showArticle == item.content_Categary) return item
                    }).map(item =>
                <Grid item xs={3} >
                    <Card>
                        <CardMedia 

                            component="img"
                            image ="https://source.unsplash.com/random/200x200?sig=3"
                            alt={item.title}
                        />

                        
                        <CardContent>
                            <Box>
                            <Typography variant="h6">{item.title}</Typography>

                            </Box>
                            <Box>

                            <Typography variant="span">{item.auther}</Typography> &nbsp;
                            <Typography variant="span">{item.time_to_read} mins</Typography>
                            </Box>
                            <Box>

                            <Typography variant="p">{item.short_Summary}</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                        
                        )
                }
            </Grid>
        </Container>
    )
}