import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Container } from '@material-ui/core';


// style={{ textAlign:"center",  fontWeight:"400",
//   fontStyle:"normal", fontSize: '16px', letterSpacing: "4px",
//   marginTop: "16px", lineHeight: '180%', width: '312px',
//   marginLeft: "auto", marginRight: 'auto'
// }}

  
  class BasicCard extends Component {


    render(){
        const {
            question: { hint, text }, qnum
        } = this.props

        return (
        <Container>
            {/* <Card sx={{ minWidth: 275, maxWidth: 500, marginTop: '35px' }} className="mainCard">
                <CardContent> */}



            <div className='mainCard' style={{
                
            }}>
                <h1 style={{
                    fontSize: '28px'
                }}>
                    Вопрос № {qnum + 1}
                </h1>
                {/* <h2 sx={{ mb: 1.5 }} color="text.secondary">
                    {hint}
                </h2> */}
                <p style={{
                    fontWeight:"400", lineHeight: '160%', fontSize: '20px'
                }}>
                    {text}
                </p>
                <p style={{
                    fontWeight:"400", lineHeight: '160%', fontSize: '14px',
                    fontStyle: 'italic', opacity: '50%'
                }}>
                    {hint}
                </p>
            </div>
                


{/* 
                </CardContent>
            </Card> */}
        </Container>
        );
    }
  }


  export default BasicCard;