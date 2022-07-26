import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllObjects } from './objectsSlice';
import ObjectAuthor from './ObjectAuthor';

const ObjectsList = () => {
  const objects = useSelector(selectAllObjects);

  const renderedObjects = objects.map( object => (
    <div key={object.id}>
      <h5>{object.name}</h5>
      <h6>{object.url}</h6>
      <h6><ObjectAuthor explorer={object.explorer} /></h6>
    </div>
  ))

  return (
    <div>{renderedObjects}</div>
  )
}

export default ObjectsList