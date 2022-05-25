import router from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { MobileIcon } from '@/assets/svg/mobile';
import Button from '@/components/core/Button';
import FieldInput from '@/components/core/FieldInput';
import Heading from '@/components/core/Header';

import { DivMain } from './index.styles';

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
      <div className="inner">
        <MobileIcon />
        <FieldInput
          placeholder={t('enter_mobile_number')}
          name={'mobile'}
          className="my-2 mt-5 m-auto rounded border p-2 loginInput"
        />
        <Button isBottom onClick={handleLogin} className="my-2 m-auto">
          {t('login')}
        </Button>

        <div className="separator">
          <p className="separatorText mx-2 my-3">{t('or')}</p>
        </div>
        <Button onClick={handleLogin} className="my-2" isTransparent>
          <span className="text">{t('scan_qr')}</span>
        </Button>
      </div>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['login'])),
  },
});

export default Login;
