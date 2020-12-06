import React from 'react';

import { IListItem } from 'interfaces';
import { ListStyled } from './list.styles';
import ListItem from 'components/list-item';

interface IList {
  items: IListItem[],
};

const List = ({ items }: IList) => (
  <ListStyled>
    {items?.map(item => (
      <ListItem {...item} key={item.id} />
    ))}
  </ListStyled>
);

export default List;
