import React from 'react';
import ClassCard from './ClassCard';

const Home = ({ act, actions }) => {
    return (
      act.map((activity, index) => {
        return <ClassCard key={index} id={index} activity={activity} actions={actions}/>
      })
    )
}

export default Home;