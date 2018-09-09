import React from 'react';
import { Segment} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


function SegmentGenerate(props){
  return (
    <React.Fragment>
    <Segment key={props.key} ><Link to={{ pathname:'/'+  props.data.repoHeading, state: { data: props.data} }}><h3 style={{color:'black'}}>{props.data.repoHeading}</h3></Link></Segment>
    </React.Fragment>
  )
}

export default SegmentGenerate;