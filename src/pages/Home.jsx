import React from "react";
import { useContext } from "react";
import { SearchContext } from "../App";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/Pizzablock/Skeleton";
import Pagination from "../pagination";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const { searchValue } = useContext(SearchContext);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    setIsLoading(true);
    const sortBy = sortType.sortProperty.replace("-", "");
    const order = sortType.sortProperty.includes("_") ? "asc" : "desc";
    const category = categoryId > 0 ? `category = ${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    fetch(
      `https://66aa0992613eced4eba74cb0.mockapi.io/api/v1/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items.map((obj) => {
    <PizzaBlock key={obj.id} {...obj} />;
  });

  const skeletons = [...new Array(6)].map((_, index) => {
    return <Skeleton key={index} />;
  });

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} onClickCategory={(id) => {}} />
        <Sort
          sortType={sortType}
          onChangeSort={(i) => {
            setSortType(i);
          }}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
