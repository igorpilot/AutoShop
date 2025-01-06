import React from "react";
import s from './Header2.module.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import {alpha, InputBase, styled} from "@mui/material";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import logo from '../../photo/logo.png';
import {Header1} from "../Header1/Header1";
import {NavLink} from "react-router-dom";



const Search = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        borderColor: 'black'
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    border: '1px solid silver',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
type Header2PropsType ={
    menu: string[]
}
export function Header2(props:Header2PropsType) {
    return <div className={s.header2}>
            <NavLink to={'./main'}><img src={logo} alt={'logo'} className={s.logo}/></NavLink>
        <div className={s.selectInput}>
            <div>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"><DirectionsCarIcon/></InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.menu}
                        label="Age"
                        onChange={() => {
                        }}
                    >

                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Пошук по сайту"
                        inputProps={{'aria-label': 'search'}}
                    />
                </Search>
            </div>





            </div>

            <div>Наш телефон:
                <h3>(+38) 096 829 26 77</h3></div>


    </div>;
}