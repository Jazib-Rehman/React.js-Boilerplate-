import { Result, Button } from "antd";
import { useLocale } from "antd/es/locale";
import { useNavigate } from "react-router";

const Comp_404 = () => {
  const navigate = useNavigate();
  const location = useLocale();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button
          onClick={() =>
            navigate(
              location.state &&
                location.state.from &&
                location?.state?.from?.pathname
                ? location?.state?.from?.pathname
                : "/"
            )
          }
          type="primary"
        >
          Back Home
        </Button>
      }
    />
  );
};

export default Comp_404;
