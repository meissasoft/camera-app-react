import router from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { BarIcon } from '@/assets/svg/barIcon';
import { CrossIcon } from '@/assets/svg/crossIcon';
import { PasswordIcon } from '@/assets/svg/password';
import Button from '@/components/core/Button';
import Heading from '@/components/core/Header/Header';
import OTPInput from '@/components/core/Otp';
import { useAppDispatch } from '@/hooks/useReduxTypedHooks';
import { setVerificationStep } from '@/store/app';

import { DivMain } from './index.styles';

const VerifyOtp = () => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation('otpVerification');

  const handleBack = () => {
    router.push('/login');
  };

  const handleContinue = () => {
    router.push('/verification');
    dispatch(setVerificationStep(1));
  };

  return (
    <DivMain>
      <div className="heading">
        <Heading text={t('mobile_verification')} onClick={handleBack} />
      </div>
      <div className="inner">
        <div className="barIcon">
          <BarIcon />
        </div>
        <div className="crossIcon" onClick={handleBack}>
          <CrossIcon />
        </div>
        <div className="my-5 text-center">
          <PasswordIcon />
          <div className="title">{t('verification_code')}</div>
          <p className="description">{t('please_enter_the_verification_code_we_sent_to_your_phone_number')}</p>
        </div>
        <OTPInput
          autoFocus
          isNumberInput
          length={6}
          className="otpContainer"
          inputClassName="otpInput"
          onChangeOTP={(e) => {
            console.log(e);
          }}
        />

        <div className="d-flex w-100 justify-content-center align-items-center mt-4">
          <span className="mx-2 code-text">{t("i_did'nt_receive_a_code")}</span>
          <button className="btn btn-primary">
            <span className="text">{t('resend')}</span>
          </button>
        </div>

        <Button isBottom onClick={handleContinue} className="my-5 m-auto">
          {t('continue')}
        </Button>
      </div>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['otpVerification'])),
  },
});

export default VerifyOtp;
