import { Container } from "react-bootstrap";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <>
            <Container fluid className="bg-dark text-white text-center p-2" style={{maxHeight:"130px"}}>
                <div
                    className="d-flex flex-row justify-content-center mx-auto"
                    style={{
                        maxWidth: "300px",
                        borderBottom: "1px solid rgba(255,255,255,0.2)",
                        paddingBottom: "0px",
                        marginBottom: "0px"
                    }}
                >
                    <FaFacebookSquare
                        style={{
                            fontSize: "40px",
                            margin: "5px",
                            color: "#4267B2",
                            cursor: "pointer"
                        }}
                        className="hover-opacity"
                    />
                    <FaInstagramSquare
                        style={{
                            fontSize: "40px",
                            margin: "5px",
                            color: "#E1306C",
                            cursor: "pointer"
                        }}
                        className="hover-opacity"
                    />
                    <FaXTwitter
                        style={{
                            fontSize: "40px",
                            margin: "5px",
                            color: "#1DA1F2",
                            cursor: "pointer"
                        }}
                        className="hover-opacity"
                    />
                </div>
                <p
                    className="mt-4"
                    style={{
                        fontSize: "18px",
                        fontWeight: "300",
                        opacity: "0.8"
                    }}
                >
                    © 2024 Shopify, Making Life Easy
                </p>
            </Container>


        </>
    )
}
export default Footer;