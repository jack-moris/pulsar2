import React, {useState, useEffect} from 'react'
import { SvgContainer, SvgIconProps } from '../SvgIcon';

const BuywithPaypalIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
  const [isClient, setClientSide] = useState<boolean | undefined>();
  useEffect(() => {
    setClientSide(true)
  }, [])
  return ( !isClient ? null :
    // <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='60'
        height='16'
        viewBox='0 0 60 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M22.4451 3.95654H19.1292C18.9023 3.95654 18.7093 4.12139 18.6739 4.34539L17.3328 12.8482C17.3062 13.0159 17.4361 13.1672 17.6063 13.1672H19.1893C19.4162 13.1672 19.6092 13.0024 19.6446 12.7779L20.0063 10.4845C20.0412 10.2601 20.2346 10.0952 20.4611 10.0952H21.5108C23.695 10.0952 24.9556 9.03824 25.2848 6.94369C25.4332 6.02733 25.2911 5.30733 24.862 4.80309C24.3908 4.24939 23.5549 3.95654 22.4451 3.95654ZM22.8276 7.062C22.6463 8.25182 21.7372 8.25181 20.8582 8.25181H20.3578L20.7088 6.02975C20.7297 5.89545 20.846 5.79654 20.9818 5.79654H21.2111C21.8099 5.79654 22.3748 5.79654 22.6666 6.13788C22.8407 6.34151 22.894 6.64406 22.8276 7.062Z'
          fill='#253B80'
        />
        <path
          d='M32.357 7.02336H30.7691C30.6338 7.02336 30.517 7.12227 30.4961 7.25657L30.4258 7.70069L30.3148 7.53972C29.971 7.04081 29.2045 6.87402 28.4394 6.87402C26.6847 6.87402 25.1861 8.20299 24.8942 10.0672C24.7424 10.9972 24.9582 11.8864 25.4857 12.5065C25.9696 13.0767 26.6619 13.3143 27.4857 13.3143C28.8995 13.3143 29.6835 12.4052 29.6835 12.4052L29.6127 12.8464C29.5861 13.0151 29.716 13.1664 29.8852 13.1664H31.3155C31.5429 13.1664 31.7349 13.0015 31.7708 12.7771L32.629 7.34239C32.6561 7.17511 32.5267 7.02336 32.357 7.02336ZM30.1436 10.1138C29.9904 11.0209 29.2704 11.6299 28.3521 11.6299C27.891 11.6299 27.5225 11.482 27.2859 11.2018C27.0513 10.9235 26.9621 10.5274 27.0367 10.0861C27.1798 9.18675 27.9119 8.5579 28.8161 8.5579C29.267 8.5579 29.6336 8.70772 29.875 8.99039C30.117 9.27596 30.213 9.67451 30.1436 10.1138Z'
          fill='#253B80'
        />
        <path
          d='M40.8136 7.02344H39.218C39.0658 7.02344 38.9227 7.09907 38.8364 7.22562L36.6357 10.4673L35.7029 7.35217C35.6442 7.15726 35.4643 7.02344 35.2607 7.02344H33.6927C33.5021 7.02344 33.3698 7.20962 33.4304 7.38901L35.1879 12.5468L33.5356 14.8794C33.4056 15.0632 33.5366 15.3158 33.761 15.3158H35.3547C35.506 15.3158 35.6476 15.2421 35.7334 15.118L41.0406 7.45738C41.1676 7.2741 41.0372 7.02344 40.8136 7.02344Z'
          fill='#253B80'
        />
        <path
          d='M46.0964 3.95654H42.7801C42.5537 3.95654 42.3607 4.12139 42.3253 4.34539L40.9842 12.8482C40.9575 13.0159 41.0875 13.1672 41.2567 13.1672H42.9585C43.1166 13.1672 43.2518 13.0518 43.2766 12.8947L43.6572 10.4845C43.6921 10.2601 43.8855 10.0952 44.112 10.0952H45.1612C47.3459 10.0952 48.606 9.03824 48.9357 6.94369C49.0846 6.02733 48.9415 5.30733 48.5124 4.80309C48.0416 4.24939 47.2063 3.95654 46.0964 3.95654ZM46.479 7.062C46.2981 8.25182 45.389 8.25181 44.5095 8.25181H44.0097L44.3612 6.02975C44.382 5.89545 44.4974 5.79654 44.6336 5.79654H44.863C45.4613 5.79654 46.0266 5.79654 46.3185 6.13788C46.4926 6.34151 46.5454 6.64406 46.479 7.062Z'
          fill='#179BD7'
        />
        <path
          d='M56.0077 7.02336H54.4208C54.2846 7.02336 54.1687 7.12227 54.1483 7.25657L54.078 7.70069L53.9665 7.53972C53.6228 7.04081 52.8567 6.87402 52.0916 6.87402C50.3369 6.87402 48.8388 8.20299 48.5469 10.0672C48.3956 10.9972 48.6104 11.8864 49.1379 12.5065C49.6228 13.0767 50.3142 13.3143 51.1379 13.3143C52.5517 13.3143 53.3357 12.4052 53.3357 12.4052L53.2649 12.8464C53.2383 13.0151 53.3682 13.1664 53.5384 13.1664H54.9682C55.1946 13.1664 55.3876 13.0015 55.423 12.7771L56.2817 7.34239C56.3078 7.17511 56.1779 7.02336 56.0077 7.02336ZM53.7944 10.1138C53.6422 11.0209 52.9212 11.6299 52.0029 11.6299C51.5428 11.6299 51.1733 11.482 50.9367 11.2018C50.702 10.9235 50.6138 10.5274 50.6875 10.0861C50.8315 9.18675 51.5626 8.5579 52.4669 8.5579C52.9178 8.5579 53.2843 8.70772 53.5258 8.99039C53.7687 9.27596 53.8647 9.67451 53.7944 10.1138Z'
          fill='#179BD7'
        />
        <path
          d='M57.8798 4.18975L56.5189 12.8482C56.4922 13.0159 56.6221 13.1672 56.7913 13.1672H58.1596C58.387 13.1672 58.58 13.0024 58.6149 12.7779L59.9569 4.27557C59.9836 4.10781 59.8537 3.95605 59.6844 3.95605H58.1523C58.017 3.95654 57.9007 4.05545 57.8798 4.18975Z'
          fill='#179BD7'
        />
        <path
          d='M3.56268 14.8195L3.81626 13.2088L3.25141 13.1957H0.554199L2.42862 1.3106C2.43444 1.27472 2.45335 1.24127 2.48099 1.21751C2.50862 1.19375 2.54402 1.18066 2.58087 1.18066H7.12874C8.63856 1.18066 9.6805 1.49485 10.2245 2.11497C10.4795 2.40588 10.642 2.70988 10.7205 3.04442C10.8029 3.39545 10.8044 3.81485 10.7239 4.32636L10.7181 4.36369V4.69145L10.9731 4.83594C11.1879 4.94988 11.3586 5.0803 11.4895 5.22963C11.7077 5.47836 11.8487 5.79448 11.9084 6.16927C11.97 6.55472 11.9496 7.01339 11.8487 7.53266C11.7324 8.13 11.5443 8.65024 11.2902 9.07594C11.0565 9.46818 10.7588 9.79351 10.4053 10.0456C10.0679 10.2851 9.66693 10.467 9.21359 10.5833C8.77432 10.6978 8.27347 10.7555 7.72414 10.7555H7.3702C7.11711 10.7555 6.87129 10.8466 6.67832 11.01C6.48487 11.1768 6.35687 11.4047 6.31759 11.6539L6.29093 11.7988L5.84293 14.6376L5.82256 14.7419C5.81723 14.7748 5.80802 14.7913 5.79444 14.8025C5.78232 14.8127 5.76487 14.8195 5.7479 14.8195H3.56268Z'
          fill='#253B80'
        />
        <path
          d='M11.2147 4.40137C11.2011 4.48816 11.1856 4.57688 11.1681 4.66803C10.5684 7.74731 8.51649 8.81106 5.89588 8.81106H4.56158C4.24109 8.81106 3.97103 9.04379 3.92109 9.35991L3.23794 13.6925L3.04449 14.9206C3.012 15.1282 3.172 15.3153 3.38146 15.3153H5.748C6.02824 15.3153 6.2663 15.1117 6.31042 14.8353L6.3337 14.7151L6.77927 11.8874L6.80788 11.7323C6.85152 11.4549 7.09006 11.2513 7.3703 11.2513H7.72424C10.0171 11.2513 11.812 10.3204 12.3366 7.62658C12.5558 6.50125 12.4423 5.56161 11.8624 4.90076C11.6869 4.70149 11.4692 4.53616 11.2147 4.40137Z'
          fill='#179BD7'
        />
        <path
          d='M10.5871 4.15131C10.4954 4.12464 10.4009 4.1004 10.3039 4.07858C10.2065 4.05725 10.1066 4.03834 10.0038 4.02185C9.64405 3.96367 9.24987 3.93604 8.82757 3.93604H5.26296C5.1752 3.93604 5.09181 3.95591 5.01714 3.99179C4.85278 4.07082 4.7306 4.22646 4.70102 4.417L3.94272 9.21991L3.9209 9.36003C3.97084 9.04391 4.2409 8.81119 4.56138 8.81119H5.89569C8.51629 8.81119 10.5682 7.74694 11.1679 4.66816C11.1859 4.577 11.2009 4.48828 11.2145 4.40149C11.0627 4.321 10.8984 4.25216 10.7214 4.19349C10.6777 4.17894 10.6327 4.16488 10.5871 4.15131Z'
          fill='#222D65'
        />
        <path
          d='M4.70112 4.41693C4.7307 4.22639 4.85288 4.07075 5.01724 3.9922C5.09239 3.95632 5.1753 3.93645 5.26306 3.93645H8.82767C9.24997 3.93645 9.64415 3.96408 10.0039 4.02226C10.1067 4.03875 10.2066 4.05766 10.304 4.07899C10.401 4.10081 10.4955 4.12505 10.5872 4.15172C10.6328 4.16529 10.6778 4.17935 10.722 4.19342C10.8989 4.25208 11.0633 4.32142 11.2151 4.40142C11.3935 3.26348 11.2136 2.48869 10.5983 1.78711C9.92003 1.01475 8.69579 0.684082 7.12924 0.684082H2.58137C2.26137 0.684082 1.9884 0.916809 1.93894 1.23342L0.044638 13.2407C0.00730466 13.4783 0.190577 13.6926 0.430092 13.6926H3.23785L3.94282 9.21984L4.70112 4.41693Z'
          fill='#253B80'
        />
      </svg>
    // </SvgContainer>
  );
};
export default BuywithPaypalIcon;
