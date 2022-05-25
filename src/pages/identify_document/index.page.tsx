import router from 'next/router';

import React from 'react';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { DriverLincenceIcon } from '@/assets/svg/driver-lincence-icon';
import { GreaterThenIcon } from '@/assets/svg/greaterthen-icon';
import { IdCardIcon } from '@/assets/svg/id-card-icon';
import { PassportIcon } from '@/assets/svg/passport-icon';
import { VoterIcon } from '@/assets/svg/voter-icon';
import Header from '@/components/core/Header';

import MyVerticallyCenteredModal from '@/components/identify_document_modal';
import {
  DivGreaterIcon,
  DivMain,
  DocumentContainer,
  IdentificationSmallTextStyled,
  IdentificationStyled,
  IdentificationTextStyled,
  IdentifyText,
  Row,
  StyledLine,
} from './index.style';

/**
 *
 * @returns Verification document page
 */

const onClickHeaderIcon = () => {
  router.push('/verification');
};

const IdentityDocument = () => {
  const { t } = useTranslation('identity_document');
  const [modalShow, setModalShow] = React.useState(false);
  const document = [
    {
      name: t('adhaar_card'),
      Svg: IdCardIcon,
    },
    {
      name: t('passport'),
      Svg: PassportIcon,
    },
    {
      name: t('licence'),
      Svg: DriverLincenceIcon,
    },
    { name: t('voter_id'), Svg: VoterIcon },
  ];

  const onClickCard = () => {
    setModalShow(true);
  };
  const onClicOk = () => {
    router.push('/camera_pic');
  };
  return (
    <DivMain>
      <Header onClick={onClickHeaderIcon} text={t('identity_document_verification')} isLongText={true} />
      <IdentificationStyled>
        <IdentificationTextStyled>{t('select_a_documemt')}</IdentificationTextStyled>
        <IdentificationSmallTextStyled>
          {t('you_will_take_a_picture_of_it_in_next_steps')}
        </IdentificationSmallTextStyled>
      </IdentificationStyled>
      <DocumentContainer>
        {document.map((doc, id) => (
          <>
            <Row onClick={onClickCard} key={id}>
              <div className="col-1">{doc.Svg()}</div>
              <div className="col-10">
                <IdentifyText>{doc.name}</IdentifyText>
              </div>
              <DivGreaterIcon className="col-1">
                <GreaterThenIcon />
              </DivGreaterIcon>
            </Row>
            {id + 1 === document.length ? '' : <StyledLine />}
          </>
        ))}
        <MyVerticallyCenteredModal
          show={modalShow}
          onOk={onClicOk}
          onHide={() => setModalShow(false)}
          heading={t('video_kyc_would_like_to_access_the_camera')}
          paragraph={t('required_for_document_and_facial_capture')}
          dontAllow={t("don't_allow")}
          ok={t('ok')}
        />
      </DocumentContainer>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['identity_document'])),
  },
});

export default IdentityDocument;
