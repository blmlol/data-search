import React from 'react';
import { useForm } from 'react-hook-form';

function Results(props) {
 

  
  
  return (
    <div>
        <span>
            {props.data}
            {/* Each Span will have one data result which we will parse through from data results */}
        </span>

    </div>
  );


}

export default Results;