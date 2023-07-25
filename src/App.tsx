import React from 'react';
import './App.css';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { toDoState } from './atom';
import { DropResult } from 'react-beautiful-dnd';
import DragabbleCard from './components/DragabbleCard';

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-colums: repeat(3, 1fr);
`

const Board = styled.div`
  background-color: ${(props:any) => props.theme.boardColor};
  padding-top: 30px;
  padding: 20px 10px;
  border-radius: 5px;
  min-height: 200px;
`;



function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({draggableId,destination, source}:DropResult) => {
    if(!destination) return;

    setToDos((oldToDos) => {
      const copyToDos = [...oldToDos];
        copyToDos.splice(source.index, 1);
        copyToDos.splice(destination?.index, 0, draggableId);
      return copyToDos;
    })
  };

  return(
    <DragDropContext onDragEnd={onDragEnd}>
    <Wrapper>
      <Boards>
      <Droppable droppableId='one'>
        {(magic) => 
      <Board ref={magic.innerRef} {...magic.droppableProps}>
        {toDos.map((toDo,index) => 
        <DragabbleCard key={toDo} index={index} toDo={toDo}/>
        )}
        {magic.placeholder} 
        </Board>}
      </Droppable>
      </Boards>
    </Wrapper>
    </DragDropContext>
  );
}

export default App;

