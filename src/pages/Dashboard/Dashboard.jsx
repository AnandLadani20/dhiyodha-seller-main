// mui
import { Box, Button, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";
import useMediaQuery from "@mui/material/useMediaQuery";
// Assets
import Dhiyodha from "../../files/icons/Dhiyodha white.png";
import MainDhiyodha from '../../files/icons/Dhiyodha-logo.png'
import HeroImg from '../../files/images/Untitled-1 (1).png'
import { ReactComponent as NextIcon } from '../../files/icons/NextIcon.svg'
import productVideo from '../../files/video/Production.mp4'
import icon1 from '../../files/icons/icon-img/product-seller.png'
import icon2 from '../../files/icons/icon-img/service-seller.png'
import icon3 from '../../files/icons/icon-img/skills-seller.png'
import icon4 from '../../files/icons/icon-img/mentor-3.png'
import womenIcon from '../../files/icons/icon-img/woman.png'
import womenSupportIcon from '../../files/icons/icon-img/woman-support.png'
import RegisterIcon from '../../files/icons/icon-img/register.png'
import BusinessCardIcon from '../../files/icons/icon-img/business-card.png'
import ProductServiceIcon from '../../files/icons/icon-img/product.png'
import EarnMoneyIcon from '../../files/icons/icon-img/salary (1).png'
import FamilyIcon from '../../files/icons/icon-img/family.png'
import BankIcon from '../../files/icons/icon-img/bank (1).png'
import AuditIcon from '../../files/icons/icon-img/scale_1200.png'
// react
import { useState } from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import SvgAnimation from './SvgAnimation';
// css
import './index.css'


const Dashboard = () => {
    const [active, setActive] = useState("DhiYodha");
    const [Index, setIndex] = useState(0);
    const flexStyle = {
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
    }
    // breakpoints
    const matches = useMediaQuery((theme) => theme.breakpoints.down("md"));
    const matchesLG = useMediaQuery((theme) => theme.breakpoints.down("lg"));


    // const MenuStyle = {
    //   // margin: "5px",
    //   // padding: "3px",
    //   // "@media (min-width:0px) and (max-width:600px)":{
    //   //   backgroundColor:"red"
    //   // }
    // }

    const StyledBox = styled(Box)`
      padding: 20px;
       border: 1px solid gray;
      border-radius: 4px;

     &:hover {
        box-shadow:0px 0px 5px grey
          }
        @media (min-width:0px) and (max-width:600px){
            // background-color:red;
        }
          `
    const arr1 = [
        {
            productVideo: productVideo,
            dhiyodhaLogo: MainDhiyodha,
            title: "Dhiyodha",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.veniam velonsectetur nam a fugiatconsectetur Eos magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
        },
        {
            productVideo: productVideo,
            dhiyodhaLogo: MainDhiyodha,
            title: "DhiShop",
            desc: "Lorem ipsum dolor sit amet, consectetur magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
        },
        {
            productVideo: productVideo,
            dhiyodhaLogo: MainDhiyodha,
            title: "DhiChef",
            desc: "Lorem ipsum dolor sit amet, consectetur magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
        },
        {
            productVideo: productVideo,
            dhiyodhaLogo: MainDhiyodha,
            title: "DhiCare",
            desc: "Lorem ipsum dolor sit amet, consectetur magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
        },
        {
            productVideo: productVideo,
            dhiyodhaLogo: MainDhiyodha,
            title: "DhiArtist",
            desc: "Lorem ipsum dolor sit amet, consectetur magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
        },
        {
            productVideo: productVideo,
            dhiyodhaLogo: MainDhiyodha,
            title: "DhiSkill",
            desc: "Lorem ipsum dolor sit amet, consectetur magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
        },
        {
            productVideo: productVideo,
            dhiyodhaLogo: MainDhiyodha,
            title: "DhiGo",
            desc: "Lorem ipsum dolor sit amet, consectetur magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
        },
        {
            productVideo: productVideo,
            dhiyodhaLogo: MainDhiyodha,
            title: "DhiFace",
            desc: "Lorem ipsum dolor sit amet, consectetur magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
        },
        {
            productVideo: productVideo,
            dhiyodhaLogo: MainDhiyodha,
            title: "DhiBank",
            desc: "Lorem ipsum dolor sit amet, consectetur magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
        }
    ]


    return (
        <>
            <Box height="100vh" px={{ lg: "70px", xs: "25px", xl: "120px" }} >
                <Grid container
                    height="6rem"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Grid item md={10}>
                        <img src={Dhiyodha} alt="Dhiyodha" style={{ height: "4.5rem" }} />
                    </Grid>
                    <Grid item md={1} sx={{ position: "relative" }}>
                        <Grid container justifyContent="end" sx={{ position: "absolute" }}>
                            <Grid item xs={12} m="5px" p="3px" sx={flexStyle}>
                                <NextIcon style={{ marginRight: "5px" }} />
                                <Link to='#'>Home</Link>
                            </Grid>
                            <Grid item xs={12} m="5px" p="3px" sx={flexStyle}>
                                <NextIcon style={{ marginRight: "5px" }} />
                                <Link to='#'>Services</Link>
                            </Grid>
                            <Grid item xs={12} m="5px" p="3px" sx={flexStyle}>
                                <NextIcon style={{ marginRight: "5px" }} />
                                <Link to='#'>Finance</Link>
                            </Grid>
                            <Grid item xs={12} m="5px" p="3px" sx={flexStyle}>
                                <NextIcon style={{ marginRight: "5px" }} />
                                <Link to='#'>Support</Link>
                            </Grid>
                            <Grid item xs={12} m="5px" p="3px" sx={flexStyle}>
                                <NextIcon style={{ marginRight: "5px" }} />
                                <Link to='#'>Contact</Link>
                            </Grid>
                            <Grid item xs={12} m="5px" p="3px" sx={flexStyle}>
                                <NextIcon style={{ marginRight: "5px" }} />
                                <Link to='#'>Login</Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid
                    container
                    height="calc(100vh - 6rem)"
                    alignItems="center"
                    justifyContent='space-evenly'
                >
                    <Grid
                        item xs={12} md={6} lg={6}
                    >
                        <Typography variant="h3" >
                            Be Dhiyodha By<br /> Launching Your Business
                        </Typography>
                        <Typography py={2}>
                            Women are the Yodha, She can be the Strength of Nation for Selling
                            Your Product, Services, Skill and Experience.
                        </Typography>
                        <Button fullWidth={false}>Start Selling</Button>
                    </Grid>
                    <Grid
                        item xs={12} md={6} lg={6}
                    >
                        <div className='selling-mainpage-hero-img-area'>
                            <div className='hero-img-area-rounded'>
                                <div className='hero-img-area-rounded-cicleicon4'>
                                    <span className='cicleicon4Style'></span>
                                    {/* <FaRegCreditCard className='cicleicon4Style' /> */}
                                </div>
                                <div className='hero-img-area-rounded-cicleicon5'>
                                    {/* <BsCart4 className='cicleicon5Style' /> */}
                                    <span className='cicleicon5Style'>cart</span>
                                </div>
                                <div className='hero-img-area-rounded-cicleicon6'>
                                    <span className='cicleicon6Style'>currency</span>
                                    {/* <BsCurrencyRupee className='cicleicon6Style' /> */}
                                </div>
                            </div>
                            <div className='hero-img-area-innerchild-rounded'>
                                <div className='hero-img-area-rounded-cicleicon'></div>
                                <div className='hero-img-area-rounded-cicleicon2'></div>
                                <div className='hero-img-area-rounded-cicleicon3'></div>
                            </div>
                            <div className='hero-img-area-inner-rounded'>
                                <img src={HeroImg} alt='shopping' />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>

            <Box maxWidth="lg" mx="auto" pb={3}>
                <Box display="grid" gridTemplateColumns="repeat(4,1fr)" gap={2}>
                    {[
                        { i: icon1, q: 3000, t: "product-seller" },
                        { i: icon2, q: 5000, t: "service-seller" },
                        { i: icon3, q: 4000, t: "skills-seller" },
                        { i: icon4, q: 2000, t: "mentores-seller" },
                    ].map((a, i) => (
                        <Box
                            key={i}
                            sx={{ background: "linear-gradient(to right bottom, #0c62e1, #0998d4, #33bba1)" }}
                            // bgcolor="background.paper"
                            boxShadow={4}
                            p={1}
                            borderRadius={3}
                        >
                            <Box
                                height="4rem"
                                width="4rem"
                                mx="auto"
                            >
                                <img src={a.i} alt={a.t} height="100%" />
                            </Box>
                            <Typography textAlign="center" pt={1}>
                                {a.q}
                            </Typography>
                            <Typography textAlign="center">{a.t}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box px={{ lg: "70px", xs: "25px", xl: "120px" }} mt={4} pb={3}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography textAlign="center" variant="h3" fontWeight={500}>
                            DhiYodha Family
                        </Typography>
                        <Typography maxWidth="md" mx="auto" pt={1}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
                            soluta consequatur voluptatum nam eaque cumque dolore iusto, ex
                            nesciunt. A officia vitae incidunt laborum aliquam veritatis,
                            architecto molestiae esse eos.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box bgcolor="background.paper" mt={4}>
                            <SvgAnimation />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box px={{ lg: "70px", xs: "25px", xl: "120px" }} mt={4} pb={3}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography textAlign="center" variant="h3" fontWeight={500}>
                            Let's Start Your Product
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={9} md={11} >
                        <Box maxWidth="lg" mx="auto">
                            <Box
                                display="flex"
                                flexWrap={{ md: "nowrap", xs: "wrap" }}

                                gap={1}
                                mt={2}
                                p={0.3}
                                border="1px solid #5462E6"
                                borderRadius="100vmax"
                            >
                                {[
                                    "DhiYodha",
                                    "DhiShop",
                                    "DhiChef",
                                    "DhiCare",
                                    "DhiArtist",
                                    "DhiSkill",
                                    "DhiGo",
                                    "DhiFace",
                                    "DhiBank",
                                ].map((a, i) => (
                                    <Button
                                        variant={active === a ? "contained" : "text"}
                                        onClick={() => {
                                            setActive(a)
                                            setIndex(i)
                                        }}
                                        fullWidth={matches ? false : true}
                                        sx={{ borderRadius: "100vmax" }}

                                    >
                                        {a}
                                    </Button>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container mt={{ xs: 2, md: 4 }} alignItems="start" justifyContent="space-evenly">
                    <Grid item xs={12} md={5} >
                        <Box>
                            <VideoPlayer productVideo={arr1[Index].productVideo} dhiyodhaLogo={arr1[Index].dhiyodhaLogo} title={arr1[Index].title} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <StyledBox>
                            <Box sx={{
                                height: "80px",
                                width: "80px",
                                borderRadius: "50%",
                                backgroundColor: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <img src={arr1[Index].dhiyodhaLogo} alt="dhiyodha" style={{ height: "3.5rem" }} />
                            </Box>
                            <Typography variant="h4">{arr1[Index].title}</Typography>
                            <Typography pt={1}>
                                {arr1[Index].desc}
                            </Typography>
                        </StyledBox>
                    </Grid>
                </Grid>
            </Box>

            <Box px={{ lg: "70px", xs: "25px", xl: "120px" }} mt={4} pb={3}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography textAlign="center" variant="h3" fontWeight={500}>
                            Let's Start Your Product
                        </Typography>
                        <Typography textAlign="center" pt={1}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
                            soluta consequatur voluptatum nam eaque cumque dolore iusto, ex
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <div className='flow-chart-box'>
                            <div className='work-area-main-box'>
                                <div className='charted-mainbox2-area'>
                                    <div className='charted-box2-area'>
                                        <div className='first-chartedlayout2-box2'>DhiShop</div>
                                        <div className='middle-chartedlayout2-box2'>DhiChef</div>
                                        <div className='third-chartedlayout2-box2'>DhiCare</div>
                                        <div className='fourth-chartedlayout2-box2'>DhiArtist</div>
                                    </div>
                                </div>
                                <div className='charted-box1-area'>
                                    <div className='flow-start-area'><img src={womenIcon} alt='' /><h5>Women</h5></div>
                                    <div className='first-chartedlayout-box'>Register<br /> Business<div className='register-icon-imgbg'><img src={RegisterIcon} alt='' /></div></div>
                                    <div className='flow-chart-gradient-orange'><div className='middle-chartedlayout-box '>
                                        <h6>  Register Business <br />On<br /> Dhiyodha</h6>
                                        <div className='charted-flow-video-box'>
                                            <p className='charted-flow-video'>video play</p>
                                            {/* <AiFillPlayCircle  /> */}
                                        </div>
                                    </div>
                                    </div>
                                    <div className='third-chartedlayout-box'>Inspector Will<br /> Audit Business<div className='audit-icon-imgbg'><img src={AuditIcon} alt='' /></div></div>
                                    <div className='flow-end-area'><img src={womenSupportIcon} alt='' /><h5>Support<br /> Team</h5></div>

                                </div>
                                <div className='charted-box3-area'>
                                    <div className='first-chartedlayout3-box3'>DhiSkill</div>
                                    <div className='middle-chartedlayout3-box3'>DhiGo</div>
                                    <div className='third-chartedlayout3-box3'>DhiFace</div>
                                    <div className='fourth-chartedlayout3-box3'>DhiBank</div>
                                </div>
                                <div className='user-business-flow'>
                                    <div className='flow-chart-gradient-blue'><div className='fourth-chartedlayout-box1 flow-box-style'> Invest Money<br /> In DhiBank <div className='dhiyodhaBank-icon-imgbg'><img src={BankIcon} height={40} alt='' /></div></div></div>
                                    <div className='flow-chart-gradient-blue'><div className='fourth-chartedlayout4-box2 flow-box-style'>Earn <br />Money <div className='earnMoney-icon-imgbg'><img src={EarnMoneyIcon} height={40} alt='' /></div></div></div>
                                    <div className='fourth-chartedlayout4-box3 '>Welcome<br className='media-none' /> To<br /> Dhiyodha Family <div className='dhiyodhafamily-icon-imgbg'><img src={FamilyIcon} alt='' /></div></div>
                                    <div className='flow-chart-gradient-blue'><div className='fourth-chartedlayout4-box4 flow-box-style'> ProductListing<br /> & Services <div className='productService-icon-imgbg'><img src={ProductServiceIcon} height={40} alt='' /></div></div></div>
                                    <div className='flow-chart-gradient-blue'><div className='fourth-chartedlayout4-box5 flow-box-style'> Dhiyodha<br /> Business Card <div className='businessCard-icon-imgbg'><img src={BusinessCardIcon} height={40} alt='' /></div></div></div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};
export default Dashboard;
