import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Alert,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import { Api } from "../../common/Api";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errorText: "",
    loading: false,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      errorText: "",
      [e.target.name + "Error"]: "",
    });
  };
  login = (e) => {
    e.preventDefault();
    this.props.history.push("/dashboard");
    var validation = true;
    if (this.state.email === "") {
      this.setState({
        emailError: "* Email is required",
      });
      validation = false;
    }
    if (this.state.password === "") {
      this.setState({
        passwordError: "* Password is required",
      });
      validation = false;
    }
    if (validation) {
      var data = {
        email: this.state.email,
        password: this.state.password,
        type: "admin",
      };
      this.setState({
        loading: true,
      });
      console.log(data);
      Api("login", "post", data)
        .then((response) => {
          console.log(response);
          if (response.data) {
            localStorage.setItem("token", response.data.success.token);
          }
          this.props.history.push("/dashboard2");
          // window.location.href="/dashboard2";
        })
        .catch((error) => {
          console.log(error);
          this.props.history.push("/dashboard2");
          this.setState({
            loading: false,
          });
          if (error.response) {
            console.log(error.response);
            if (error.response.status === 401) {
              this.setState({
                errorText: "* Invalid email or password",
              });
            }
          }
        });
    }
  };

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="email"
                          placeholder="email"
                          autoComplete="username"
                          name="email"
                          value={this.state.name}
                          onChange={this.handleChange}
                        />
                      </InputGroup>
                      <small style={{ color: "#f86c6b" }}>
                        {this.state.emailError}
                      </small>
                      <InputGroup className=" mt-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          name="password"
                          value={this.state.password}
                          onChange={this.handleChange}
                        />
                      </InputGroup>
                      <small style={{ color: "#f86c6b" }}>
                        {this.state.passwordError}
                      </small>
                      {this.state.errorText !== "" && (
                        <Alert color="danger" className="mt-3">
                          {this.state.errorText}
                        </Alert>
                      )}
                      <Row className="mt-4">
                        <Col xs="6">
                          {this.state.loading ? (
                            <Button color="primary" className="px-4">
                              <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                              </div>
                            </Button>
                          ) : (
                            <Button color="primary" className="px-4">
                              <Link to="/">Login</Link>
                            </Button>
                          )}
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">
                            Forgot password?
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
