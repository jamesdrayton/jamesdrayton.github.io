import {useEffect, useState} from 'react';
import TempoDemo from './project_data/tempo_demo/TempoDemo';

const Demo = ({project}) => {

  return ( 
    // TODO: Add boolean logic so tempodemo only displays if a boolean is true
    <TempoDemo project={project}></TempoDemo>
    );
}
 
export default Demo;