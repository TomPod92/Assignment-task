import { useEffect, useMemo, useState } from 'react';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items?: any[];
  resultsPerPage: number;
}

const usePagination = ({ items = [], resultsPerPage }: Props) => {
  const [page, setPage] = useState(0);

  const paginatedItems = items.slice(page * resultsPerPage, (page + 1) * resultsPerPage);
  const previousButtonDisabled = page === 0;
  const nextButtonDisabled = items.length <= (page + 1) * resultsPerPage;

  const goToPreviousPage = () => setPage((prev) => prev - 1);
  const goToNextPage = () => setPage((prev) => prev + 1);

  // useEffect(() => {
  //   setPage(0);
  // }, [items]);

  return {
    paginatedItems,
    previousButtonDisabled,
    nextButtonDisabled,
    goToPreviousPage,
    goToNextPage,
  };
};

export default usePagination;
