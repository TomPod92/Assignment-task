import classNames from 'classnames';

interface Props {
  imageName?: string;
  fallbackImageName: string;
  className?: string;
}

const Image = ({ imageName = '', fallbackImageName, className }: Props) => {
  const src = new URL(`../../../assets/${imageName}.png`, import.meta.url).href;
  const fallbackSrc = new URL(`../../../assets/${fallbackImageName}.png`, import.meta.url).href;

  return (
    <img
      src={src}
      className={classNames('image', className)}
      onError={(e) => {
        e.currentTarget.src = fallbackSrc;
      }}
    />
  );
};

export default Image;
