import Link from 'next/link';

import { Fragment } from 'react';

import { Divider } from '@mui/material';

import Button from '@/components/core/Button';

import { DivStyled, StyledText } from './CreateAccountFooter.styles';
import { ArrowRight } from '@/assets/svg/arrow-right';

const CreateAccountFooter = () => {
  return (
    <Fragment>
      <DivStyled>
        <StyledText>
          By creating a NEAR account, you agree to the NEAR Wallet <br /> <Link href="/"> Terms & Conditions</Link> and
          <Link href="/"> Privacy Policy.</Link>
        </StyledText>
      </DivStyled>
      <Divider />
      <DivStyled>
        <p className="heading-2">Already have Near Account ?</p>
      </DivStyled>
      <DivStyled>
        <Link href="/login">
          <Button className="btn-login" data-testid="login-create-account">
            Login With NEAR
            <ArrowRight />
          </Button>
        </Link>
      </DivStyled>
    </Fragment>
  );
};
export default CreateAccountFooter;
