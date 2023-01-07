import React, { Fragment } from "react";
import { Stack, Typography} from "@mui/material";
import PaperInformation from "../../Components/PaperInformation";
import LocaltionInformation from "../../Components/LocaltionInformation";

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;
  return (
    <Fragment>
      <Stack sx={{justifyContent:"center"}}>
      {bio
        ? <Typography variant="body1">{bio}</Typography>
        : <Typography  variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem pariatur reiciendis commodi, officiis provident itaque perferendis illo soluta omnis saepe. </Typography>
      }
      </Stack>
      <PaperInformation userState={userState}/>
      <LocaltionInformation userState={userState}/>
    </Fragment>
  );
};

export default Description;
