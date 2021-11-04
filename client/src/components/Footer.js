import React from 'react'
import envelope from '../static/envelope.e7283f94.svg'
import './Footer.css'; 

export default function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <div className="media">
                    <div className="p-1">
                    </div>
                    <div className="media-body">
                        <div className="h5 p-1">
                            <img src={envelope} alt="contact us" className="contact" />  <strong>Email:</strong> <a href="mailto:email@domain.com">email@domain.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
