import { VerticalTimeline, VerticalTimelineElement }  from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import ScrollableContainer from "./ScrollableContainer";

import { SiTesla } from "react-icons/si";

export default function WorkExperience() {
  return (
    <section>
      <ScrollableContainer title="Work Experience" >
        <VerticalTimeline
          lineColor="#005389"
        >
          <VerticalTimelineElement
            contentStyle={{
              backgroundColor: "#fff",
              borderRadius: "1rem",
              boxShadow: "-5px 5px 20px rgba(0, 0, 0, 0.2)"
            }}
            contentArrowStyle={{
              borderRight: "0.5rem solid #e41937"
            }}
            iconStyle={{
              backgroundColor: "#e41937",
              color: "#fff"
            }}
            icon={<SiTesla />}
            date="Nov 2023 - Present"
          >
            <h3 className="text-navy-blue font-bold text-2xl">Vehicle Operator</h3>
            <h4 className="text-navy-blue text-lg">Tesla</h4>
            <ul className="my-4 list-disc text-black pl-4">
              <li className="pl-2 my-2">Provided crucial support to engineering efforts by conducting daily analysis of vehicle software, producing detailed reports that informed decision-making and facilitated continuous improvement.</li>
              <li className="pl-2 my-2">Performed real-world testing adhering to specified test protocols, offering ad-hoc support for critical tasks, and meeting team needs to ensure project milestones were met.</li>
              <li className="pl-2 my-2">Analyzed test data using Tesla&apos;s proprietary software tools, detected and reported software issues, and identified abnormal behaviors to contribute to continuous improvement.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{
              backgroundColor: "#fff",
              borderRadius: "1rem",
              boxShadow: "-5px 5px 20px rgba(0, 0, 0, 0.2)"
            }}
            contentArrowStyle={{
              borderRight: "0.5rem solid #e41937"
            }}
            iconStyle={{
              backgroundColor: "#e41937",
              color: "#fff"
            }}
            icon={<SiTesla />}
            date="Nov 2023 - Present"
          >
            <h3 className="text-navy-blue font-bold text-2xl">Vehicle Operator</h3>
            <h4 className="text-navy-blue text-lg">Tesla</h4>
            <ul className="my-4 list-disc text-black pl-4">
              <li className="pl-2 my-2">Provided crucial support to engineering efforts by conducting daily analysis of vehicle software, producing detailed reports that informed decision-making and facilitated continuous improvement.</li>
              <li className="pl-2 my-2">Performed real-world testing adhering to specified test protocols, offering ad-hoc support for critical tasks, and meeting team needs to ensure project milestones were met.</li>
              <li className="pl-2 my-2">Analyzed test data using Tesla&apos;s proprietary software tools, detected and reported software issues, and identified abnormal behaviors to contribute to continuous improvement.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{
              backgroundColor: "#fff",
              borderRadius: "1rem",
              boxShadow: "-5px 5px 20px rgba(0, 0, 0, 0.2)"
            }}
            contentArrowStyle={{
              borderRight: "0.5rem solid #e41937"
            }}
            iconStyle={{
              backgroundColor: "#e41937",
              color: "#fff"
            }}
            icon={<SiTesla />}
            date="Nov 2023 - Present"
          >
            <h3 className="text-navy-blue font-bold text-2xl">Vehicle Operator</h3>
            <h4 className="text-navy-blue text-lg">Tesla</h4>
            <ul className="my-4 list-disc text-black pl-4">
              <li className="pl-2 my-2">Provided crucial support to engineering efforts by conducting daily analysis of vehicle software, producing detailed reports that informed decision-making and facilitated continuous improvement.</li>
              <li className="pl-2 my-2">Performed real-world testing adhering to specified test protocols, offering ad-hoc support for critical tasks, and meeting team needs to ensure project milestones were met.</li>
              <li className="pl-2 my-2">Analyzed test data using Tesla&apos;s proprietary software tools, detected and reported software issues, and identified abnormal behaviors to contribute to continuous improvement.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </ScrollableContainer>
    </section>
  );
}