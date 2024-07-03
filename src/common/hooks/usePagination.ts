import { useSearchParams } from 'react-router-dom';

interface Props<T> {
  items?: T[];
  resultsPerPage: number;
}

const usePagination = <T>({ items = [], resultsPerPage }: Props<T>) => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const page = parseInt(searchParams.get('page') || '0');

  const paginatedItems = items.slice(page * resultsPerPage, (page + 1) * resultsPerPage);
  const previousButtonDisabled = page === 0;
  const nextButtonDisabled = items.length <= (page + 1) * resultsPerPage;

  const invalidPageNumber = items.length
    ? isNaN(page) || Math.ceil(items.length / resultsPerPage) - 1 < page || page < 0
    : false;

  const goToPreviousPage = () => setSearchParams({ page: (page - 1).toString() });
  const goToNextPage = () => setSearchParams({ page: (page + 1).toString() });

  return {
    paginatedItems,
    previousButtonDisabled,
    nextButtonDisabled,
    invalidPageNumber,
    goToPreviousPage,
    goToNextPage,
  };
};

export default usePagination;
