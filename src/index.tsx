import React, { Component } from 'react'
import { CreateElement } from 'create-component'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import styles from './login.module.css'

interface IState {
  username: string
  password: string
  rememberMe: string
}

interface IProps {
  handleLogin: any
}

export class Login extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      username: '',
      password: '',
      rememberMe: ''
    }
  }
  render() {
    const componentToCreate = {
      align: 'vertical',
      element: [
        {
          type: 'input',
          text: '',
          id: 'username',
          name: 'name1',
          mandatory: true
        },
        {
          type: 'password',
          text: '',
          id: 'password',
          name: 'name3',
          mandatory: true
        },
        {
          type: 'checkbox',
          text: 'Remember me',
          id: 'remember',
          name: 'name4',
          mandatory: true
        }
      ]
    }
    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={styles.paper} id='paper'>
          <Avatar className={styles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form className={styles.form} noValidate>
            <CreateElement
              componentToCreate={componentToCreate}
              onChangeElement={this.handleElement.bind(this)}
            />
            <div className={styles.submit}>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                id='submit'
                onClick={() =>
                  this.props.handleLogin(
                    this.state.username,
                    this.state.password,
                    this.state.rememberMe
                  )
                }
              >
                Sign In
              </Button>
            </div>
          </form>
        </div>
        <Grid container>
          <Grid item xs>
            <Link href='#' variant='body2'>
              Forgot password?
            </Link>
          </Grid>
        </Grid>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    )
  }
  handleElement(event: any, id: String) {
    console.log(id, event)
    let username = this.state.username
    let password = this.state.password
    let rememberMe = this.state.rememberMe
    if ((id = 'username')) {
      username = event.target.value
    }
    if ((id = 'password')) {
      password = event.target.value
    }
    if ((id = 'checkbox')) {
      rememberMe = event.target.checked
    }
    this.setState({ username, password, rememberMe })
  }
}

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
