import "./style.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
export default function Intro() {
    return (
        <div className = "introcontainer">
            <div className = "row">
                <div className = "col-md-3">
                </div>
                <div className = "col-md-6">
                    <h1 className = "introname">Mallikarjun Pidaparthi</h1>

                    <h5>Passionate about changing the world with technology</h5>

                    <GitHubIcon className = "introicon iconone"/>
                    <FacebookIcon className = "introicon"/> 
                    <InstagramIcon className = "introicon"/>
                    <TwitterIcon className = "introicon"/>
                    <LinkedInIcon className = "introicon"/><br></br>
                    <button className = "introbutton">More about me</button>
                </div>
                <div className = "col-md-3">
                </div>
            </div>
        </div>
    );
}