
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import VerifiedIcon from '@mui/icons-material/Verified';
import WorkIcon from '@mui/icons-material/Work';

import AccountCircle from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import RoomIcon from '@material-ui/icons/Room';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CakeIcon from '@mui/icons-material/Cake';
import WcIcon from '@mui/icons-material/Wc';
import { SocialIcon } from 'react-social-icons';

export const Profile = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-6/12 sm:w-4/12 px-4">
                                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFutmesJUgeYw/profile-displayphoto-shrink_800_800/0/1591826524520?e=1642636800&v=beta&t=x4ihw3UTDk5yheqEH85SseP563tsQxioQOzstNA2688" alt="..." className="shadow rounded max-w-full h-auto align-middle border-none" />

                                    <div className="flex justify-center mt-5">


                                        <i className="fa fa-facebook text-blue-900 text-xl mr-2" /><FacebookIcon style={{ color: "#3b5998" }} />
                                        <i className="fa fa-twitter text-blue-300 text-xl mr-2" /> <TwitterIcon style={{ color: "#55acee" }} />
                                        <i className="fa fa-linkedin text-blue-900 text-xl mr-2" /> <GitHubIcon style={{ color: "#333333" }} />
                                        <i className="fa fa-instagram text-red-700 text-xl mr-2" /> <LinkedInIcon style={{ color: "#0077b5" }} />

                                    </div>







                                </div>
                            </div>

                        </p>

                    </div>
                </div>
            </div>













            <div className="max-w-screen-xl sm:mx-auto ">

                <div className="grid grid-cols-1 gap-8 row-gap-4 lg:grid-cols-2">




                    <Box className="flex justify-center"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            '& > :not(style)': { m: 1 },
                        }}
                    >
                        <TextField className="w-80 " InputLabelProps={{ style: { fontSize: 19, color: "#6495ED" } }}
                            helperText=""
                            id="demo-helper-text-aligned"
                            label="Name"
                            defaultValue="  Nisarg Gogate"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle style={{ color: "#6495ED" }} />
                                    </InputAdornment>
                                ), style: { fontSize: 17, fontWeight: 450, fontStyle: 'bold' }
                            }}
                        />
                    </Box>

                    <Box className="flex justify-center"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            '& > :not(style)': { m: 1 },
                        }}

                    >
                        <TextField
                            className="w-80"
                            InputLabelProps={{ style: { fontSize: 19, color: "#6495ED" } }}
                            helperText=""
                            id="demo-helper-text-aligned"
                            label="Email"
                            defaultValue=" nisarg0@gmail.com "
                            InputProps={{
                                startAdornment: (

                                    <InputAdornment position="start">
                                        <EmailIcon style={{ color: "#6495ED" }} />
                                    </InputAdornment>


                                ),
                                endAdornment: (

                                    <InputAdornment position="end">
                                        <VerifiedIcon style={{ color: "#000e41" }} />
                                    </InputAdornment>


                                ), style: { fontSize: 17, fontWeight: 450, fontStyle: 'bold' }
                            }}


                        />

                    </Box>

                    <Box className="flex justify-center"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            '& > :not(style)': { m: 1 },
                        }}

                    >
                        <TextField className="w-80" InputLabelProps={{ style: { fontSize: 20, color: "#6495ED" } }}
                            helperText=""
                            id="demo-helper-text-aligned"
                            label="College"
                            defaultValue="   VNIT  Nagpur "
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SchoolIcon style={{ color: "#6495ED" }} />
                                    </InputAdornment>
                                ), style: { fontSize: 17, fontWeight: 450, fontStyle: 'bold' }
                            }}
                        />

                    </Box>

                    <Box className="flex justify-center"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            '& > :not(style)': { m: 1 },
                        }}

                    >
                        <TextField className="w-80" fontWeight="bold" InputLabelProps={{ style: { fontSize: 20, color: "#6495ED" } }}
                            helperText=""
                            id="demo-helper-text-aligned"
                            label="Phone Number"
                            defaultValue="  9197654534 "

                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PhoneAndroidIcon style={{ color: "#6495ED" }} />
                                    </InputAdornment>
                                ),
                                endAdornment: (

                                    <InputAdornment position="end">
                                        <VerifiedIcon style={{ color: "#000e41" }} />
                                    </InputAdornment>


                                ), inputMode: 'numeric', pattern: '[0-9]*', style: { fontSize: 17, fontWeight: 450, fontStyle: 'bold' }


                            }}
                        />

                    </Box>


                    <Box className="flex justify-center"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            '& > :not(style)': { m: 1 },
                        }}
                    >
                        <TextField className="w-80 " InputLabelProps={{ style: { fontSize: 19, color: "#6495ED" } }}
                            helperText=""
                            id="demo-helper-text-aligned"
                            label="BirthDay"
                            defaultValue="  "
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CakeIcon style={{ color: "#6495ED" }} />
                                    </InputAdornment>
                                ), inputMode: 'date', style: { fontSize: 17, fontWeight: 450, fontStyle: 'bold' }
                            }}
                        />
                    </Box>



                    <Box className="flex justify-center"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            '& > :not(style)': { m: 1 },
                        }}
                    >
                        <TextField className="w-80 " InputLabelProps={{ style: { fontSize: 19, color: "#6495ED" } }}
                            helperText=""
                            id="demo-helper-text-aligned"
                            label="Gender"
                            defaultValue="  "
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <WcIcon style={{ color: "#6495ED" }} />
                                    </InputAdornment>
                                ), inputMode: 'date', style: { fontSize: 17, fontWeight: 450, fontStyle: 'bold' }
                            }}
                        />
                    </Box>










                    <Box className="flex justify-center"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            '& > :not(style)': { m: 1 },
                        }}
                    >
                        <TextField
                            // onChange={e => e}
                            multiline={true}
                            rows={4}
                            className=" w-80   " InputLabelProps={{ style: { fontSize: 19, color: "#6495ED" } }}
                            helperText=""
                            id="demo-helper-text-aligned"
                            label="Bio"

                            // value="  Software  Developer"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <WorkIcon style={{ color: "#6495ED" }} />
                                    </InputAdornment>
                                ), style: { fontSize: 17, fontWeight: 450, fontStyle: 'bold' }
                            }}
                        />
                    </Box>



                    <Box className="flex justify-center"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            '& > :not(style)': { m: 1 },
                        }}
                    >
                        <TextField
                            // onChange={e => e}
                            multiline={true}
                            rows={4}
                            className=" w-80    " InputLabelProps={{ style: { fontSize: 19, color: "#6495ED" } }}
                            helperText=""
                            id="demo-helper-text-aligned"
                            label="Address"

                            // value="London New York, Baker Street, New York,"
                            InputProps={{

                                startAdornment: (
                                    <InputAdornment position="start">
                                        <HomeIcon style={{ color: "#6495ED" }} />
                                    </InputAdornment>
                                ), style: { fontSize: 17, fontWeight: 450, fontStyle: 'bold' }
                            }}
                        />
                    </Box>





                </div>
            </div>
        </div>
    );
};


export default Profile;



{/* <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="70326c9b-4a0f-429b-9c76-792941e326d5"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                                width="52"
                                height="24"
                            />
                        </svg>

                    </span>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            '& > :not(style)': { m: 1 },
                        }}
                    >
                        <TextField
                            helperText="Please enter your email"
                            id="demo-helper-text-aligned"
                            label="Email"
                        />

                    </Box>

                </h2> */}
