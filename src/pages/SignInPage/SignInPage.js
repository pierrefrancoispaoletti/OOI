import React, { useState } from "react";
import ButtonElement from "../../components/ButtonElement/ButtonElement";
import FormFieldItem from "../../components/FormFieldItem/FormFieldItem";
import { FormContainer, SignInContainer } from "./sign-in-page.style";
import PageTitleItem from "../../components/PageTitleItem/PageTitleItem";

const SignInPage = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  return (
    <SignInContainer>
      <PageTitleItem>Connexion</PageTitleItem>
      <FormContainer>
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
        <ButtonElement type="submit">Se Connecter</ButtonElement>
      </FormContainer>
    </SignInContainer>
  );
};

export default SignInPage;
