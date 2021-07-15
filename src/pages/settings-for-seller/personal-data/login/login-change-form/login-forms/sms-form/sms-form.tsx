import React from 'react';
import { SmsFormContainer } from './style';
import { Caption } from '../password-form/style';
import Sms from '../../../../../../../../components/sms';

interface Props {
  phoneNumber: string;
  smsResend: () => void;
  smsHandler: (sms: string, callback: (error: string) => void) => void;
}

const SmsForm: React.FC<Props> = ({ phoneNumber, smsHandler, smsResend }) => {
  return (
    <SmsFormContainer>
      <Caption>
        Код изменение номера телефона отправлен на номер {phoneNumber}
      </Caption>
      <Sms sendSms={smsHandler} reSend={smsResend} />
    </SmsFormContainer>
  );
};

export default SmsForm;
