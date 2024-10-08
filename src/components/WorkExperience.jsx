import { Timeline } from "@mui/lab";
import { StyledEngineProvider } from "@mui/material/styles";

import ParallaxSection from "./general/ParallaxSection";
import WorkExperienceItem from "./WorkExperienceItem";

import expBg from "../assets/exp_bg.jpeg"

import { WORK_EXP } from "../data";

export default function WorkExperience() {
  return (
    <ParallaxSection image={expBg}>
      <StyledEngineProvider injectFirst>
        <Timeline position="alternate">
          {WORK_EXP.map(exp => <WorkExperienceItem exp={exp} key={exp.id} />)}
        </Timeline>
      </StyledEngineProvider>
    </ParallaxSection>
  );
}