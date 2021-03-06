import React from "react";
import styled from "styled-components";
import Button from "./Button";
import CreateBooking from "./CreateBooking";
import Title from "./Title";
import Filters from "./Filters";
import Loading from "./Loading";
import { getBookings } from "../api";
import PaginationLimit from "./PaginationLimit";
import BookingGrid from "./BookingGrid";

export default Bookings;

function Bookings() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const {
    showModal,
    loading,
    bookings,
    page,
    limit,
    total,
    filters,
    error
  } = state;

  const updateBookings = React.useCallback(({ limit, page, filters }) => {
    dispatch({ type: LOADING });
    getBookings({ limit, offset: page * limit, filters })
      .then(result => dispatch({ type: SET_BOOKINGS, payload: result }))
      .catch(() => {
        dispatch({
          type: ERROR,
          payload: "An error occurred while retrieving booking records."
        });
      });
  }, []);

  /* update booking results any time the page number, limit or filters change */
  React.useEffect(() => {
    updateBookings({ limit, page, filters });
  }, [limit, page, filters, updateBookings]);

  /* scroll to top of page when page changes */
  React.useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, [page]);

  return (
    <>
      <Header>
        <Title>Bookings {!loading ? null : <Loading />}</Title>
        <HeaderControls>
          <Filters initialValues={filters} onSubmit={handleChangeFilters} />
          <Button
            onClick={handleOpenCreateBooking}
            data-testid="create-booking-button"
          >
            Create booking
          </Button>
        </HeaderControls>
      </Header>
      <BookingGrid loading={loading} error={error} bookings={bookings} />
      <Pagination>
        {!loading ? null : <Loading size={12} />}
        <PaginationLimit onChange={handleLimitChange} limit={limit} />
        <span data-testid="displaying-results">
          Displaying bookings {displayStart()} - {displayEnd()} of {total}
        </span>
        <Button
          onClick={handlePrevPage}
          disabled={!hasPrevPage()}
          data-testid="prev-button"
        >
          Prev
        </Button>
        <Button
          onClick={handleNextPage}
          disabled={!hasNextPage()}
          data-testid="next-button"
        >
          Next
        </Button>
      </Pagination>

      <CreateBooking
        show={showModal}
        onClose={handleCloseCreateBooking}
        onSave={handleSaveUpdate}
      />
    </>
  );

  function handleLimitChange({ limit }) {
    localStorage.setItem("displayLimit", limit);
    dispatch({ type: SET_LIMIT, payload: limit });
  }

  function displayStart() {
    if (!total) return 0;
    return page * limit + 1;
  }
  function displayEnd() {
    if (!total) return 0;
    const end = (page + 1) * limit;
    return end > total ? total : end;
  }
  function hasNextPage() {
    return total > (page + 1) * limit;
  }
  function hasPrevPage() {
    return page > 0;
  }
  function handlePrevPage() {
    dispatch({ type: PREV_PAGE });
  }
  function handleNextPage() {
    dispatch({ type: NEXT_PAGE });
  }
  function handleOpenCreateBooking() {
    dispatch({ type: OPEN_MODAL });
  }
  function handleCloseCreateBooking() {
    dispatch({ type: CLOSE_MODAL });
  }
  function handleSaveUpdate() {
    updateBookings({ limit, page, filters });
  }
  function handleChangeFilters(filters) {
    dispatch({ type: SET_FILTERS, payload: filters });
  }
}

const ERROR = "ERROR";
const LOADING = "LOADING";
const SET_BOOKINGS = "SET_BOOKINGS";
const OPEN_MODAL = "OPEN_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";
const NEXT_PAGE = "NEXT_PAGE";
const PREV_PAGE = "PREV_PAGE";
const SET_LIMIT = "SET_LIMIT";
const SET_FILTERS = "SET_FILTERS";

const initialState = {
  error: null,
  loading: true,
  bookings: null,
  total: 0,
  page: 0,
  limit: +localStorage.getItem("displayLimit") || 20,
  showModal: false,
  filters: {
    type: ""
  }
};

function reducer(state, action) {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        loading: false,
        bookings: null,
        error: action.payload
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_BOOKINGS:
      return {
        ...state,
        loading: false,
        bookings: action.payload.rows,
        total: action.payload.total
      };
    case OPEN_MODAL:
      return {
        ...state,
        showModal: true
      };
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false
      };
    case NEXT_PAGE:
      return {
        ...state,
        page: ++state.page
      };
    case PREV_PAGE:
      return {
        ...state,
        page: --state.page
      };
    case SET_LIMIT:
      return {
        ...state,
        limit: action.payload
      };
    case SET_FILTERS:
      return {
        ...state,
        page: 0,
        filters: action.payload
      };
    default:
      return state;
  }
}

const Header = styled.header`
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const HeaderControls = styled.div`
  display: flex;
  height: 85px;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: flex-end;
  align-self: flex-end;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    height: auto;
  }
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
  & > *:not(:last-child) {
    margin-right: 8px;
  }
`;
