import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { debounce } from "lodash";

const useDebouncedApplySearch = (array) => {
  const { searchValue } = useSelector((state) => state.products);

  const [filteredArray, setFilteredArray] = useState([]);

  const debouncedApplyFilter = useCallback(
    debounce((searchValue) => {
      setFilteredArray(() => {
        const optimizedSearchValue = searchValue.trim().toLowerCase();

        return array?.filter((elem) =>
          elem.title.toLowerCase().includes(optimizedSearchValue)
        );
      });
    }, 300),
    [array]
  );

  useEffect(() => {
    if (array) {
      setFilteredArray(array);
    }
  }, [array]);

  useEffect(() => {
    debouncedApplyFilter(searchValue);
  }, [debouncedApplyFilter, searchValue]);

  return { filteredArray };
};

export default useDebouncedApplySearch;
