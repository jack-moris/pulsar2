import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const BitpayIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    // <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='28'
        height='19'
        viewBox='0 0 28 19'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          x='1.34863'
          y='0.721436'
          width='25.6005'
          height='17.612'
          rx='2.2015'
          fill='white'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M7.12687 10.3081C6.99889 10.3791 6.86263 10.4146 6.71819 10.4146H6.60673C6.57778 10.4146 6.53643 10.4122 6.41701 10.391L6.82077 8.67308C6.89505 8.60633 6.97518 8.563 7.06807 8.54205C7.16097 8.52118 7.22079 8.51556 7.27865 8.51556C7.45607 8.51556 7.59335 8.56707 7.65945 8.67985C7.72545 8.79253 7.75852 8.94911 7.75852 9.14949C7.75852 9.31236 7.73162 9.46894 7.67802 9.61923C7.62432 9.76952 7.55107 9.90415 7.45822 10.0232C7.36533 10.1421 7.2548 10.2372 7.12687 10.3081ZM8.03746 7.84008C7.89288 7.76912 7.72164 7.73359 7.52345 7.73359C7.42845 7.73359 7.33972 7.74405 7.25721 7.76491C7.17456 7.78587 7.09672 7.81288 7.01421 7.85044L7.39346 6.23682L6.43359 6.3871L5.3623 10.9401C5.482 10.9986 5.6089 11.0445 5.74315 11.0778C5.87725 11.1112 6.0042 11.1362 6.12394 11.153C6.24364 11.1696 6.35001 11.179 6.4429 11.1812C6.5358 11.1832 6.60081 11.1843 6.63795 11.1843C6.92688 11.1843 7.19528 11.1289 7.44295 11.0183C7.69067 10.9078 7.90527 10.7575 8.087 10.5674C8.26862 10.3775 8.41208 10.1541 8.51737 9.89732C8.62266 9.64055 8.67528 9.36812 8.67528 9.08004C8.67528 8.89219 8.65251 8.71683 8.60713 8.554C8.56167 8.39113 8.49151 8.24927 8.3966 8.12812C8.3016 8.00706 8.1819 7.91108 8.03746 7.84008ZM10.5765 7.3315L10.7175 6.73153H9.79803L9.65701 7.3315H10.5765ZM11.6279 10.3376C11.6955 10.3719 11.7887 10.389 11.9071 10.389C12.0087 10.389 12.107 10.3794 12.2022 10.3601C12.2645 10.3475 12.3291 10.3327 12.3934 10.3105L12.2019 11.1206C12.1868 11.1243 12.1636 11.13 12.1483 11.1335C12.0002 11.1677 11.8246 11.1848 11.6216 11.1848C11.3296 11.1848 11.1032 11.1409 10.9425 11.0533C10.7816 10.9656 10.6674 10.8458 10.5998 10.6939C10.532 10.542 10.5024 10.3676 10.5109 10.1708C10.5194 9.97401 10.549 9.76639 10.5998 9.54817L11.2217 6.89101L12.2054 6.73693L11.9642 7.7318H13.0178L12.8274 8.51484H11.7802L11.501 9.69581C11.4756 9.7943 11.4597 9.88626 11.4534 9.97179C11.4471 10.0574 11.4575 10.1313 11.4851 10.1932C11.5126 10.2553 11.5602 10.3034 11.6279 10.3376ZM8.75002 11.1852L9.56175 7.73129H10.4813L9.66952 11.1852H8.75002ZM18.5699 8.51445C18.1411 8.51445 18.0593 8.51445 17.8836 8.6066C17.7589 8.67198 17.6557 8.77028 17.565 8.88494C17.4743 8.99966 17.4032 9.13202 17.3517 9.28212C17.3 9.43231 17.2743 9.58865 17.2743 9.75129C17.2743 9.95143 17.3073 10.11 17.3733 10.2267C17.4392 10.3435 17.5609 10.4018 17.7382 10.4018C17.833 10.4018 17.9186 10.3831 17.9949 10.3455C18.0712 10.308 18.1526 10.2454 18.2392 10.1579C18.2474 10.0537 18.2609 9.94424 18.2794 9.82948C18.2964 9.72479 18.3175 9.62704 18.3367 9.53772L18.3367 9.53765L18.3368 9.53761L18.3368 9.53756L18.3368 9.53751L18.3368 9.53749L18.3422 9.51254L18.5699 8.51445ZM19.223 9.67637C19.1652 9.91412 19.1487 10.1528 19.1735 10.3926C19.1983 10.6325 19.2889 11 19.3774 11.1839H18.4876C18.4066 11.0454 18.3887 10.9617 18.3763 10.9038C18.3721 10.884 18.3685 10.8673 18.3632 10.8524C18.2477 10.9484 18.1199 11.0275 17.9798 11.0901C17.8395 11.1526 17.6828 11.1839 17.5096 11.1839C17.3034 11.1839 17.1271 11.1474 16.9808 11.0745C16.8344 11.0015 16.7148 10.9035 16.6221 10.7805C16.5293 10.6575 16.4622 10.5136 16.4211 10.3489C16.3798 10.1841 16.3592 10.0079 16.3592 9.82027C16.3592 9.53251 16.4096 9.26146 16.5107 9.0071C16.6117 8.75274 16.752 8.53064 16.9313 8.34085C17.1107 8.15111 17.5436 7.7327 18.254 7.7327L19.6805 7.73265L19.223 9.67637ZM13.8429 10.39C13.9135 10.4069 14.0006 10.4153 14.1045 10.4153C14.2663 10.4153 14.4136 10.3848 14.5466 10.324C14.6794 10.2631 14.7925 10.1781 14.8859 10.0689C14.9793 9.95976 15.0519 9.82863 15.1038 9.67532C15.1557 9.52209 15.1817 9.35317 15.1817 9.1684C15.1817 8.98793 15.1422 8.83461 15.0634 8.70869C14.9845 8.58271 14.8462 8.51578 14.6511 8.51497C14.5147 8.51445 14.2881 8.51445 14.2881 8.51445L13.8429 10.39ZM16.1027 9.0992C16.1027 9.40573 16.0529 9.68597 15.9533 9.9399C15.8537 10.194 15.7156 10.4133 15.5392 10.598C15.3627 10.7828 15.151 10.9265 14.9041 11.0294C14.6571 11.1322 14.3883 11.1836 14.0977 11.1836C13.9565 11.1836 13.8154 11.1711 13.6743 11.1458L13.3941 12.2857H12.4725L13.5422 7.7327H14.7702C15.0026 7.7327 15.203 7.76841 15.3711 7.83975C15.5392 7.91118 15.6772 8.00877 15.7852 8.13257C15.8931 8.25646 15.9729 8.40131 16.0249 8.56706C16.0767 8.73301 16.1027 8.91031 16.1027 9.0992ZM23.0795 7.73333H22.1601L21.6252 10.0089H21.6262L21.5527 10.3219C21.5014 10.3365 21.4503 10.3496 21.3996 10.3598C21.3044 10.3791 21.2061 10.3887 21.1045 10.3887C20.986 10.3887 20.8929 10.3717 20.8253 10.3374C20.7575 10.3032 20.71 10.2551 20.6825 10.1929C20.6549 10.131 20.6444 10.0572 20.6507 9.97151C20.6571 9.88599 20.673 9.79403 20.6984 9.69554L20.9776 8.51457L21.1616 7.73153L21.1617 7.73129H20.2223L19.7971 9.54795C19.7464 9.76616 19.7167 9.97374 19.7083 10.1705C19.6998 10.3674 19.7294 10.5418 19.7971 10.6936C19.8648 10.8455 19.979 10.9654 20.1399 11.053C20.3006 11.1407 20.527 11.1846 20.8189 11.1846C21.022 11.1846 21.1975 11.1675 21.3457 11.1332L21.3633 11.1289L21.3628 11.1306C21.3217 11.3181 21.2383 11.47 21.1046 11.5887C20.9706 11.7074 20.7719 11.7668 20.5085 11.7668C20.396 11.7668 20.2938 11.76 20.2011 11.7471L20.0202 12.5171C20.1426 12.5331 20.2783 12.5414 20.4281 12.5414C20.7081 12.5414 20.9532 12.509 21.1633 12.4445C21.3733 12.38 21.5534 12.2821 21.7037 12.1509C21.854 12.0197 21.9796 11.8552 22.0805 11.6575C22.1814 11.4596 22.2627 11.2254 22.3245 10.9547L22.9607 8.24971L22.9584 8.24871L23.0795 7.73333Z'
          fill='#002855'
        />
      </svg>
    // </SvgContainer>
  );
};
export default BitpayIcon;
