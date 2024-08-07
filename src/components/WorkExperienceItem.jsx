import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot
} from "@mui/lab";

export default function WorkExperienceItem({exp}) {
  return (
    <TimelineItem>
      <TimelineOppositeContent className="my-auto">
        <p className="text-black/60">
          {exp.time}
        </p>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector className="bg-navy-blue" />
        <TimelineDot
          style={{
            backgroundColor: exp.color
          }}
          className="h-12 w-12 flex items-center justify-center"
        >
          <exp.logo/>
        </TimelineDot>
        <TimelineConnector className="bg-navy-blue" />
      </TimelineSeparator>
      <TimelineContent>
        <div className="bg-light-blue p-8 rounded-xl text-left shadow-[2px_5px_15px_rgba(0,0,0,0.2)]">
          <h3 className="text-2xl text-navy-blue font-bold">{exp.title}</h3>
          <h4 className="text-lg text-navy-blue">{exp.company}</h4>
          <ul className="list-disc pl-4 my-2">
            {exp.details.map(detail => {
              return (
                <li key={exp.id} className="my-1 text-black/80">{detail}</li>
              );
            })}
          </ul>
        </div>
      </TimelineContent>
    </TimelineItem>
  );
}