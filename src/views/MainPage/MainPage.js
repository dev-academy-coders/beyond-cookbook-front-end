import React from "react";
import "antd/dist/antd.css";
import "./MainPage.css";
import ReactModalLogin from "react-modal-login";
import { Layout, Menu, Icon } from "antd";
const { Header, Sider, Content, Footer } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    showModal: false,
    loading: false,
    error: null
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, error: null });
  };

  startLoading = () => {
    this.setState({
      loading: true
    });
  };

  finishLoading = () => {
    this.setState({
      loading: false
    });
  };

  onTabsChange = () => {
    this.setState({
      error: null
    });
  };
  onLoginClick = () => {};
  onRegisterClick = () => {};
  onRecoverPassword = () => {};
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{ backgroundColor: "transparent" }}
        >
          <div className="logo" />
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ background: "transparent" }}
          >
            <Menu.Item key="1">
              <Icon type="home" style={{ fontSize: "18px" }} />
              <span style={{ fontSize: "15px", fontWeight: "500" }}>Home</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="project" style={{ fontSize: "18px" }} />
              <span style={{ fontSize: "15px", fontWeight: "500" }}>
                Nutrition
              </span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="mail" style={{ fontSize: "18px" }} />
              <span style={{ fontSize: "15px", fontWeight: "500" }}>
                Contact
              </span>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Header
            style={{
              background: "transparent",
              padding: 0
            }}
          >
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
            <div style={{ position: "relative", float: "right" }}>
              <Icon
                onClick={this.handleOpenModal}
                type="login"
                style={{
                  marginRight: "5px",
                  fontSize: "22px",
                  color: "#0C5B97"
                }}
              />

              <ReactModalLogin
                visible={this.state.showModal}
                onCloseModal={this.handleCloseModal}
                loading={this.state.loading}
                error={this.state.error}
                tabs={{
                  onChange: this.onTabsChange
                }}
                loginError={{
                  label: "Couldn't sign in, please try again."
                }}
                registerError={{
                  label: "Couldn't sign up, please try again."
                }}
                startLoading={this.startLoading}
                finishLoading={this.finishLoading}
                form={{
                  onLogin: this.onLoginClick,
                  onRegister: this.onRegisterClick,
                  onRecoverPassword: this.onRecoverPassword,
                  loginBtn: {
                    label: "SIGN IN"
                    // buttonClass: "login-btn"
                  },
                  registerBtn: {
                    label: "CREATE ACCOUNT"
                    // buttonClass: "register-btn"
                  },
                  recoverPasswordAnchor: {
                    label: "Forgot password?"
                  },
                  loginInputs: [
                    {
                      name: "Email",
                      type: "email",
                      id: "login",
                      className: "form-control",
                      placeholder: "Email"
                    },
                    {
                      name: "Password",
                      type: "password",
                      id: "password",
                      className: "form-control",
                      placeholder: "Password"
                    }
                  ],
                  registerInputs: [
                    {
                      name: "Full name",
                      type: "text",
                      id: "name",
                      className: "form-control",
                      placeholder: "Full name"
                    },
                    {
                      name: "Email",
                      type: "email",
                      id: "login",
                      className: "form-control",
                      placeholder: "Email"
                    },
                    {
                      name: "Password",
                      type: "password",
                      id: "password",
                      className: "form-control",
                      placeholder: "Password"
                    }
                  ]
                }}
              />
              <span
                class="sign-in"
                onClick={this.handleOpenModal}
                style={{
                  float: "top",
                  position: "center",
                  marginRight: "10px",
                  fontSize: "22px",
                  color: "#0C5B97",
                  cursor: "pointer"
                }}
              >
                Sign In
              </span>
            </div>
          </Header>
          <Content
            className="contents"
            style={{
              margin: "16px 36px",
              padding: 24,
              background: "transparent",
              width: "45vw",
              fontFamily: "Gabriola",
              fontSize: "25px"
            }}
          >
            This is a cookbook that will take your cooking far beyond. If you
            ever find yourself more than just hungry, this tool will let empower
            your food preparation experience. Interested? <br></br>
            <p></p>
            Beyond Cookbook is a tool that will let save your recipes in one
            place and make them at your disposal on any browser-supporting
            device. It is easy to add new recipes, browse, organise, edit and
            delete existing ones with Beyond Cookbook. But most importantly you
            will be able to evaluate the nutrient value and see to what extent
            your meals satisfy the recommended daily intake of proteins,
            vitamins, and minerals.
            <br></br>
            <p></p>
            You can give it a try and search for nutritional data of any,
            potential or actual, ingredient of your meal by clicking{" "}
            <a href="/">here</a>.<br></br>
            <p></p>
            If you wish to start your own cookbook and find out how nutritious
            your recipes are, please find yourself more than welcome to{" "}
            <a href="/">sign in</a> .
          </Content>
          <Footer
            style={{
              textAlign: "center",
              backgroundColor: "transparent",
              fontSize: "13px",
              height: "50px"
            }}
          >
            Beyond Cookbook ©2020 Created by Roma, Marceli, Filip
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default SiderDemo;
