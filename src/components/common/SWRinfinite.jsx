//react
import useSWRInfinite from "swr/infinite";
import { useBottomScrollListener } from "react-bottom-scroll-listener";

export const getKey = (page, url, data) => {
  const data1 = {
    current_page: page,
    item_per_page: window.innerWidth < 900 ? 10 : 12,
    ...data,
  };
  return [url, data1];
};

const useSWRinfinite = (url, filter, key = "data") => {
  const { data, error, setSize, size, mutate, isValidating, isLoading } =
    useSWRInfinite((page) => getKey(page + 1, url, filter));
  const isLoadingMore = data?.length !== size && !isLoading;
  const loadmore = () => {
    if (
      size + 1 <= data?.[data?.length - 1]?.pagination?.total_pages &&
      !isLoadingMore
    ) {
      setSize(size + 1);
    }
  };

  const scrollRef = useBottomScrollListener(() => loadmore(), {
    debounce: 900,
    triggerOnNoScroll: true,
  });

  return {
    scrollRef,
    data:
      data &&
      data?.[0] &&
      [].concat(...data.map((pages) => (pages?.[key] ? pages?.[key] : []))),
    isLoadingMore,
    isValidating,
    isLoading,
    mutate,
    rest: data && data?.[data?.length - 1],
    loadmore,
    error,
  };
};
// export default useSWRinfinite;
