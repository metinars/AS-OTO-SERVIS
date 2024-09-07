import AdminLogin from '../../../components/Dahsboard/AdminAuth/AdminLogin';

const AuthenticationPage = () => {
  return <AdminLogin />;
};

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';

  if (mode !== 'login' && mode !== 'signup') {
    throw json(
      { message: 'Desteklenmeyen Mod' },
      {
        status: 422,
      }
    );
  }
}
