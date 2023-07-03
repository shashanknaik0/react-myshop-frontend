import { Box, Button, TextField } from "@material-ui/core";
import apiService from "../../helpers/apiService";
import useStyles from "./styles/useStyle";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const send = async (event) => {
        let form = event.target
        event.preventDefault();
        let data = {
            fname: form.fname.value,
            lname: form.lname.value,
            uname: form.uname.value,
            pwd: form.pwd.value,
            email: form.email.value
        }

        try {
            let response = await apiService.post('signup', data)
            console.log(response.data)
            navigate('/login',{replace:true})

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Box className={classes.formbox}>
            <form onSubmit={send} className={classes.form}>
                <TextField
                    className={classes.feilds}
                    id="email"
                    variant="outlined"
                    name="email"
                    label="email"
                    required fullWidth />
                <TextField className={classes.feilds}
                    id="fname"
                    variant="outlined"
                    name="fname"
                    label="first name"
                    required fullWidth />
                <TextField className={classes.feilds}
                    id="lname"
                    variant="outlined"
                    name="lname"
                    label="last name"
                    required fullWidth />
                <TextField className={classes.feilds}
                    id="uname"
                    variant="outlined"
                    name="uname"
                    label="username"
                    required fullWidth />
                <TextField className={classes.feilds}
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
                    fullWidth>signup</Button>
            </form>
        </Box>
    )
}

export default Signup