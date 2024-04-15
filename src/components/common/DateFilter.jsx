import { Box, Button } from "@mui/material";
import moment from "moment/moment";
import { useState } from "react";
import { Calendar } from "react-multi-date-picker";

const buttonStyle = {
  py: "8px",
  borderRadius: "0px",
  fontWeight: 500,
  "&.Mui-disabled": {
    bgcolor: "rgba(247, 147, 30, 0.15)",
    color: "primary.main"
  }
};

const getISOstring = (data) => {
  return {
    dates_from: data?.dates_from
      ? moment(data?.dates_from, "YYYY/MM/DD").set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).toISOString()
      : "",
    ...(data?.dates_from && {
      dates_to: data?.dates_to
        ? moment(data?.dates_to, "YYYY/MM/DD").set({ hour: 23, minute: 59, second: 59, millisecond: 0 }).toISOString()
        : moment(data?.dates_from, "YYYY/MM/DD").set({ hour: 23, minute: 59, second: 59, millisecond: 0 }).toISOString()
    })
  };
};

const DateFilter = ({ setFilter, Filter, setAnchorEl, customFilters }) => {
  const [data, setData] = useState(Filter);

  return (
    <Box display="grid" justifyContent="center" gridTemplateColumns={customFilters ? "140px 1fr" : "1fr"} py={0.8}>
      {customFilters && (
        <Box>
          <Button
            variant="text"
            disabled={data?.date_time === ""}
            onClick={() => {
              setFilter((prev) => ({
                ...prev,
                date_time: "",
                dates_from: "",
                dates_to: "",
                current_page: 1
              }));
              setAnchorEl();
            }}
            sx={buttonStyle}
          >
            All
          </Button>
          <Button
            variant="text"
            disabled={data?.date_time === "Today"}
            onClick={() => {
              setFilter((prev) => ({
                ...prev,
                date_time: "Today",
                dates_from: "",
                dates_to: "",
                current_page: 1
              }));
              setAnchorEl();
            }}
            sx={buttonStyle}
          >
            Today
          </Button>
          <Button
            variant="text"
            disabled={data?.date_time === "Yesterday"}
            onClick={() => {
              setFilter((prev) => ({
                ...prev,
                date_time: "Yesterday",
                dates_from: "",
                dates_to: "",
                current_page: 1
              }));
              setAnchorEl();
            }}
            sx={buttonStyle}
          >
            Yesterday
          </Button>
          <Button
            variant="text"
            disabled={data?.date_time === "This Week"}
            onClick={() => {
              setFilter((prev) => ({
                ...prev,
                date_time: "This Week",
                dates_from: "",
                dates_to: "",
                current_page: 1
              }));
              setAnchorEl();
            }}
            sx={buttonStyle}
          >
            This Week
          </Button>
          <Button
            variant="text"
            disabled={data?.date_time === "Last Week"}
            onClick={() => {
              setFilter((prev) => ({
                ...prev,
                date_time: "Last Week",
                dates_from: "",
                dates_to: "",
                current_page: 1
              }));
              setAnchorEl();
            }}
            sx={buttonStyle}
          >
            Last Week
          </Button>
          <Button
            variant="text"
            disabled={data?.date_time === "This Month"}
            onClick={() => {
              setFilter((prev) => ({
                ...prev,
                date_time: "This Month",
                dates_from: "",
                dates_to: "",
                current_page: 1
              }));
              setAnchorEl();
            }}
            sx={buttonStyle}
          >
            This Month
          </Button>
          <Button
            variant="text"
            disabled={data?.date_time === "Custom"}
            onClick={() =>
              setData((prev) => ({
                ...prev,
                date_time: "Custom",
                current_page: 1
              }))
            }
            sx={buttonStyle}
          >
            Custom
          </Button>
        </Box>
      )}
      <Box>
        <Calendar
          range
          className="custom-calendar"
          mapDays={({ date, selectedDate, currentMonth, isSameDate, today }) => {
            const props = { style: { color: "#ffffffcc" } };
            if (isSameDate(today, date)) {
              props.style = {
                ...props.style,
                backgroundColor: "rgba(159, 18, 57, 0.7)"
              };
            }
            if (isSameDate(date, selectedDate))
              props.style = {
                ...props.style,
                border: "2px solid rgba(159, 18, 57, 1)",
                backgroundColor: "rgba(159, 18, 57, 1)"
              };
            return props;
          }}
          onChange={(e) =>
            setData((prev) => ({
              ...prev,
              dates_from: e[0].format(),
              dates_to: e?.[1]?.format(),
              date_time: "Custom",
              current_page: 1
            }))
          }
          value={[data?.dates_from, data?.dates_to]}
        />
      </Box>
      <Box sx={{ gridColumn: "1 / 3" }}>
        <Button
          onClick={() => {
            setFilter(getISOstring(data));
            setAnchorEl();
          }}
          fullWidth={false}
          sx={{ display: "block", m: "0 auto" }}
        >
          Apply
        </Button>
      </Box>
    </Box>
  );
};
export default DateFilter;
