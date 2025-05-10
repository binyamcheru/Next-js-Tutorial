const SignInPage = ({ params }: { params: { "sign-in": string[] } }) => {
  console.log(params);
  return <div>SignInPage: {params["sign-in"][0]}</div>;
};
export default SignInPage;
