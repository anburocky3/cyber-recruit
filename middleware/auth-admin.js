export default async function({ $auth, redirect }) {
  let user = $auth.state.user
  if (user && user.role == 'S') {
    //Let the user in
  } else {
    //Redirect to /
    redirect('/')
  }
}
