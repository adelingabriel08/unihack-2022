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

  return <input type="file" onChange={handleChange} />;
};
export default ImageUpload;
