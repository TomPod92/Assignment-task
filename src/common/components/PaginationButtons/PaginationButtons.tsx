import Button from 'src/common/components/Button/Button';
import './paginationButtons.scss';

interface Props {
  prevDisabled?: boolean;
  nextDisabled?: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
}

const PaginationButtons = ({ prevDisabled, nextDisabled, onPrevClick, onNextClick }: Props) => {
  return (
    <div className="pagination-buttons">
      <Button text="Prev" disabled={prevDisabled} onClick={onPrevClick} />
      <Button text="Next" disabled={nextDisabled} onClick={onNextClick} />
    </div>
  );
};

export default PaginationButtons;
