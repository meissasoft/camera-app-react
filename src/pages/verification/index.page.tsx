import router from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { CardIcon } from '@/assets/svg/card-icon';
import Header from '@/components/core/Header';
import StepLayout from '@/components/StepsLayout';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxTypedHooks';
import { setVerificationStep, getAppDataSelector } from '@/store/app';

import {
  DivMain,
  VerificationCardStyled,
  VerificationSmallTextStyled,
  VerificationStyled,
  VerificationTextStyled,
} from './index.styles';

/**
 *
 * @returns Verification page
 */

const Verification = () => {
  const { verificationStep } = useAppSelector(getAppDataSelector);
  const { t } = useTranslation('verification');

  const dispatch = useAppDispatch();

  const onClickHeaderIcon = () => {
    if (verificationStep === 2) {
      router.push('/aadhaar_card');
      return;
    }
    router.push('/otpVerification');
  };

  const onClickCard = () => {
    router.push('/identify_document');
    setTimeout(setStep, 3000);
  };

  const goToVideo = () => {
    router.push('/video_record');
  };

  const setStep = () => {
    dispatch(setVerificationStep(2));
  };

  return (
    <DivMain>
      <Header text={t('identity_verification')} onClick={onClickHeaderIcon} />
      <VerificationStyled>
        <VerificationCardStyled>
          <CardIcon />
        </VerificationCardStyled>
        <VerificationTextStyled>{t('verify_your_identity')}</VerificationTextStyled>
        <VerificationSmallTextStyled>{t('it_will_take_less_than_2_minutes')}</VerificationSmallTextStyled>
        <StepLayout
          rightIcon={verificationStep === 2 ? 'done' : 'arrow'}
          step={t('step1')}
          heading={t('identity_document_verification')}
          content={t('take_a_picture_of_an_identity_document_and_upload_it_for_verification')}
          onClick={onClickCard}
        />
        <StepLayout
          rightIcon="arrow"
          step={t('step2')}
          heading={t('record_a_selfie_video')}
          content={t('speak_out_load_and_move_your_head_finish_actions_in_25_seconds')}
          isDisabled={verificationStep === 2 ? false : true}
          onClick={goToVideo}
        />
      </VerificationStyled>
    </DivMain>
  );
};
export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['verification'])),
  },
});
export default Verification;
