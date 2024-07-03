import { useLocation, useNavigate } from 'react-router-dom';
import './errorPage.scss';
import Button from 'src/common/components/Button/Button';

interface Props {
  errorMessage?: string;
}

const ErrorPage = ({ errorMessage }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const errorText = location.state?.errorMessage || errorMessage || 'Unexpected error occured';

  const handleBackClick = () => navigate(-1);

  return (
    <div className="error-page">
      <img src="./src/assets/errorImage.png" className="error-page__image" />
      <p className="error-page__message">{errorText}</p>
      <Button text="Go back" onClick={handleBackClick} />
    </div>
  );
};

export default ErrorPage;
