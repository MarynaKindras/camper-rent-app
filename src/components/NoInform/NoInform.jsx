import { NotFavorits, NotFavoritsText } from './NoInform.styled';

const NoInform = ({ text }) => {
  return (
    <NotFavorits>
      <NotFavoritsText>{text}</NotFavoritsText>
    </NotFavorits>
  );
};

export default NoInform;
