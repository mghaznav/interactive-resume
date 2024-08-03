import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ScrollableContainer from "./components/ScrollableContainer";

function App() {

  return (
    <>
      <Navigation/>
      <Hero />
      <ScrollableContainer title="About Me">
        <DummyContent />
      </ScrollableContainer>
      <div className="h-[25vh]" />
      <ScrollableContainer title="Work Experience" >
        <DummyContent />
      </ScrollableContainer>
      <div className="h-[25vh]" />
      <ScrollableContainer title="Projects" >
        <DummyContent />
      </ScrollableContainer>
      <div className="h-[25vh]">
        <h1 className="text-4xl text-navy-blue">Footer</h1>
      </div>
    </>
  );
}

export default App

const DummyContent = () => {
  return (
    <>
      <p>1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium eaque perferendis nam beatae ipsam assumenda quibusdam veniam. Doloribus, voluptas excepturi aperiam expedita dolores accusantium. Totam corporis reiciendis quibusdam consequuntur.</p>
      <p>2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium eaque perferendis nam beatae ipsam assumenda quibusdam veniam. Doloribus, voluptas excepturi aperiam expedita dolores accusantium. Totam corporis reiciendis quibusdam consequuntur.</p>
      <p>3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium eaque perferendis nam beatae ipsam assumenda quibusdam veniam. Doloribus, voluptas excepturi aperiam expedita dolores accusantium. Totam corporis reiciendis quibusdam consequuntur.</p>
      <p>4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium eaque perferendis nam beatae ipsam assumenda quibusdam veniam. Doloribus, voluptas excepturi aperiam expedita dolores accusantium. Totam corporis reiciendis quibusdam consequuntur.</p>
      <p>5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium eaque perferendis nam beatae ipsam assumenda quibusdam veniam. Doloribus, voluptas excepturi aperiam expedita dolores accusantium. Totam corporis reiciendis quibusdam consequuntur.</p>
      <p>6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium eaque perferendis nam beatae ipsam assumenda quibusdam veniam. Doloribus, voluptas excepturi aperiam expedita dolores accusantium. Totam corporis reiciendis quibusdam consequuntur.</p>
      <p>7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium eaque perferendis nam beatae ipsam assumenda quibusdam veniam. Doloribus, voluptas excepturi aperiam expedita dolores accusantium. Totam corporis reiciendis quibusdam consequuntur.</p>
      <p>8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium eaque perferendis nam beatae ipsam assumenda quibusdam veniam. Doloribus, voluptas excepturi aperiam expedita dolores accusantium. Totam corporis reiciendis quibusdam consequuntur.</p>
      <p>9 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium eaque perferendis nam beatae ipsam assumenda quibusdam veniam. Doloribus, voluptas excepturi aperiam expedita dolores accusantium. Totam corporis reiciendis quibusdam consequuntur.</p>
      <p>10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium eaque perferendis nam beatae ipsam assumenda quibusdam veniam. Doloribus, voluptas excepturi aperiam expedita dolores accusantium. Totam corporis reiciendis quibusdam consequuntur.</p>
      <p>11 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium eaque perferendis nam beatae ipsam assumenda quibusdam veniam. Doloribus, voluptas excepturi aperiam expedita dolores accusantium. Totam corporis reiciendis quibusdam consequuntur.</p>
      <p>12 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium eaque perferendis nam beatae ipsam assumenda quibusdam veniam. Doloribus, voluptas excepturi aperiam expedita dolores accusantium. Totam corporis reiciendis quibusdam consequuntur.</p>
      <p>13 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium eaque perferendis nam beatae ipsam assumenda quibusdam veniam. Doloribus, voluptas excepturi aperiam expedita dolores accusantium. Totam corporis reiciendis quibusdam consequuntur.</p>
      <p>14 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium eaque perferendis nam beatae ipsam assumenda quibusdam veniam. Doloribus, voluptas excepturi aperiam expedita dolores accusantium. Totam corporis reiciendis quibusdam consequuntur.</p>
      <p>15 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium eaque perferendis nam beatae ipsam assumenda quibusdam veniam. Doloribus, voluptas excepturi aperiam expedita dolores accusantium. Totam corporis reiciendis quibusdam consequuntur.</p>
      <p>16 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium eaque perferendis nam beatae ipsam assumenda quibusdam veniam. Doloribus, voluptas excepturi aperiam expedita dolores accusantium. Totam corporis reiciendis quibusdam consequuntur.</p>
      <p>17 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium eaque perferendis nam beatae ipsam assumenda quibusdam veniam. Doloribus, voluptas excepturi aperiam expedita dolores accusantium. Totam corporis reiciendis quibusdam consequuntur.</p>
      <p>18 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium eaque perferendis nam beatae ipsam assumenda quibusdam veniam. Doloribus, voluptas excepturi aperiam expedita dolores accusantium. Totam corporis reiciendis quibusdam consequuntur.</p>
    </>
  );
}
