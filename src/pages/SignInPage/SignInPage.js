import React, { useState } from "react";
import { connect } from "react-redux";
import { connectUser } from "../../redux/reducers/user/user-actions";
import { logInWithUserCredentials } from "../../database/user.database";

import ButtonElement from "../../components/ButtonElement/ButtonElement";
import FormFieldItem from "../../components/FormFieldItem/FormFieldItem";
import PageTitleItem from "../../components/PageTitleItem/PageTitleItem";

import WithLoader from "../../components/WithLoader/WithLoader";

import { FormContainer, SignInContainer } from "./sign-in-page.style";

const SignInPage = ({ connectUser }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logInWithUserCredentials(credentials, connectUser, setLoading);
  };
  return (
    <SignInContainer>
      <PageTitleItem>Connexion</PageTitleItem>
      <FormContainer onSubmit={handleSubmit}>
        <FormFieldItem
          handleChange={handleChange}
          label="E-Mail"
          type="email"
          id="email"
          name="email"
          value={credentials.email}
        />
        <FormFieldItem
          handleChange={handleChange}
          label="Password"
          type="password"
          id="password"
          name="password"
          value={credentials.password}
        />
        {loading ? (
          <WithLoader />
        ) : (
          <ButtonElement disabled={loading} type="submit">
            Se Connecter
          </ButtonElement>
        )}
      </FormContainer>
    </SignInContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch) => ({
  connectUser: (token, message) => dispatch(connectUser(token, message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
