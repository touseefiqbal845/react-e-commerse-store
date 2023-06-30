import React from "react";
import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";
import styled from "styled-components";

const FiltersContainer = styled.div`
  background-color: #fff
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 20%;
  margin: 10px;
  height: 86vh;
`;

const Title = styled.span`
  font-size: 44px;
  margin-bottom: 45px;
  font-family: bold;
`;

const Label = styled.label`
  font-size: 16px;
  margin-right: 10px;
`;

const FilterOption = styled(Form.Check)`
font-size: 20px;
  margin-bottom: 40px;

  input[type="radio"],
  input[type="checkbox"] {
    margin-right: 15px;
  }
`;

const ClearFiltersButton = styled(Button)`
  font-size: 16px;
  margin-top: 25px;
`;

const Filters = () => {
  const {
    productDispatch,
    productState: { byStock, byFastDelivery, sort, byRating },
  } = CartState();

  return (
    <FiltersContainer>
      <Title>Filter Products</Title>
      <FilterOption
        inline
        label="Ascending"
        name="group1"
        type="radio"
        id={`inline-1`}
        onChange={() =>
          productDispatch({
            type: "SORT_BY_PRICE",
            payload: "lowToHigh",
          })
        }
        checked={sort === "lowToHigh" ? true : false}
      />
      <FilterOption
        inline
        label="Descending"
        name="group1"
        type="radio"
        id={`inline-2`}
        onChange={() =>
          productDispatch({
            type: "SORT_BY_PRICE",
            payload: "highToLow",
          })
        }
        checked={sort === "highToLow" ? true : false}
      />
      <FilterOption
        inline
        label="Include Out of Stock"
        name="group1"
        type="checkbox"
        id={`inline-3`}
        onChange={() =>
          productDispatch({
            type: "FILTER_BY_STOCK",
          })
        }
        checked={byStock}
      />
      <FilterOption
        inline
        label="Fast Delivery Only"
        name="group1"
        type="checkbox"
        id={`inline-4`}
        onChange={() =>
          productDispatch({
            type: "FILTER_BY_DELIVERY",
          })
        }
        checked={byFastDelivery}
      />
      <div>
        <Label>Rating:</Label>
        <Rating
          rating={byRating}
          onClick={(i) =>
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </div>
      <ClearFiltersButton
        variant="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </ClearFiltersButton>
    </FiltersContainer>
  );
};

export default Filters;
