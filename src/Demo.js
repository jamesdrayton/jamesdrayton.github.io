import TempoDemo from './project_data/tempo_demo/TempoDemo';
import Questionnaire from './project_data/questionnaire/Questionnaire';

const Demo = ({projects, currDemo}) => {

  return ( 
    <div className="demo">
      {projects[0].display && <Questionnaire></Questionnaire>}
      {projects[3].display && <TempoDemo></TempoDemo>}
    </div>
    );
}
 
export default Demo;