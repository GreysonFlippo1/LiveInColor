import React from 'react';

export default function Social(){
    return(
        <div className="footer">
            <div className="socialLinks">
                <a href="https://twitter.com/itsliveincolor"  target="_blank" rel="noopener noreferrer"><div id="twitter" className="socialLink"/></a>
                <a href="https://www.youtube.com/redirect?q=https%3A%2F%2Fwww.instagram.com%2Fliveincolormedia%2F%3Fhl%3Den&event=channel_description&redir_token=hev_OXi7-w1uc48UjNUfSLR8uZx8MTU3MTc5MzY0NEAxNTcxNzA3MjQ0"  target="_blank" rel="noopener noreferrer"><div id="instagram" className="socialLink"/></a>
                <a href="https://www.youtube.com/redirect?q=https%3A%2F%2Fsoundcloud.com%2Filiveincolor&event=channel_description&redir_token=hev_OXi7-w1uc48UjNUfSLR8uZx8MTU3MTc5MzY0NEAxNTcxNzA3MjQ0"  target="_blank" rel="noopener noreferrer"><div id="soundcloud" className="socialLink"/></a>
                <a href="https://www.youtube.com/channel/UCh4NcC_WCUwCDCu5t2DuT5A/about"  target="_blank" rel="noopener noreferrer"><div id="youtube" className="socialLink"/></a>
                <div id="email">iliveincoloralways@gmail.com</div>
            </div>
            <div className="socialLinks" id="divider">
                <div className="developerInfo">
                    Developer Info:
                    <br/>
                    <p className="small">
                        I am looking for a nice job in the Chicago area :)
                    </p>
                </div>
                <div className="developerInfo developerEmail">
                    <a href="https://www.linkedin.com/in/greysonflippo/" target="_blank" rel="noopener noreferrer">
                        LinkedIn: greysonflippo
                    </a>
                    <br/>
                    <p className="small">
                        greysonflippo@gmail.com
                    </p>
                </div>
            </div>
        </div>
    )
}