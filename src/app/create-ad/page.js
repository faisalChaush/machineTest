"use client";

import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Header from "../Header/Header";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from '@mui/material/Checkbox';
import Link from "next/link";


const CreateAd = () => {


  const [isText, setIsText] = useState(false);
  const [isMedia, setIsMedia] = useState(false);

  // const handleCardClick = (cardType) => {
  //   if (cardType === 'text') {
  //     setIsText(false);
  //     setIsMedia(true);
  //   } else if (cardType === 'media') {
  //     setIsText(true);
  //     setIsMedia(false);
  //   }
  // };
  const handleCardClick = (cardType) => {
    if (cardType === 'text') {
      setIsText((prevState) => !prevState); 
      setIsMedia(false); 
    } else if (cardType === 'media') {
      setIsMedia((prevState) => !prevState); 
      setIsText(false); 
    }
  };


  return (<>
        <Header/>

    <div className="textFormContainer">
      <div className="textFormContainer2">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <label className="formHead">Create Ad</label>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid item xs={4}>
          
          <Card sx={{ maxWidth: 345 }} onClick={() => handleCardClick('text')}>
          <Checkbox size="small" checked={isText}></Checkbox>
              <CardMedia
                sx={{ height: 240 }}
                image="https://raw.githubusercontent.com/mike14u/shimmer-recyclerview-x/master/screenshots/second_list_demo.gif"
                title="green iguana"
              />
              <CardContent>
                <Typography
                  className="cardLabel"
                  style={{ textAlign: "center" }}
                  variant="body2"
                  color="text.secondary"
                >
                  Create
                </Typography>
                <Typography
                  className="cardTitle"
                  style={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  Text Ad
                </Typography>
              </CardContent>
              
            </Card>
            
          </Grid>
          <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }} onClick={() => handleCardClick('media')}>

         <Checkbox size="small" checked={isMedia}></Checkbox>
              <CardMedia
                sx={{ height: 240 }}
                image="https://raw.githubusercontent.com/mike14u/shimmer-recyclerview-x/master/screenshots/second_grid_demo.gif"
                title="green iguana"
              />
              <CardContent>
                <Typography
                  className="cardLabel"
                  style={{ textAlign: "center" }}
                  variant="body2"
                  color="text.secondary"
                >
                  Create
                </Typography>
                <Typography
                  className="cardTitle"
                  style={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  Media Ad
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
          <div className="bottomBtn">
          {isText ? (<>
            <Link href="text-form"><Button style={{margin:"0px 10px"}} variant="contained">next</Button></Link>
          </>) : isMedia ? (<>
            <Link href="media-form"><Button style={{margin:"0px 10px"}} variant="contained">next</Button></Link>
          </>) : ""}
          
          
          
          </div>

          </Grid>
        </Grid>
      </div>
    </div>
    </>);
};

export default CreateAd;
