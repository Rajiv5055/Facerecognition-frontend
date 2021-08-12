import React from 'react';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Typography from '@material-ui/core/Typography';

const Footer = () =>{
   return(
   	<div>
	   	<div>
	   	  <h3> CopyRight ©<Link href="https://rajiv5055.github.io/portfolio/Portfolio/index.html" color="textSecondary">Rajiv Nayan</Link></h3>
	   	</div>
   	<div>
   	    <Link variant="body1" color="textSecondary" href="https://github.com/Rajiv5055">
          <GitHubIcon />
        </Link>
        <Link variant="body1" color="textSecondary" href="https://www.instagram.com/rajeev__nayan/?hl=en">
         <InstagramIcon />
        </Link>
        <Link variant="body1" color="textSecondary" href="https://www.facebook.com/profile.php?id=100008857086332">
          <FacebookIcon />
        </Link>
        <Link variant="body1" color="textSecondary" href="https://www.linkedin.com/in/rajiv-nayan-62a791146/">
          <LinkedInIcon />
        </Link>
   	</div>
   	</div>
   );
}

export default Footer;