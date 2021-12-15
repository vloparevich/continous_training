import React from 'react';
import './App.css';
import IdCard from './components/id-card/IdCard';
import Random from './components/random/Random';
import BoxColor from './components/boxcolor/BoxColor';
import Greetings from './components/greeting/Greetings';
import CreditCard from './components/creditcard/CreditCard';
import Rating from './components/rating/Rating';
import DriverCard from './components/drivercard/DriverCard';
import LikeButton from './components/likebutton/LikeButton';
import ClickablePicture from './components/clickablepicture/ClickablePicture';
import Dice from './components/dice/Dice';
import Carousel from './components/carousel/Carousel';
import IdCard2 from './components/id-card-2/IdCard2';
import Greetings2 from './components/Greetings-2/Greetings2';
import Random2 from './components/Random-2/Random2';
import BoxColor2 from './components/BoxColor-2/BoxColor2';
import CreditCard2 from './components/CreditCard-2/CreditCard2';

function App() {
  return (
    <div className="App">
      {/* <IdCard
        lastName="Lop"
        firstName="Jake"
        gender="male"
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        height={200}
      />
      <Greetings lang="ru">Rurik</Greetings>
      <Greetings lang="en">Stefania</Greetings>

      <Random min={5} max={9} />
      <Random min={4} max={1} />

      <BoxColor r={100} g={103} b={90} />
      <BoxColor r={128} g={255} b={90} />
      <div className="credit-card-container">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
      <LikeButton />
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />
      <Dice />
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      /> */}
      <IdCard2
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        //  birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard2
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        //  birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings2 lang="de">Ludwig</Greetings2>
      <Greetings2 lang="fr">François</Greetings2>
      <Random2 min={2} max={6} />
      <BoxColor2 r={255} g={0} b={0} />
      <BoxColor2 r={200} g={100} b={0} />
      <BoxColor2 r={12} g={0} b={100} />
      <CreditCard2
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      <CreditCard2
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard2
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
    </div>
  );
}

export default App;
