import React, { useState, useEffect, memo } from 'react';
import { ReactComponent as Oval } from '../oval.svg';
// import Button from '../../../../../button';
import { AgainContainer, AgainTitle, Time, Button } from './style';

interface TimerButtonProps {
  reSend: () => void;
}

const TimerButton: React.FC<TimerButtonProps> = ({ reSend }) => {
  const [timer, setTimer] = useState(59);
  const [finish, setFinish] = useState<boolean>(false);

  let timerHandler2: any;

  useEffect(() => {
    const timerHandler = setInterval(() => {
      console.log(1);
      setTimer((t) => {
        if (t > 0) {
          return t - 1;
        } else {
          setFinish(true);
          clearInterval(timerHandler);
          return 0;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timerHandler);
      clearInterval(timerHandler2);
    };
  }, [timer]);

  const reTimer = () => {
    timerHandler2 = setInterval(() => {
      setTimer((t) => {
        if (t > 0) {
          return t - 1;
        } else {
          setFinish(true);
          clearInterval(timerHandler2);
          return 0;
        }
      });
    }, 1000);
  };

  const reSendHandler = () => {
    reSend();
    setTimer(59);
    reTimer();
    setFinish(false);
  };

  return (
    <Button
      finish={finish}
      onClick={!finish ? () => console.log() : reSendHandler}
    >
      <AgainContainer>
        <AgainTitle>
          Отправить еще раз. <Oval />
        </AgainTitle>
        {!finish && <Time>0:{timer}</Time>}
      </AgainContainer>
    </Button>
  );
};

export default TimerButton;
