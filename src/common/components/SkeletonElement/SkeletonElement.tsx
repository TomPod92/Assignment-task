import React from 'react';
import classNames from 'classnames';
import './skeletonElement.scss';

interface Props {
  skeletonClassName?: string;
  children?: React.ReactNode;
}

const SkeletonElement = ({ skeletonClassName }: Props) => {
  return (
    <div className={classNames('skeleton-element', skeletonClassName)}>
      <div className="skeleton-element-shimmer"></div>
    </div>
  );
};

export default SkeletonElement;
