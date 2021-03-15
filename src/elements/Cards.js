import styled from 'styled-components';
import { Button } from './Buttons';
import { boxShadow } from './utilities';

export const Card = styled.div`
  border-radius: 6px;
  padding: 10px;
  ${boxShadow[1]};
`;

const CardButton = styled(Button)`
  width: 100%;
`;

Card.Button = CardButton;
