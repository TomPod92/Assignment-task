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
      <button disabled={prevDisabled} onClick={onPrevClick}>
        Prev
      </button>
      <button disabled={nextDisabled} onClick={onNextClick}>
        Next
      </button>
    </div>
  );
};

export default PaginationButtons;
