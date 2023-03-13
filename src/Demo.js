import TempoDemo from './project_data/tempo_demo/TempoDemo';

const Demo = ({projects, currDemo}) => {

  return ( 
    <div className="demo">
      {/* {projects[0].display && <HallwayDemo></HallwayDemo>} */}
      {projects[1].display && <TempoDemo></TempoDemo>}
    </div>
    );
}
 
export default Demo;