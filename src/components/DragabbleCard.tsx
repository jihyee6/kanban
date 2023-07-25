import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props:any) => props.theme.cardColor};
  border-radius: 5px;
  padding: 10px 10px;
  margin-bottom: 10px;
`;

interface IDragabbleCardProps {
    toDo : string;
    index : number;
}

function DragabbleCard({toDo,index}:IDragabbleCardProps) {
    return(
        <Draggable draggableId={toDo} index={index} key={toDo}>
          {(magic) => (
          <Card ref={magic.innerRef} {...magic.draggableProps} >
          {toDo}
          </Card>)}
        </Draggable>
    )
}

export default React.memo(DragabbleCard);
