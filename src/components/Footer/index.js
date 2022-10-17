import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Collapse from 'components/Collapse';
import notified from 'assets/images/notified.png';
import mail from 'assets/images/icons/mail.svg';
import phone from 'assets/images/icons/phone.svg';
import tiktok from 'assets/images/icons/tiktok.svg';
import facebook from 'assets/images/icons/facebook.svg';
import pinterest from 'assets/images/icons/pinterest.svg';
import instagram from 'assets/images/icons/instagram.svg';

import './style.scss';

const Footer = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.Footer'
  });

  return (
    <div className='footer'>
      <div className='footer__content'>
        <div className='footer__content--socials'>
          <div className='footer-desk'>
            <p className='footer__title'>{t('follow')}</p>
            <div className='footer__content--social'>
              <img src={facebook} alt='facebook social' className='facebook' />
              <p>facebook</p>
            </div>
            <div className='footer__content--social'>
              <img src={instagram} alt='instagram social' />
              <p>instagram</p>
            </div>
            <div className='footer__content--social'>
              <img src={pinterest} alt='pinterest social' />
              <p>pinterest</p>
            </div>
            <div className='footer__content--social'>
              <img src={tiktok} alt='tiktok social' />
              <p>tiktok</p>
            </div>
          </div>
          <Collapse title={t('follow')} className={'footer__collapse'}>
            <div className='footer__content--social'>
              <img src={facebook} alt='facebook social' className='facebook' />
              <p>facebook</p>
            </div>
            <div className='footer__content--social'>
              <img src={instagram} alt='instagram social' />
              <p>instagram</p>
            </div>
            <div className='footer__content--social'>
              <img src={pinterest} alt='pinterest social' />
              <p>pinterest</p>
            </div>
            <div className='footer__content--social'>
              <img src={tiktok} alt='tiktok social' />
              <p>tiktok</p>
            </div>
          </Collapse>
        </div>
        <div className='footer__content--abouts'>
          <div className='footer-desk'>
            <p className='footer__title'>{t('about')}</p>
            <div className='footer__content--about'>
              <p>
                <Link to='/brand' className='link__page'>
                  {t('brand')}
                </Link>
              </p>
              <p>
                <Link to='/store' className='link__page'>
                  {t('storeLocator')}
                </Link>
              </p>
            </div>
          </div>
          <Collapse title={t('about')} className={'footer__collapse'}>
            <div className='footer__content--about'>
              <p>
                <Link to='/brand' className='link__page'>
                  {t('brand')}
                </Link>
              </p>
              <p>
                <Link to='/store' className='link__page'>
                  {t('storeLocator')}
                </Link>
              </p>
            </div>
          </Collapse>
        </div>
        <div className='footer__content--cares'>
          <div className='footer-desk'>
            <p className='footer__title'>{t('customerCare')}</p>
            <div className='footer__content--care'>
              <p>
                <Link to='/faq' className='link__page'>
                  {t('faq')}
                </Link>
              </p>
              <p>
                <Link to='/size' className='link__page'>
                  {t('size')}
                </Link>
              </p>
              <p>
                <Link to='/ship' className='link__page'>
                  {t('shipping')}
                </Link>
              </p>
              <p>
                <Link to='/term' className='link__page'>
                  {t('terms')}
                </Link>
              </p>
              <p>
                <Link to='/policy' className='link__page'>
                  {t('policy')}
                </Link>
              </p>
              <p>
                <Link to='/garment' className='link__page'>
                  {t('garment')}
                </Link>
              </p>
              <p>
                <Link to='/' className='link__page'>
                  {t('return')}
                </Link>
              </p>
            </div>
          </div>
          <Collapse title={t('customerCare')} className={'footer__collapse'}>
            <div className='footer__content--care'>
              <p>
                <Link to='/faq' className='link__page'>
                  {t('faq')}
                </Link>
              </p>
              <p>
                <Link to='/size' className='link__page'>
                  {t('size')}
                </Link>
              </p>
              <p>
                <Link to='/ship' className='link__page'>
                  {t('shipping')}
                </Link>
              </p>
              <p>
                <Link to='/term' className='link__page'>
                  {t('terms')}
                </Link>
              </p>
              <p>
                <Link to='/policy' className='link__page'>
                  {t('policy')}
                </Link>
              </p>
              <p>
                <Link to='/garment' className='link__page'>
                  {t('garment')}
                </Link>
              </p>
              <p>
                <Link to='/' className='link__page'>
                  {t('return')}
                </Link>
              </p>
            </div>
          </Collapse>
        </div>
        <div className='footer__content--contact'>
          <p className='footer__title'>{t('contact')}</p>
          <div className='footer__content--phone'>
            <img src={phone} alt='phone icon' className='' />
            <p>+84 986 491 486</p>
          </div>
          <div className='footer__content--mail'>
            <img src={mail} alt='phone icon' className='' />
            <p>
              {t('customerSupport')}
              <p>CONTACT@PIKA.COM</p>
            </p>
            <p>
              {t('whosesalse')}
              <p>TEAM@PIKA.COM</p>
            </p>
          </div>
          <img src={notified} alt='notified' className='notified' />
        </div>
      </div>
      <div className='footer__publish'>
        <p>© 2022 Pika Meow All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
