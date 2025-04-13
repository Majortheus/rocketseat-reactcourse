import { IconProps } from "@/@types/icon";

export function StarOutlineIcon({ size = 16, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.41554 1.18039C7.58681 1.06044 7.79085 0.996094 7.99995 0.996094C8.20905 0.996094 8.41309 1.06044 8.58436 1.18039C8.75331 1.29871 8.88232 1.4655 8.95439 1.65862L10.3272 5.11548L10.3313 5.12616C10.3325 5.12958 10.3348 5.13255 10.3377 5.13472C10.3406 5.13688 10.3441 5.13815 10.3477 5.13836L10.3508 5.13854L14.0383 5.37605C14.9956 5.43821 15.3227 6.63646 14.626 7.21559C14.6259 7.21569 14.6258 7.2158 14.6257 7.21591L11.8015 9.57149L11.7998 9.57285C11.7935 9.5781 11.7887 9.58504 11.7861 9.59287C11.7836 9.6005 11.7833 9.60866 11.7851 9.61647C11.7851 9.61668 11.7852 9.61689 11.7852 9.6171L12.697 13.2018C12.9178 14.0732 11.9768 14.858 11.1582 14.3417L11.1569 14.3409L8.00695 12.3409C8.00494 12.3396 8.00233 12.3387 7.99995 12.3387C7.99757 12.3387 7.99525 12.3394 7.99324 12.3407L7.99246 12.3412L5.06214 14.1968C5.06199 14.1969 5.06183 14.197 5.06168 14.1971C4.16368 14.7681 3.1265 13.9001 3.37165 12.9392C3.37169 12.939 3.37161 12.9393 3.37165 12.9392L4.21467 9.6171C4.21472 9.61691 4.21476 9.61672 4.21481 9.61653C4.21664 9.6087 4.21628 9.60052 4.21376 9.59287C4.21118 9.58504 4.20644 9.5781 4.20008 9.57285L4.19844 9.57149L1.37425 7.21591C1.37412 7.2158 1.37398 7.21569 1.37385 7.21558C0.677205 6.63644 1.00408 5.43822 1.9613 5.37607L5.65216 5.13835C5.6558 5.13814 5.65929 5.13688 5.66222 5.13472C5.66515 5.13255 5.66738 5.12958 5.66865 5.12616L5.67275 5.11548L7.04551 1.65862C7.11759 1.4655 7.24659 1.29872 7.41554 1.18039ZM7.99995 1.99609C7.9961 1.99609 7.99235 1.99728 7.9892 1.99949C7.98604 2.00169 7.98365 2.00482 7.98233 2.00843C7.98067 2.013 7.97894 2.01754 7.97715 2.02205L6.6039 5.48014C6.53469 5.66308 6.41425 5.82228 6.25692 5.93866C6.09828 6.05602 5.90898 6.12476 5.71203 6.13657L2.0261 6.37396C2.02605 6.37397 2.02616 6.37396 2.0261 6.37396C2.01882 6.37445 2.01582 6.3757 2.01576 6.37573C2.01553 6.37582 2.01535 6.37588 2.01471 6.37642C2.01289 6.37795 2.00674 6.38446 2.0026 6.39786C1.99844 6.41129 1.99906 6.42292 2.00084 6.42966C2.00162 6.43263 2.00261 6.43477 2.00377 6.43661C2.00483 6.43828 2.0073 6.44176 2.01315 6.44662L2.01396 6.44729L4.83732 8.80218C4.83765 8.80245 4.83797 8.80272 4.8383 8.80299C4.98937 8.92822 5.10209 9.0935 5.16351 9.27989C5.22507 9.46667 5.2326 9.66705 5.18524 9.85793L5.18459 9.8605L4.34063 13.1863C4.32257 13.257 4.34749 13.3118 4.39316 13.3465C4.41653 13.3643 4.44014 13.3719 4.4588 13.3732C4.47423 13.3743 4.4956 13.3721 4.52526 13.3532L7.45666 11.4968C7.45692 11.4967 7.45718 11.4965 7.45745 11.4963C7.61966 11.3934 7.80782 11.3387 7.99995 11.3387C8.19228 11.3387 8.38063 11.3935 8.54296 11.4967C8.54305 11.4967 8.54286 11.4966 8.54296 11.4967L11.6917 13.4959C11.6918 13.4959 11.6916 13.4958 11.6917 13.4959C11.6974 13.4994 11.7011 13.5008 11.7021 13.5011C11.7035 13.5008 11.7078 13.4997 11.7137 13.4952C11.7213 13.4894 11.7261 13.4823 11.7283 13.4764C11.7293 13.4738 11.73 13.4709 11.7302 13.4674C11.7304 13.464 11.7303 13.4577 11.7278 13.4479C11.7278 13.4479 11.7278 13.4479 11.7278 13.4479L10.8147 9.85793C10.7673 9.66705 10.7748 9.46667 10.8364 9.27989C10.8978 9.09347 11.0106 8.92816 11.1617 8.80293C11.162 8.80268 11.1623 8.80243 11.1626 8.80218L13.9868 6.44662C13.9926 6.44176 13.9951 6.43828 13.9961 6.43661C13.9973 6.43477 13.9983 6.43263 13.9991 6.42966C14.0008 6.42292 14.0015 6.41129 13.9973 6.39786C13.9932 6.38446 13.987 6.37795 13.9852 6.37642C13.9846 6.37591 13.9844 6.37583 13.9842 6.37574C13.9841 6.37572 13.9812 6.37446 13.974 6.37398C13.9739 6.37397 13.974 6.37398 13.974 6.37398L10.2897 6.13667C10.2891 6.13664 10.2885 6.1366 10.2879 6.13657C10.0909 6.12476 9.90163 6.05602 9.74298 5.93866C9.58566 5.82228 9.46522 5.66308 9.396 5.48014L8.02275 2.02205C8.02096 2.01754 8.01923 2.013 8.01757 2.00843C8.01626 2.00482 8.01386 2.00169 8.01071 1.99949C8.00755 1.99728 8.0038 1.99609 7.99995 1.99609Z"
        fill="currentcolor"
      />
    </svg>
  );
}
