import React, { useState } from 'react'
import TaskLista from './TaskLista';
import FormToDo from  './FormToDo';
import TDWrapper from '../ToDoAPP/TDWrapper';

const Container = () => {
  const [lista, setLista] = useState ([]);
  const handleAddItem = agregoItem => {
    setLista ([...lista, agregoItem]);
  };

  return (
    <>
      <TDWrapper>
        <FormToDo handleAddItem={handleAddItem} />
        <TaskLista lista={lista} setLista={setLista} />
      </TDWrapper>
    </>
  );
}

export default Container;