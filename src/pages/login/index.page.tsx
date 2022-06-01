import router from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { MobileIcon } from '@/assets/svg/mobile';
import Button from '@/components/core/Button';
import FieldInput from '@/components/core/FieldInput';
import Heading from '@/components/core/Header';

import { DivMain, StyledText, StyledSeperatorDiv, StyledSeperatorText, StyledInnerDiv } from './index.styles';

const Login = () => {
  const { t } = useTranslation('login');

  const handleLogin = () => {
    router.push('/otpVerification');
  };
  const handleBack = () => {
    router.push('/language');
  };
  return (
    <DivMain>
      <Heading text={t('get_started')} onClick={handleBack} />
      <StyledInnerDiv>
        <MobileIcon />
        <FieldInput placeholder={t('enter_mobile_number')} name="mobile" className="my-2 mt-5 rounded border p-2" />
        <Button onClick={handleLogin} className="my-2 m-auto">
          {t('login')}
        </Button>

        <StyledSeperatorDiv>
          <StyledSeperatorText className="mx-2 my-3">{t('or')}</StyledSeperatorText>
        </StyledSeperatorDiv>
        <Button onClick={handleLogin} className="my-2" isTransparent>
          <StyledText>{t('scan_qr')}</StyledText>
        </Button>
      </StyledInnerDiv>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['login'])),
  },
});

export default Login;
