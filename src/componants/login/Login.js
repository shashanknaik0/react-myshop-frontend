import apiService from "../../helpers/apiService";
import { TextField, Button, Box } from "@material-ui/core";
import useStyles from "../signup/styles/useStyle";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

const Login = ({setAuthenticated}) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const cookies = new Cookies();

    const send = async (event) => {
        let form = event.target
        event.preventDefault();

        let data = {
            uname: form.uname.value,
            pwd: form.pwd.value
        }

        try {
            let response = await apiService.post('login', data)
            console.log(response.data)
            cookies.set('isloggedin', 'True',{path:"/",maxAge:1209600})
            setAuthenticated(true)
            navigate('/',{replace:true})
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Box className={classes.formbox}>
            <form onSubmit={send} className={classes.form}>
                <TextField
                    className={classes.feilds}
                    id="uname"
                    variant="outlined"
                    name="uname"
                    label="username"
                    required fullWidth />
                <TextField
                    className={classes.feilds}
                    id="pwd"
                    type="password"
                    variant="outlined"
                    name="pwd"
                    label="password"
                    required fullWidth />
                <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    fullWidth>Login</Button>
            </form>
        </Box>
    )
}

export default Login