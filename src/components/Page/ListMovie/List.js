import React, { useContext, useEffect } from "react";
import { MovieContext } from "context/Context";
import Slide2 from "../../Movie/Slide2";
import MovieInfor from "../../Movie/MovieInfor/MovieInfor";
import "./List.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import { GET_INFINITY_PAGE_SCROLL } from "Reducer/type";

import SelectForm from "./sectionSelectForm/SelectForm";

const Loading = () => {
  return (
    <div>
      <div className="dashed-loading" />
    </div>
  );
};
const List = (props) => {
  const { state, dispatch, handleMounted } = useContext(MovieContext);
  const handleScrollInfiniti = () => {
    setTimeout(() => {
      dispatch({ type: GET_INFINITY_PAGE_SCROLL, payload: null });
    }, 1500);
  };
  useEffect(() => {
    handleMounted(true);
    return () => {
      handleMounted(false);
    };
  }, [handleMounted]);
  return (
    <>
      <div className="list__container">
        <SelectForm />
        <div className="grid wide">
          <InfiniteScroll
            dataLength={state.data.length}
            next={handleScrollInfiniti}
            style={{ overflow: "visible" }}
            hasMore={true}
            loader={
              <div
                className="col l-o-6 l-12 m-o-6 m-12 c-o-6 c-12"
                style={{
                  color: "white",
                  marginBottom: "1rem"
                }}
              >
                <Loading />
              </div>
            }
            className="row  List__container-row "
          >
            {state.filteredData.map((movie) => (
              <div key={movie.id} className="col l-2 m-3 c-6 list__movie">
                <Slide2
                  props={movie}
                  isChangeSize={true}
                  style={{ margin: 0 }}
                  margin={{ margin: " 0" }}
                />
              </div>
            ))}
          </InfiniteScroll>
        </div>
      </div>
      {state.play ? <MovieInfor props={state.currentMovie} /> : <> </>}
    </>
  );
};

export default React.memo(List);
