import { Container, Grid, List, ListItem, ListItemIcon, ListItemText, } from '@material-ui/core'
import { Instagram, Phone, Telegram } from "@material-ui/icons";
import { Link } from "react-router-dom";


function Home (){

    
    return(<>
        <div className="home-page-welcome main-footer">
        <Container>
                <Grid container  spacing={3} >
                    <Grid item xs={12} sm={6}>
                        
                        <List>
                            <ListItem style={{color:'var(--secondary-text-color)'}}>
                                Social links
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Instagram/>
                                </ListItemIcon>
                                <ListItemText>
                                    <Link to="https://www.instagram.com/">Instagram</Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Telegram/>
                                </ListItemIcon>
                                <ListItemText>
                                    <Link to="https://www.instagram.com/">Telegram</Link>
                                </ListItemText>
                            </ListItem>
                            
                            <ListItem style={{color:'var(--secondary-text-color)'}}>
                                Address:
                            </ListItem>
                            <ListItem>
                                <address>
                                    45 O'zbekiston shoh ko'chasi, Тошкент
                                </address>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Phone/>
                                </ListItemIcon>
                                <ListItemText>
                                    +998 71 232 61 05
                                </ListItemText>
                            </ListItem>
                        
                        </List>
                    </Grid>
                   
                    <Grid item xs={12} sm={6}>
                        
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11987.672743834837!2d69.2548674!3d41.3106434!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc78956a4447b32d1!2sDavlat%20Boshqaruv%20Akademiyasi!5e0!3m2!1sru!2s!4v1631688934071!5m2!1sru!2s" width="100%" height="450" style={{border:0 }}allowFullScreen="true" title="dba" loading="lazy"></iframe>
                       
                    </Grid>
                </Grid>
            </Container>
        </div>
        
    </>)
}
export default Home