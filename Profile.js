
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

import AccountCircle from '@mui/icons-material/AccountCircle';

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
                        <TextField className="w-80"
                            helperText=""
                            id="demo-helper-text-aligned"
                            label="Name"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
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
                        <TextField className="w-80"
                            helperText=""
                            id="demo-helper-text-aligned"
                            label="Email"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                ),
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
                        <TextField className="w-80"
                            helperText=""
                            id="demo-helper-text-aligned"
                            label="College"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SchoolIcon />
                                    </InputAdornment>
                                ),
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
                        <TextField className="w-80"
                            helperText=""
                            id="demo-helper-text-aligned"
                            label="Phone Number"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PhoneAndroidIcon />
                                    </InputAdornment>
                                ),
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
