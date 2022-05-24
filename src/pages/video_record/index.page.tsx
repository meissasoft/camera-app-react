import Image from 'next/image';
import router from 'next/router';

import React from 'react';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Screenshot from '@/assets/png/video1.png';
import { GreaterThenIcon } from '@/assets/svg/greaterthen-icon';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';

import {
  DivGraterThenIconStyled,
  DivMain,
  DivRappingStyled,
  DivVideoStyled,
  InstructionStyled,
  ParagraphInstructionPoint1Styled,
  ParagraphInstructionpoint2Styled,
  SmallTextStyled,
  TextStyled,
  VidoRecordStyled,
  FooterButtonStyle,
  Row,
} from './index.style';

/**
 *
 * @returns Record video page
 */
const onClickHeaderIcon = () => {
  router.push('/verification');
};

const onClickContinue = () => {
  router.push('/camera_video');
};

const VideoRecord = () => {
  const { t } = useTranslation('video_record');

  return (
    <DivMain>
      <Header text={t('record_video')} onClick={onClickHeaderIcon} />
      <VidoRecordStyled>
        <TextStyled>{t('record_a_selfie_video')}</TextStyled>
        <SmallTextStyled>{t('let’s_make_sure_nobody’s_improvising_you')}</SmallTextStyled>
      </VidoRecordStyled>
      <DivVideoStyled>
        <Image className="object-cover" src={Screenshot} />
      </DivVideoStyled>
      <InstructionStyled>{t('instruction')}</InstructionStyled>
      <Row>
        <DivGraterThenIconStyled>
          <GreaterThenIcon />
        </DivGraterThenIconStyled>
        <ParagraphInstructionPoint1Styled>{t('speak_out_load_and_move_your_head')}</ParagraphInstructionPoint1Styled>
      </Row>
      <Row>
        <DivGraterThenIconStyled>
          <GreaterThenIcon />
        </DivGraterThenIconStyled>
        <ParagraphInstructionPoint1Styled>{t('finish_actions_in_25_seconds')}</ParagraphInstructionPoint1Styled>
      </Row>
      <FooterButtonStyle>
        <Button isBottom onClick={onClickContinue} className="m-auto">
          {t('continue')}
        </Button>
      </FooterButtonStyle>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['video_record'])),
  },
});

export default VideoRecord;
