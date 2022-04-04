import { Container } from "@mui/material";
import { Link } from "react-router-dom";

function Home (){
    return(
       <div className="home-about">
           <Container>
               <div className="home-container">
                    <div className="home-about-text">
                        <h2>
                                Explore What We Are Doing Better
                        </h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto similique sequi ipsa eaque voluptates atque reprehenderit, recusandae doloribus voluptas fugiat animi. Minus vitae ex, quia numquam cumque neque eaque excepturi?
                        </p>
                        <Link to="/about">Learn more</Link>
                    </div>
                    <div className="home-about-card">
                        <div>
                            <h4>	Civil Litigation </h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio necessitatibus quidem optio consequuntur totam esse numquam facere adipisci sint iusto ratione sapiente doloremque hic, aspernatur molestiae ad. Quisquam, illo illum.
                            </p>
                        </div>
                        <div>
                            <h4>	Civil Litigation </h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio necessitatibus quidem optio consequuntur totam esse numquam facere adipisci sint iusto ratione sapiente doloremque hic, aspernatur molestiae ad. Quisquam, illo illum.
                                </p>
                        </div>
                        <div>
                            <h4>	Civil Litigation </h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio necessitatibus quidem optio consequuntur totam esse numquam facere adipisci sint iusto ratione sapiente doloremque hic, aspernatur molestiae ad. Quisquam, illo illum.
                            </p>
                        </div>
                        <div>
                            <h4>	Civil Litigation </h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio necessitatibus quidem optio consequuntur totam esse numquam facere adipisci sint iusto ratione sapiente doloremque hic, aspernatur molestiae ad. Quisquam, illo illum.
                            </p>
                        </div>
                    </div>
               </div>
           </Container>
       </div>
    )
}
export default Home