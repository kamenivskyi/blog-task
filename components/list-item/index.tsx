import React from 'react';

import { ListItemStyled, TitleStyled, BodyStyled, Button } from './list-item.styles';
import { IListItem } from 'interfaces';

const ListItem = ({ title, body, id }: IListItem) => {
  return (
    <ListItemStyled>
      <TitleStyled>
        {title}
      </TitleStyled>
      <BodyStyled>
        {body}
      </BodyStyled>
      <Button>
        More details
      </Button>
    </ListItemStyled>
  )
}

export default ListItem;