import React from 'react'
import styled from 'styled-components';

import { IListItem } from 'interfaces';
import { ListStyled } from './List.styled';

interface IList {
  items: IListItem[],
}

const ListItemStyled = styled.li`
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;
`;

const List = ({ items }: IList) => {
  return (
    <ListStyled>
      {items?.map(item => (
        <ListItemStyled>
          {item.title}
        </ListItemStyled>
      ))}
    </ListStyled>
  )
}

export default List;
