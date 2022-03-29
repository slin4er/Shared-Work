import { useState, useEffect, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

export const App = () => {
  const [dataPost, setDataPost] = useState({})

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  useEffect(() => {
      //   // let response = await fetch('http://localhost:3000/user/signin',{
    const requestOptions = {
      method: "POST",
      // mode: "no-cors",
      headers: {

        "Content-type" : "application/json;charset=utf-8"
      },
      body: JSON.stringify(dataPost)
    }

    fetch('http://localhost:3000/user/signin', requestOptions)
    .then(data => data.json())
    .then(data => console.log(data))

    // console.log(data)
  },[dataPost])

  // const onSubmit = async (data: any) => {
  //   let response = await fetch('http://localhost:3000/user/signin',{
  //   // let response = await fetch('http://dev.trainee.dex-it.ru/api/Auth/SignUp',{
  //     method: "POST",
  //     headers: {
  //       "Content-type" : "application/json;charset=utf-8"
  //     },
  //     body: JSON.stringify(data)
  //   })
  //   let result
  //   if(response.ok) {
  //     result = await response.json();
  //   } else {
  //     result = response
  //   }
  //   console.log(result)
  // };

  const onSubmit = (data: SetStateAction<{}>) => {
    setDataPost(data)
  }

  return (
    <div>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <label>
          Name:
          <input {...register("name")} />
        </label> */}
        <label>
          Login:
          <input {...register("login", {
            required: true
          })} />
        </label>
        <div style={{height: 40}}>{errors?.login && <p>Error</p>}</div>
        {/* <label>
          Email:
          <input {...register("email")} />
        </label> */}
        <label>
          Password:
          <input {...register("password")} />
        </label>
        {/* <label>
          Password again:
          <input {...register("passwordAgain")} />
        </label> */}
        <input type={"submit"} />
      </form>
    </div>
  );
};
