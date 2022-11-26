import { Box } from "@mui/material";
import { uploadImageService } from "../../../utils/api-service";

interface IProps {
  setImgUrl: any;
}

const ImageUpload = (props: IProps) => {
  const { setImgUrl } = props;

  const handleChange = async (event: { target: any }) => {
    if (event.target.files?.length !== 0) {
      const url = await uploadImageService(event.target.files);
      setImgUrl(url);
    }
  };

  return (
    <Box
      sx={{
        'input[type="file" i]': {
          margin: "10px",
          height: "55px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          display: "inline-block",
          padding: "6px 12px",
          cursor: "pointer",
        },
      }}
    >
      <input type="file" onChange={handleChange} />
    </Box>
  );
};
export default ImageUpload;
