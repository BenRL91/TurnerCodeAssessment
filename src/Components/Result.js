import React from 'react';

let Result = (props) => {
  const { result } = props;

  return <li key={result._id}>{ result.TitleName }</li>
}

export default Result;
