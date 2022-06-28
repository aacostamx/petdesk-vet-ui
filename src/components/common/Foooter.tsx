import React from "react";

interface FooterProps {
    year: number;
}

const Footer: React.FC<FooterProps> = ({ year }) => {
    return (
        <div>
            <footer>
                <p className="footer">
                    Antonio Acosta Murillo - {year} - AACOSTA
                </p>
            </footer>
        </div>
    );
}
export default Footer;