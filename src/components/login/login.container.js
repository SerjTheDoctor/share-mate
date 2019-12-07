import { connect } from 'react-redux';
import Login from './login.component';
import { signIn } from '../../actions';

const mapDispathToProps = dispatch => ({
    _login: (email, password) => dispatch(signIn(email, password))
});

export default connect(null, mapDispathToProps)(Login);