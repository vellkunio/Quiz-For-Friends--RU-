import React, { Component, Fragment } from 'react'
import MyButton from '../util/MyButton';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import AddIcon from '@mui/icons-material/Add';

//MUI Dialog stuff
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export class CreateQuestion extends Component {

    constructor(props){
        super(props);
        this.state ={
            text: '',
            hint: '',
            errors: {},
            dialog: false,
            loading: false
        }
    }

    dialogToOpenState = e => {
        this.setState({
            dialog: true
        })
    }
    dialogToCloseState = e => {
        this.setState({
            dialog: false
        })
    }

    handleChange = (event) => {
    
        this.setState({
            [event.target.name]: event.target.value
        });

    }

    handleChangeCheck = e => {
        this.setState({ [e.target.name]: e.target.checked });
    }

    //Code to Edit Project
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const questionData = {
            text: this.state.text,
            hint: this.state.hint
        }

        axios.post(`/question`, questionData)
        .then((res) => {
            this.setState({
                text: '',
                hint: '',
                errors: {},
                dialog: false,
                loading: false
            })
        })
        
        .catch((err) => {
            this.setState({
                errors: err.response.data,
                loading: false
            })
        })
    }


    render() {

        return (
            <Fragment>
            <MyButton tip="Add new question" onClick={this.dialogToOpenState}>
                <AddIcon />
            </MyButton>

            <Dialog 
            open={this.state.dialog} 
            onClose={this.dialogToCloseState}
            PaperProps={{
                style: {
                    background: '#6868AC',
                //   boxShadow: 'none',
                },
              }}
            >
            <div>
                <DialogTitle style={{color: '#E3C1BE'}}>Add material</DialogTitle>

                <DialogContent>
                <form noValidate onSubmit={this.handleSubmit}>

                {/* Material Type */}
                <TextField
                    id="text"
                    type="text"
                    name="text"
                    label="Question" 
                    variant="standard" 
                    size="small" 
                    onChange={this.handleChange} 
                    value={this.state.text}
                    style={{marginBottom: '20px', color: '#C6AAAF'}} 
                    color='secondary'
                    fullWidth 
                    multiline
                    InputLabelProps={{
                        style: {
                            color: 'rgba(0,0,0,0.5)'
                        }
                    }}
                    InputProps={{
                        style: {
                            color: '#C6AAAF'
                        }
                    }}
                />

                {/* Material Exact Name */}
                <TextField
                    id="hint"
                    type="text"
                    name="hint"
                    label="Hint" 
                    variant="standard"
                    size="small" 
                    onChange={this.handleChange} 
                    value={this.state.hint}
                    style={{marginBottom: '20px', color: '#C6AAAF'}}
                    color='secondary'
                    fullWidth 
                    multiline
                    InputLabelProps={{
                        style: {
                            color: 'rgba(0,0,0,0.5)'
                        }
                    }}
                    InputProps={{
                        style: {
                            color: '#C6AAAF'
                        }
                    }}
                />
                

                {/* LOADING */}
                {this.state.loading && (
                    <LinearProgress />
                )}
                {/* IF ERRORS */}
                <Typography variant="subtitle2" component="div" align="center" style={{color: "red"}}>
                    {this.state.errors.general}
                </Typography>

                <Button 
                type="submit" 
                size="small" 
                variant="outlined" 
                color="info" 
                style={{marginTop: "25px"}}
                disabled={this.state.loading}
                >
                <Typography variant="subtitle2">Done</Typography>
                </Button>

                </form>
                </DialogContent>
            </div>

            </Dialog>
            </Fragment>
        )
    }
}

export default CreateQuestion;