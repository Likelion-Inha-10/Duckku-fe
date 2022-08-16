import React, { useState } from "react";
import styled from "styled-components";
import Flex from "../../../duckku-ui/Flex";
import Typography from "../../../duckku-ui/Typography";
import hucko from "../../../assets/images/혁오.png";
import name from "../../../assets/images/혁오로고.png";

const Photo = styled.div`
  height: 561px;
  width: 100%;
  border-radius: 0 0 30px 30px;

  background-image: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
  overflow: hidden;
`;

const Dimmer = styled(Flex)`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileBlur = styled(Flex)`
  width: 144px;
  height: 144px;

  background: rgba(255, 255, 255, 0.3);
  background-blend-mode: soft-light;
  backdrop-filter: blur(5px);

  height: 144px;
  width: 144px;
  border-radius: 100px;

  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  height: 100%;
  width: 100%;

  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.url});
`;

const GradationBorder = styled.div`
  --b: 2px;
  --c: linear-gradient(
    92.33deg,
    rgba(138, 46, 255, 0.8) 6.14%,
    rgba(204, 224, 255, 0.8) 94.68%
  );
  display: inline-block;
  width: 150px;
  aspect-ratio: 1;
  position: relative;
  z-index: 0;

  ::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    background: var(--c, linear-gradient(to right, #9c20aa, #fb3570));
    padding: var(--b);
    border-radius: 50%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

const Info = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 65px;
`;

const Profile = styled(Flex)`
  height: 230px;
  flex-direction: column;
  justify-content: space-between;
`;

const MainPhoto = ({ data, clickCategory, children }) => {
  //받아올 데이터 목록
  const [dummy, setDummy] = useState({
    name: "혁오",
    albums: 3,
    image: `${hucko}`,
    logo: `${name}`,
  });

  return (
    <>
      <Photo url={dummy.image}>
        {children}
        <Dimmer>
          <Profile>
            <ProfileBlur>
              <GradationBorder>
                <Logo url={dummy.logo} />
              </GradationBorder>
            </ProfileBlur>

            <Info>
              <Typography color="white" bold28>
                {dummy.name}
              </Typography>
              <Typography color="white" regular16>
                나의 앨범 {data.length}개
              </Typography>
            </Info>
          </Profile>
        </Dimmer>
      </Photo>
    </>
  );
};

export default MainPhoto;
