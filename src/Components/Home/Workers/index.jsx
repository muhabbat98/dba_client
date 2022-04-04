import { CardMedia, Container, Paper, Typography, Card, CardActionArea, CardContent,Box } from "@mui/material"
import Header from '../../../assets/header.jpg'
export default function Workers (){
    return(
        <Container className="team-members" >
            <Typography variant="h2" component="h3" align="center">Meet The Partners</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center" m={5}>
                <Paper p={5}>
                    <Card>
                        <CardActionArea>
                            <CardMedia className="team-picture" image={Header} />
                        </CardActionArea>
                        <CardContent>
                            <Typography variant="h5" component="p">
                                Somebody
                            </Typography>
                        </CardContent>
                    </Card>
                </Paper>
                <Paper>
                    <Card>
                        <CardActionArea>
                            <CardMedia className="team-picture" image={Header} />
                        </CardActionArea>
                        <CardContent>
                            <Typography variant="h5" component="p">
                                Somebody
                            </Typography>
                        </CardContent>
                    </Card>
                </Paper>
                <Paper>
                    <Card>
                        <CardActionArea>
                            <CardMedia className="team-picture" image={Header} />
                        </CardActionArea>
                        <CardContent>
                            <Typography variant="h5" component="p">
                                Somebody
                            </Typography>
                        </CardContent>
                    </Card>
                </Paper>
            </Box>
            
        </Container>
    )
}