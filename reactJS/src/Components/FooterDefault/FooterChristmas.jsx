import React, { useRef } from "react";
import "./FooterDefault.css";
import logo from "../Images/logoChristmas.png";
import fb from "../Images/icon/fb.png";
import ins from "../Images/icon/ins.png";
import yt from "../Images/icon/yt.png";
import tiktok from "../Images/icon/tiktok.png";
import { NavLink as Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import Accordion from 'react-bootstrap/Accordion';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function FooterChristmas() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        if (form.current) {
            emailjs.sendForm('service_h5odl76', 'template_4054kz9', form.current, 'YGqcQbP5kiXMLa0Qv')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            e.target.reset();
        }

    };

    return (
 <div className="footer" id="christmas overlay" >
            <div className="christmas footer_infor">
                <div className="footer__infor-introduce">
                    <div className="footer__infor-introduce-name name">Về chúng tôi </div>
                    <div className="footer__infor-introduce-infor infor">HKLFashion&reg;
                        là trang mua sắm của thương hiệu HKLFashion&reg;,
                        chuyên các sản phẩm thời trang đẹp, thời thượng
                        giúp bạn tận hưởng cuộc sống thường nhật!</div>
                </div>

                <div className="footer__infor-link">
                    <div className="footer__infor-introduce-name name">Liên kết</div>
                    <div className="footer__infor-introduce-infor infor">
                        HKLFashion&reg; /SỰ KHỞI ĐẦU/<br />
                        Chính sách bảo hành<br />
                        Phương thức thanh toán<br />
                        <a href="https://tinhte.vn/" style={{color:'white'}} target="_blank" rel="noreferrer">Tinhte.vn</a>
                        <a href="https://kenh14.vn/" style={{color:'white'}} target="_blank" rel="noreferrer">Kenh14.vn</a>
                    </div>
                </div>

                <div className="footer__infor-contact">
                    <div className="footer__infor-introduce-name name">Thông tin liên hệ</div>
                    <div className="footer__infor-introduce-infor infor">
                        Trường Đại học Công nghệ Thông tin- ĐHQG TPHCM<br />
                        <b style={{ fontWeight: 500 }}>Số điện thoại:</b> 0987654321<br />
                        <b style={{ fontWeight: 500 }}>Email:</b> hkl.fashion@gmail.com
                    </div>
                </div>

                <div className="footer__infor-logo">
                    <div className="logo-footer">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                            {/* <h2>&nbsp;HKLFashion</h2> */}
                        </Link>
                    </div>
                    <div className="name">Đăng ký nhận tin</div>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="Email" placeholder="Nhập email" name="user_email" />
                        <input type="Submit" value="Đăng ký"></input>
                    </form>
                    <div className="social-icon">
                        <a href="https://www.facebook.com/noithatfudo"> <FacebookRoundedIcon fontSize="large" style={{color:'white'}} /> </a>
                        <a href="https://www.facebook.com/noithatfudo"><YouTubeIcon fontSize="large" style={{color:'white'}}/></a>
                        <a href="https://www.facebook.com/noithatfudo"><InstagramIcon fontSize="large" style={{color:'white'}}/></a>
                        <a href="https://www.facebook.com/noithatfudo"><LinkedInIcon fontSize="large" style={{color:'white'}}/></a>
                    </div>
                </div>
            </div>
            <div className="footer-infor-mobile">
                <Accordion defaultActiveKey="2">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Về chúng tôi</Accordion.Header>
                        <Accordion.Body>
                            HKLFashion&reg;
                            là trang mua sắm của thương hiệu HKLFashion&reg;,
                            chuyên các sản phẩm thời trang đẹp, thời thượng
                            giúp bạn tận hưởng cuộc sống thường nhật!
                        </Accordion.Body>
                    </Accordion.Item>
                    <hr />
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Thông tin liên hệ</Accordion.Header>
                        <Accordion.Body>
                            Trường Đại học Công nghệ Thông tin- ĐHQG TPHCM<br />
                            <b style={{ fontWeight: 500 }}>Số điện thoại: </b>0799684120<br />
                            <b style={{ fontWeight: 500 }}>Email: </b>hkl.fashion@gmail.com
                        </Accordion.Body>
                    </Accordion.Item>
                    <hr />
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Đăng kí nhận tin</Accordion.Header>
                        <Accordion.Body>
                            <form ref={form} onSubmit={sendEmail}>
                                <input type="Email" placeholder="Nhập email" name="user_email" />
                                <input type="Submit" value="Đăng ký"></input>
                            </form>
                            <div className="social-icon">
                                <a href="https://www.facebook.com/noithatfudo"> <img src={fb} alt="fb" /> </a>
                                <a href="https://www.facebook.com/noithatfudo"><img src={ins} alt="fb" /></a>
                                <a href="https://www.facebook.com/noithatfudo"><img src={yt} alt="fb" /></a>
                                <a href="https://www.facebook.com/noithatfudo"><img src={tiktok} alt="fb" /></a>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className="footer_copyright">
                <p>Copyright &copy; 2023 HKLFashion&reg;. Powered by HKL Fashion</p>
            </div>
        </div>
        
       
    );
}

export default FooterChristmas;
