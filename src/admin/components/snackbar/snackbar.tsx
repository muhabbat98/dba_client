import { useSelector } from '../../../hooks/useSelector';
import { SnackbarContainer, SnackbarMessage, SnackbarIcon } from './style';
import { ReactComponent as Success } from '../../assets/icons/snackbar-success.svg';
import { ReactComponent as Warning } from '../../assets/icons/snackbar-warning.svg';
import { ReactComponent as Info } from '../../assets/icons/snackbar-info.svg';
import { ReactComponent as Error } from '../../assets/icons/snackbar-error.svg';

const icons = {
  success: Success,
  warning: Warning,
  info: Info,
  error: Error,
};

const Snackbar = () => {
  const { message, type } = useSelector((state) => state.snackbar);

  const Icon = icons[type!];

  return type ? (
    <SnackbarContainer bgColor={type}>
      <SnackbarIcon>
        <Icon />
      </SnackbarIcon>
      <SnackbarMessage>{message}</SnackbarMessage>
    </SnackbarContainer>
  ) : null;
};

export default Snackbar;
