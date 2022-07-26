import React from 'react';
import AddObjectForm from './features/objects/AddObjectForm';
import ObjectsList from './features/objects/ObjectsList';

const App = () => {
  return (
    <div>
      <ObjectsList />
      <AddObjectForm />
    </div>
  )
}

export default App