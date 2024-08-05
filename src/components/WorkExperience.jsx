import { Timeline } from "@mui/lab";
import { StyledEngineProvider } from "@mui/material/styles";

import ScrollableContainer from "./ScrollableContainer";
import WorkExperienceItem from "./WorkExperienceItem";

import { WORK_EXP } from "../data";

export default function WorkExperience() {
  return (
    <ScrollableContainer title="Work Experience">
      <StyledEngineProvider injectFirst>
        <Timeline position="alternate">
          {WORK_EXP.map(exp => <WorkExperienceItem exp={exp} key={exp.id} />)}
        </Timeline>
      </StyledEngineProvider>
    </ScrollableContainer>
  );
}