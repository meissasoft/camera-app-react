import router from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Field, Form, Formik } from 'formik';
import { MobileIcon } from '@/assets/svg/mobile';
import Button from '@/components/core/Button';
import FieldInput from '@/components/core/FieldInput';
import Heading from '@/components/core/Header';

import { mobileNumber } from '@/validations/mobileNumber';
import { DivMain, StyledText, StyledSeperatorDiv, StyledSeperatorText, StyledInnerDiv } from './index.styles';

interface Values {
  mobileNumber: string;
}

const Login = () => {
  const initialValue: Values = {
    mobileNumber: '',
  };
  const { t } = useTranslation('login');

  const handleLogin = () => {
    router.push('/otpVerification');
  };
  const handleBack = () => {
    router.push('/language');
  };
  return (
    <DivMain>
      <Formik initialValues={initialValue} onSubmit={handleLogin} validationSchema={mobileNumber}>
        {({ values, errors }) => {
          return (
            <Form>
              <Heading text={t('get_started')} onClick={handleBack} />
              <StyledInnerDiv>
                <MobileIcon />

                {/* <FieldInput
                  placeholder={t('enter_mobile_number')}
                  name="mobile"
                  className="my-2 mt-5 rounded border p-2"
                /> */}
                <Field
                  as={FieldInput}
                  id="mobileNumber"
                  placeholder={t('enter_mobile_number')}
                  name="mobileNumber"
                  autoComplete="off"
                  autoFocus
                  className="my-2 m-auto"
                  value={values.mobileNumber}
                  error={errors.mobileNumber}
                />

                <Button type="submit" className="my-2 m-auto" disabled={Object.keys(errors).length > 0}>
                  {t('login')}
                </Button>

                <StyledSeperatorDiv>
                  <StyledSeperatorText className="mx-2 my-3">{t('or')}</StyledSeperatorText>
                </StyledSeperatorDiv>
                <Button onClick={handleLogin} className="my-2" isTransparent>
                  <StyledText>{t('scan_qr')}</StyledText>
                </Button>
              </StyledInnerDiv>
            </Form>
          );
        }}
      </Formik>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['login'])),
  },
});

export default Login;
