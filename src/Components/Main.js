import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import Card from './Card';




class Main extends Component {

    constructor(props){
      super(props);
    
      this.state ={
      questions: [
        {
          hint: 'Разогрев',
          text: `Когда ты в полседний раз плакал?`
        },
        {
          hint: 'Разогрев',
          text: `Насколько сильно ты можешь нарушить закон?`
        },
        {
          hint: 'Разогрев',
          text: `Насколько сильно ты уже нарушил закон?`
        },
        {
          hint: 'Всё ещё разогрев',
          text: `Время или деньги`
        },
        {
          hint: 'Разогрев',
          text: `Кто должен быть главным в отношениях?`
        },
        {
          hint: 'Разогрев',
          text: `Какой максимальный и минимальный возраст человека с которым можешь позволить себе отношения?`
        },
        {
          hint: 'Разогрев',
          text: `Какой максимальный и минимальный возраст человека с которым можешь позволить себе секс?`
        },
        {
          hint: 'Разогрев',
          text: `Что главное в противоположном поле?`
        },
        {
          hint: 'Посерьезнее',
          text: `Как часто то обманываешь?`
        },
        {
          hint: 'Не маленькая ложь, а именно обман который привел к последствиям или повлиял на что-то',
          text: `Когда последний раз ты обманывал?`
        },
        {
          hint: 'Посерьезнее',
          text: `Что бы ты сделал, имея возможность целые сутки быть невидимым?`
        },
        {
          hint: 'Посерьезнее',
          text: `Имея возможность безнаказанно совершить любое преступление, что сделаешь?`
        },
        {
          hint: 'Посерьезнее',
          text: `Имея возможность запереть любого человека в психиатрическую больницу, кого бы запер?`
        },
        {
          hint: 'Посерьезнее',
          text: `Существуют разные мнения о том, как часто должны принимать ванну мужчина и женщина. 
          Как сам считаешь?`
        },
        {
          hint: 'Посерьезнее',
          text: `Раздражают ли тебя пердеж и отрыжка других?`
        },
        {
          hint: 'Ебанутый вопрос',
          text: `Тебе дали слона. Ты не можешь его просто выкинуть или продать. Что будешь с ним делать?`
        },
        {
          hint: 'Вопрос',
          text: `Любимый фильм?`
        },
        {
          hint: 'Вопрос',
          text: `Любимая музыка?`
        },
        {
          hint: 'Вопрос',
          text: `Когда ты в последний раз плакал?`
        },
        {
          hint: 'Да или нет',
          text: `Путин красавчик?`
        },
        {
          hint: 'Вопрос',
          text: `Оказавшись перед Путиным, что ему скажешь?`
        },
        {
          hint: 'Вопрос',
          text: `Три лучших Рэпера на сегодняший день?`
        },
        {
          hint: 'Вопрос',
          text: `Передернуть на улице или пойти на свидание с бывшим?`
        },
        {
          hint: 'Вопрос',
          text: `Жить без телефона или секса?`
        },
        {
          hint: 'Вопрос',
          text: `Работать гаишником или проституткой на трассе?`
        },
        {
          hint: 'На нудийском пляже',
          text: `Позагорала бы нагишом за 10.000$?`
        },
        {
          hint: 'ы',
          text: `Асексуальность или вечная озабоченность?`
        },
        {
          hint: 'Что за бред?',
          text: `Вилкой в глаз или в жопу раз?`
        },
        {
          hint: 'Послежнее',
          text: `Как ты относишься к анальному сексу?`
        },
        {
          hint: 'Послежнее',
          text: `Сколько нужно денег для комфортной жизни?`
        },
        {
          hint: 'Кастомные',
          text: `Считаете ли вы, что оценки что-то решают?`
        },
        {
          hint: 'Кастомные',
          text: `Что для вас главное в отношениях? `
        },
        {
          hint: 'Кастомные',
          text: `Сколько у вас нижнего белья?  `
        },
        {
          hint: 'Кастомные',
          text: `Сколько у вас секс игрушек?   `
        },
        {
          hint: 'Кастомные',
          text: `Какая часть вашего тела вам больше всего не нравится?`
        },
        {
          hint: 'Кастомные',
          text: `Вас действительно нужно все то, что у вас есть сейчас?`
        },
        {
          hint: 'Кастомные',
          text: `Вы когда-нибудь были влюбленны в парня/девушку вашего лучшего друга?`
        },
        {
          hint: 'Кастомные',
          text: `Кто бы из присутствующий был супер героем, а кто злодеем?`
        },
        {
          hint: 'Кастомные',
          text: `Срифмуй "ой"`
        },
        {
          hint: 'Кастомные',
          text: `Чтобы вы сделали, если бы у вас было неограниченное количество денег?`
        },
        {
          hint: 'Кастомные',
          text: `3 главных Нет когда тема заходит об отношениях`
        },
        {
          hint: 'Кастомные',
          text: `О чем сожалеешь больше всего`
        },
        {
          hint: 'Кастомные',
          text: `Что ты любишь больше всего в себе `
        },
        {
          hint: 'Кастомные',
          text: `Что сделает тебя самым счастливым или грустным `
        },
        {
          hint: 'Кастомные',
          text: `Есть ли у вас семейная традиция, которую вы обещаете продолжить`
        },
        {
          hint: 'Кастомные',
          text: `Веришь в экстрасенсов?`
        },
        {
          hint: 'Кастомные',
          text: `В какой ситуации можно ударить девушку?`
        },
        {
          hint: 'Кастомные',
          text: `Машина мечты?`
        },
        {
          hint: 'Кастомные',
          text: `В какие теории заговора ты веришь?`
        },
        {
          hint: 'Кастомные',
          text: `Что не даёт вам уснуть ночью?`
        },
        {
          hint: 'Кастомные',
          text: `Каким вы видите себя через 10 лет?`
        },
        {
          hint: 'Кастомные',
          text: `Вы бы предпочли погребение или кремацию `
        },
        {
          hint: 'Кастомные',
          text: `Вы довольны своей жизнью прямо сейчас?`
        }
        
        // ,{
          
        //   hint: 'Thank you!',
        //   text: `Just wanted to thank Sam
        //   and his team for an
        //   excellent service and
        //   perfect tile installation.
        //   I have been working with
        //   Lirioplan for many years
        //   now and it is the only
        //   company I trust in Ontario`
        // }
          
        ],
        questionNumber: 0
      }
    }

    prevQ = e => {
      if(this.state.questionNumber === 0){
        this.setState({
          questionNumber: this.state.questions.length-1
        })
      } else{
        this.setState({
            questionNumber: this.state.questionNumber - 1
        })
      }
    }

    nextQ = e => {
      if(this.state.questionNumber === this.state.questions.length-1){
        this.setState({
          questionNumber: 0
        })
      } else{
        this.setState({
            questionNumber: this.state.questionNumber + 1
        })
      }
    }

  render() {

    console.log(this.state.questionNumber);



    return (
      <div className='mainDiv'> 
        <div className='wrapper'>

          <div class="base one"></div>
          <div class="base two"></div>
          <div class="base three"></div>

          
          {/* Hello */}
          <Card style={{marginLeft: 'auto', marginRight: 'auto',
                alignItems: 'center', textAlign: 'center'}} 
          question={this.state.questions[this.state.questionNumber]} key={this.state.questionNumber} 
          qnum={this.state.questionNumber}
          />

          <Button style={{position: 'absolute', left: '35px', marginTop: '20px',
            fontSize: '24px', WebkitBackdropFilter: 'blur(50px)', borderRadius:'10px'}}
            onClick={this.prevQ}  variant="outlined" size="large" 
          >Назад</Button>

          <Button style={{position: 'absolute', right: '35px', marginTop: '20px', 
            fontSize: '24px', WebkitBackdropFilter: 'blur(50px)', borderRadius:'10px'}}
            onClick={this.nextQ}  variant="outlined" size="large"
          >Вперед</Button>
          
        </div>
      </div>
    );
  }
}

export default Main