import Link from 'next/link'

import { ListItemStyled, TitleStyled, BodyStyled } from './list-item.styles'
import { Button } from 'styles/styled-globals'
import { IListItem } from 'interfaces'

const ListItem: React.FC<IListItem> = ({ title, body, id }) => (
  <ListItemStyled>
    <TitleStyled>{title}</TitleStyled>
    <BodyStyled>{body}</BodyStyled>
    <Link href={`/posts/${id}`}>
      <Button>More details</Button>
    </Link>
  </ListItemStyled>
)

export default ListItem
