import moment from "moment";
import { useEffect, useState } from "react";
import useSWR from "swr";

export const rupeeFormat = (number) => {
  return isNaN(number)
    ? number
    : Number(number)?.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
};

export const usePagination = (url, filter) => {
  const [total_pages, setTotalPages] = useState(1);
  const { data, error, mutate, isValidating, isLoading } = useSWR([url, { current_page: 1, ...filter }]);

  const rest = data;

  useEffect(() => {
    if (data) {
      setTotalPages(data?.pagination?.total_pages);
    }
  }, [data]);

  return {
    data: data?.data,
    totalRecords: data?.pagination?.total_items || 0,
    paginationProp: {
      page: Number(data?.pagination?.current_page) || filter?.current_page || 1,
      count: total_pages
    },
    rest,
    isLoading,
    mutate,
    isValidating,
    error
  };
};

const getWeekNumber = (s) => {
  switch (s) {
    case "first":
      return 1;
    case "second":
      return 2;
    case "third":
      return 3;
    case "fourth":
      return 4;
    case "fifth":
      return 1;
    default:
      break;
  }
};

export const getAllDates = (s, e) => {
  const date = [moment(s), moment(e)].sort((a, b) => a.unix() - b.unix());

  return Array.from({ length: Math.abs(date[0].diff(date[1], "day")) + 1 }, (_, index) => date[0].clone().add(index, "day"));
};

export const getWeekends = (array = [], settings = []) => {
  const weekEnds = [];
  settings.forEach((a) => {
    if (a.typeOfWeekEnd.includes("All")) {
      const day = moment.weekdays().indexOf(a.day);

      weekEnds.push(array.filter((a) => a.day() === day));
    } else {
      a.typeOfWeekEnd.forEach((b) => {
        const day = moment.weekdays().indexOf(a.day);
        const week = getWeekNumber(b);
        weekEnds.push(
          array.filter((c) => {
            return c.day() === day && c.week() - c.clone().startOf("month").week() + 1 === week;
          })
        );
      });
    }
  });
  return weekEnds.flat();
};

export const getHolidayBetweenDate = (s, e, holidays = []) => {
  const date = [moment(s), moment(e)].sort((a, b) => a.unix() - b.unix());
  return holidays
    .map((a) => moment(a?.date))
    .filter((a) => a.isSame(date[0], "day") || a.isBetween(date[0], date[1]) || a.isSame(date[1], "day"));
};

export const getTotalTime = (array = []) => {
  const dates = array
    .slice(0, array.length - (array.length % 2))
    .map((a) => moment(a))
    .sort((a, b) => a.unix() - b.unix());
  return Array.from({ length: Math.abs(dates.length / 2) }, (_, index) => dates[index * 2 + 1].diff(dates[index * 2])).reduce(
    (acc, cv) => acc + cv,
    0
  );
};

export const getDateWiseObject = ({ startDate, endDate, settings, leaves, holidays, punches, misPunch }) => {
  const getAllDate = getAllDates(startDate, endDate);
  const weekEnd = getWeekends(getAllDate, settings);
  const holiday = getHolidayBetweenDate(startDate, endDate, holidays);
  return getAllDate.map((cv) => ({
    date: cv,
    isHoliday: holiday.some((a) => a.isSame(cv, "day")),
    isWeekEnd: weekEnd.some((a) => a.isSame(cv, "day")),
    isLeave: leaves.some(
      (a) => (cv.isBetween(a.from, a.to, "day") || cv.isSame(a.from, "day") || cv.isSame(a.to, "day")) && a.status !== "declined"
    ),
    punches: [...punches.filter((a) => cv.isSame(a, "day")), ...misPunch?.filter((a) => cv.isSame(a, "day"))]
      .map((a) => moment(a))
      .sort((a, b) => a.unix() - b.unix()),
    totalHours: getTotalTime([...punches.filter((a) => cv.isSame(a, "day")), ...misPunch?.filter((a) => cv.isSame(a, "day"))])
  }));
};
