import { Button, Form, FormProps, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { LoginSVG } from "src/assets/icons";
import { login } from "src/server/config/Urls";
import { ACCESS, ROLE, setLocal } from "src/server/Host";
import "src/styles/login.scss";
import { CatchError } from "src/utils/index";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login = () => {
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const { data } = await login(values);

      // SET ROLE
      setLocal(ROLE, data?.object?.role);

      // SET TOKEN
      setLocal(ACCESS, data?.object?.jwtToken);

      window.location.href = "/home/news";
    } catch (error) {
      navigate("/");
      CatchError(error);
    }
  };

  return (
    <div className="login_section">
      <div className="login_left">
        <div className="login_left_wrap">
          <Link to={"/login"} className="adminlogo">
            <img src={require("src/assets/images/logo.png")} alt="logo" />
            <span>ai.edu.uz</span>
          </Link>

          <div className="login_left_content">
            <p>
              AI.EDU.UZ tizimi uchun <span>boshqaruv</span> paneli
            </p>
            {/* <span>
              Kollejlar va texnikumlarda masofadan turib oʻqitish sirtqi va
              kechki taʼlim shakllarida oʻquv jarayonini masofadan turib
              oʻqitish tizimi.
            </span> */}
          </div>
        </div>
        {/* <video
          src={require("src/assets/images/video.mp4")}
          autoPlay
          loop
          playsInline
          muted
        ></video> */}

        <LoginSVG />
      </div>
      <div className="login-admin">
        <div className="login-admin__form">
          <h2>Tizimga kirish</h2>

          <div>
            <Form
              style={{ maxWidth: 600 }}
              onFinish={onFinish}
              autoComplete="off"
              layout="vertical"
            >
              <Form.Item<FieldType>
                label="Login"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldType>
                label="Parol"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </div>

          {/* <div className="login-admin__oneID">
            <a href="https://ai.edu.uz/api/auth/oneId">
              <div className="login-admin__title">ONE ID orqali kirish</div>
            </a>
            <div className="pulse-css">
              <div className="first-circle"></div>
              <div className="second-circle"></div>
              <div className="third-circle"></div>
            </div>
          </div> */}

          <p>
            O‘zbekiston Respublikasi qonunchiligi asosida, shaxsingiz
            to‘g’risidagi ma’lumotlarni id.egov.uz tizimidan olinganini ma’lum
            qilamiz
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
