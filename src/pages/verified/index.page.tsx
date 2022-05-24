import router from 'next/router';

import lottie from 'lottie-web';

import lottieFile from '@/assets/jpg/7893-confetti-cannons.json';
import { VerifiiedIcon } from '@/assets/svg/verified-Icon';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';

import {
  DivBottom,
  DivMain,
  VerificationCardStyled,
  VerificationSuccessfulSmallTextStyled,
  VerificationSuccessfulTextStyled,
} from './index.style';

/**
 *
 * @returns Verified page
 */
const onClickHeaderIcon = () => {
  router.push('/video_screen');
};

const Verified = () => {
  const lottieHandler = () => {
    lottie?.loadAnimation({
      container: document.querySelector('#lottieFile') as any,
      animationData: lottieFile,
      renderer: 'svg', // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
    });
  };

  return (
    <DivMain>
      <div id="lottieFile">
        <Header text="Verification sucessful" onClick={onClickHeaderIcon} />
        <VerificationCardStyled>
          <VerifiiedIcon />
        </VerificationCardStyled>
        <VerificationSuccessfulTextStyled>Verification completed</VerificationSuccessfulTextStyled>
        <VerificationSuccessfulSmallTextStyled>
          Your verification is completed and all <br /> your data is stored securely.
        </VerificationSuccessfulSmallTextStyled>
      </div>
      <DivBottom>
        <Button className="m-auto" onClick={lottieHandler}>
          Finish
        </Button>
      </DivBottom>
    </DivMain>
  );
};

export default Verified;
