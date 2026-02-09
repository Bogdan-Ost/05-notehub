import css from "./Pagination.module.css";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  pageCount: number;
  forcePage: number;
  onPageChange: (selected: number) => void;
}

export const Pagination = ({
  pageCount,
  forcePage,
  onPageChange,
}: PaginationProps) => {
  if (pageCount <= 1) return null;
  {
    return (
      <ReactPaginate
        pageCount={pageCount}
        forcePage={forcePage - 1}
        onPageChange={(event) => onPageChange(event.selected + 1)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        previousLabel="&laquo;"
        nextLabel="&raquo;"
        breakLabel="..."
        containerClassName={css.pagination}
        pageClassName={css.li}
        activeClassName={css.active}
        previousClassName={css.li}
        nextClassName={css.li}
        breakClassName={css.li}
      />
    );
  }
};
