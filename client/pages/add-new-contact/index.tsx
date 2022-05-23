import { FormEvent } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as Styles from "./AddNewContactPage.styled";

function AddNewContactPage() {
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log("ello");
  };

  return (
    <Styles.Form onSubmit={submitHandler}>
      <Input type="text" placeholder="name" />
      <Input type="text" placeholder="email" />
      <Input type="text" placeholder="age" />
      <Button text="submit" inverted />
    </Styles.Form>
  );
}

export default AddNewContactPage;
