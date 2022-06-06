import { useRouter } from 'next/router';

import { useState } from 'react';

import { TickIcon } from '@/assets/svg/tick-icon';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';

import { StyledLine, StyledLanguage, Row, DivMain, DivMarginTop, FooterButtonStyle } from './index.styles';
import { ILanguage } from './index.types';

/**
 *
 * @returns Language page
 */
const ChooseLangugae = () => {
  const router = useRouter();
  const [langugaes, setLanguages] = useState<ILanguage[]>([
    {
      name: 'English',
      isActive: true,
      code: 'en',
    },
    {
      name: 'Hindi',
      isActive: false,
      code: 'hi',
    },
    {
      name: 'Telugu',
      isActive: false,
      code: 'te',
    },
    {
      name: 'Kannada',
      isActive: false,
      code: 'kn',
    },
    {
      name: 'Tamil',
      isActive: false,
      code: 'ta',
    },
    {
      name: 'Malayalam',
      isActive: false,
      code: 'ml',
    },
    {
      name: 'Punjabi',
      isActive: false,
      code: 'pa',
    },
    {
      name: 'Marati',
      isActive: false,
      code: 'mr',
    },
    {
      name: 'Gujarati',
      isActive: false,
      code: 'gu',
    },
    {
      name: 'Bengali',
      isActive: false,
      code: 'bn',
    },
  ]);

  const [selectedLangugage, setSelectedLanguage] = useState<string>(langugaes[0].code);

  const onClickHeaderIcon = () => {
    router.push('/');
  };

  const onClickItem = (ind: number) => {
    langugaes.forEach((lang) => {
      lang.isActive = false;
    });
    const temp = [...langugaes];
    temp[ind].isActive = true;
    setLanguages(temp);
    setSelectedLanguage(langugaes[ind].code);
  };

  const handleContinue = () => {
    router.push(`${selectedLangugage}/login`);
  };
  return (
    <DivMain>
      <div>
        <Header text="Choose a Language" onClick={onClickHeaderIcon} />
        <DivMarginTop>
          {langugaes.map(({ name, isActive }, ind) => (
            <>
              <Row onClick={() => onClickItem(ind)}>
                <div className="col-11">
                  <StyledLanguage isActive={isActive}>{name}</StyledLanguage>
                </div>
                <div className="col-1">{isActive && <TickIcon />}</div>
              </Row>
              {ind + 1 === langugaes.length ? '' : <StyledLine />}
            </>
          ))}
        </DivMarginTop>
      </div>
      <FooterButtonStyle>
        <Button isBottom onClick={handleContinue} className="m-auto">
          Continue
        </Button>
      </FooterButtonStyle>
    </DivMain>
  );
};

export default ChooseLangugae;
