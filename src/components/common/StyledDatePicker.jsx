import { Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

const StyledDatePicker = ({ control, name, error, placeholder, time }) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, name, value } }) => (
          <>
            <DatePicker
              multiple={false}
              name={name}
              value={value}
              format="DD-MM-YYYY HH:mm:ss"
              onChange={(date) => {
                onChange({
                  target: { name: "payment_date", value: date.format() },
                });
              }}
              placeholder={placeholder}
              containerStyle={{ width: "100%", background: "transparent" }}
              style={{
                width: "100%",
                height: "38px",
                border: "none",
                background: error ? "rgba(224, 53, 54, 0.2)" : "#0A1929",
                color: "#ffffff",
                fontFamily: "Opensans",
                fontSize: "100%",
              }}
              className="custom-calendar"
              mapDays={({
                date,
                selectedDate,
                currentMonth,
                isSameDate,
                today,
              }) => {
                const props = { style: { color: "#ffffffcc" } };
                if (isSameDate(today, date)) {
                  props.style = {
                    ...props.style,
                    backgroundColor: "rgba(0, 127, 255, 0.3)",
                    border: "2px solid rgba(0, 127, 255, 0.5)",
                  };
                }
                if (isSameDate(date, selectedDate))
                  props.style = {
                    ...props.style,
                    border: "2px solid rgba(0, 127, 255, 1)",
                    backgroundColor: "rgba(0, 127, 255, 1)",
                  };
                return props;
              }}
              calendarPosition="bottom-center"
              {...(time && { plugins: [<TimePicker position="bottom" />] })}
            />
          </>
        )}
      />
      <Typography
        color="error"
        fontWeight={400}
        fontSize="0.83rem"
        lineHeight={1.43}
      >
        {error}
      </Typography>
    </>
  );
};
// export default StyledDatePicker;
