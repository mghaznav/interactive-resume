import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import { StyledEngineProvider } from '@mui/material/styles';

import { SiTesla } from "react-icons/si";

export default function WorkExperience() {
  return (
    <section className="bg-stone-100">
      <StyledEngineProvider injectFirst>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent className="my-auto">
              Nov 2023 - Present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector className="text-navy-blue" />
              <TimelineDot
                style={{
                  backgroundColor: "#e41836"
                }}
                className="h-12 w-12 flex items-center justify-center"
              >
                <SiTesla/>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="bg-white p-4 rounded-xl">
                <h3>Vehicle Operator</h3>
                <h4>Tesla</h4>
                <ul>
                  <li>Provided crucial support to engineering efforts by conducting daily analysis of vehicle software, producing detailed reports that informed decision-making and facilitated continuous improvement.</li>
                  <li>Performed real-world testing adhering to specified test protocols, offering ad-hoc support for critical tasks, and meeting team needs to ensure project milestones were met.</li>
                  <li>Analyzed test data using Tesla&apos;s proprietary software tools, detected and reported software issues, and identified abnormal behaviors to contribute to continuous improvement.</li>
                </ul>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent className="my-auto">
              Nov 2023 - Present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot
                style={{
                  backgroundColor: "#e41836"
                }}
                className="h-12 w-12 flex items-center justify-center"
              >
                <SiTesla/>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="bg-white p-4 rounded-xl">
                <h3>Vehicle Operator</h3>
                <h4>Tesla</h4>
                <ul>
                  <li>Provided crucial support to engineering efforts by conducting daily analysis of vehicle software, producing detailed reports that informed decision-making and facilitated continuous improvement.</li>
                  <li>Performed real-world testing adhering to specified test protocols, offering ad-hoc support for critical tasks, and meeting team needs to ensure project milestones were met.</li>
                  <li>Analyzed test data using Tesla&apos;s proprietary software tools, detected and reported software issues, and identified abnormal behaviors to contribute to continuous improvement.</li>
                </ul>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </StyledEngineProvider>
    </section>
  );
}