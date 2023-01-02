import { Rating } from "@mui/material";

const BasicRating = ({ value }) => {
  return (
    <div>
      <Rating defaultValue={value} precision={0.1} readOnly />
    </div>
  );
};

export default BasicRating;
