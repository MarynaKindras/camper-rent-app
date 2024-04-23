import { RotatingLines } from 'react-loader-spinner';
import { WrapperLoader } from './Loader.styled';

const Loader = () => {
  return (
    <WrapperLoader>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="#E44848"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </WrapperLoader>
  );
};

export default Loader;
