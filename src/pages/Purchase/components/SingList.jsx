import React from "react";
import styled from "styled-components";
import Typography from "../../../duckku-ui/Typography";

const TrackListWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`;

const TrackListNum = styled.div`
  width: 20%;
  height: 40px;
  text-align: left;
`;

const TrackListTitle = styled.div`
  width: 55%;
  height: 40px;
  margin-left: 10%;
`;

const SingList = (props) => {
  return (
    <>
      <TrackListWrapper>
        <TrackListNum>
          <Typography color="gray">{props.Num}</Typography>
        </TrackListNum>
        <TrackListTitle>
          <Typography thin14 color="gray">
            {props.SingName}
          </Typography>
        </TrackListTitle>
        <Typography thin14 color="gray">
          {props.SingTime}
        </Typography>
      </TrackListWrapper>
    </>
  );
};

export default SingList;
