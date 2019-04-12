import React from 'react';
import ClassCard from './ClassCard';

export default ({ context }) => {
  return (
    context.activities.map((activity, index) => {
      return <ClassCard key={index} id={index} activity={activity}/>
    })
  )
}