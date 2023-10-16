"use client";

import { useState } from "react";
import Alert from '@mui/joy/Alert';
import AspectRatio from '@mui/joy/AspectRatio';
import IconButton from '@mui/joy/IconButton';
import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';
import Warning from '@mui/icons-material/Warning';
import Typography from '@mui/joy/Typography';
import Link from "next/link";

import 'bootstrap/dist/css/bootstrap.css';
import Header from "../Header/Header";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";

const TextForm = () => {

    // const router = useRouter();
    const [isAlertVisible, setIsAlertVisible] = useState(false);


    const handleButtonClick = () => {
      setIsAlertVisible(true);
      setTimeout(() => {
        setIsAlertVisible(false);
        // router.push('/create-ad'); 
      }, 600);
    };

  // const [age, setAge] = useState('')

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <>

    <Header/>
    <div className="textFormContainer">
      <div className="textFormContainer2">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <label className="formHead">Create Text & Media</label>
          </Grid>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={12}>
                <label className="formLabel">Heading 01</label>
                <TextField
                  type="text"
                  placeholder="Add a heading that would make users interested"
                  className="textField"
                  size="small"
                  style={{ display: "block" }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <label className="formLabel">Heading 02</label>
                <TextField
                  type="text"
                  placeholder="Add a heading that would make users interested"
                  className="textField"
                  size="small"
                  style={{ display: "block" }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <label className="formLabel">Business Name</label>
                <TextField
                  type="text"
                  placeholder="Add your business name"
                  className="textField"
                  size="small"
                  style={{ display: "block" }}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={12}>
                <label className="formLabel">Description 01</label>
                <TextField
                  multiline
                  className="textField"
                  placeholder="Add primary text to help users understand more about your products, services or offers"
                  style={{ display: "block" }}
                  rows={3.6}
                  type="text"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <label className="formLabel">Button label</label>
                <FormControl size="small" style={{ display: "block" }}>
                  {/* <InputLabel id="demo-select-small-label">Age</InputLabel> */}
                  <Select

                   className="dropdown"
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    placeholder="Select a label that that best suits for ad"
                    // value={age}
                    // label="Age"
                    // onChange={handleChange}
        //             renderValue={(selected) => {
        //     if (selected.length === 0) {
        //       return <em>Placeholder</em>;
        //     }

        //     return selected.join(', ');
        //   }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <label className="formLabel">Webside URL</label>
            <TextField
              type="text"
              placeholder="Add the URL of the landing page you want to redirect users to"
              className="textField"
              size="small"
              style={{ display: "block" }}
              variant="outlined"
            />
          </Grid>


          <Grid item xs={12}>
          <div className="bottomBtn">
          <Link href="create-ad"><Button style={{margin:"0px 10px"}} variant="outlined">Back</Button></Link>
          <Link href="create-ad"><Button style={{margin:"0px 10px"}} variant="contained" onClick={handleButtonClick}>Submit</Button></Link>
          </div>

          </Grid>

        </Grid>
      </div>
      <div className="alertmeaage">
      {isAlertVisible && (
   <Alert
        size="lg"
        color="primary"
        variant="solid"
        invertedColors
        startDecorator={
          <AspectRatio
            variant="solid"
            ratio="1"
            sx={{
              minWidth: 30,
              borderRadius: '50%',
              boxShadow: '0 2px 12px 0 rgb(0 0 0/0.2)',
            }}
          >
            <div>
              <Check fontSize="xl2" />
            </div>
          </AspectRatio>
        }
        endDecorator={
          <IconButton
            variant="plain"
            sx={{
              '--IconButton-size': '32px',
              transform: 'translate(0.5rem, -0.5rem)',
            }}
          >
            <Close />
          </IconButton>
        }
        sx={{ alignItems: 'flex-start', overflow: 'hidden' }}
      >
        <div>
          <Typography level="title-lg">Submitted</Typography>
          <Typography level="body-sm">
          </Typography>
        </div>
 
      </Alert> 
      )}
      </div>
    </div>
       
    </> );
};

export default TextForm;
