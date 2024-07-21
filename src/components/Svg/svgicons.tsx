import { cn } from '@/lib/utils';
import { forwardRef } from 'react';
export const IconLocation = forwardRef<SVGSVGElement, SVGProp>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      ref={ref}
      className={cn('size-6', className)}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      ></path>
    </svg>
  ),
);
IconLocation.displayName = 'IconLocation';

export const IconClock = forwardRef<SVGSVGElement, SVGProp>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      ref={ref}
      className={cn('size-6', className)}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  ),
);
IconClock.displayName = 'IconClock';

export const IconCalender = forwardRef<SVGSVGElement, SVGProp>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      ref={ref}
      className={cn('size-6', className)}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
      />
    </svg>
  ),
);
IconCalender.displayName = 'IconCalender';

export const IconLang = forwardRef<SVGSVGElement, SVGProp>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden={true}
      viewBox="0 0 3900 3900"
      ref={ref}
      className={cn('size-6', className)}
      {...props}
    >
      <path fill="#b22234" d="M0 0h7410v3900H0z"></path>
      <path
        stroke="#fff"
        strokeWidth="300"
        d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
      ></path>
      <path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path>
      <g fill="#fff">
        <g id="d">
          <g id="c">
            <g id="e">
              <g id="b">
                <path
                  id="a"
                  d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                ></path>
                <use y="420" xlinkHref="#a"></use>
                <use y="840" xlinkHref="#a"></use>
                <use y="1260" xlinkHref="#a"></use>
              </g>
              <use y="1680" xlinkHref="#a"></use>
            </g>
            <use x="247" y="210" xlinkHref="#b"></use>
          </g>
          <use x="494" xlinkHref="#c"></use>
        </g>
        <use x="988" xlinkHref="#d"></use>
        <use x="1976" xlinkHref="#c"></use>
        <use x="2470" xlinkHref="#e"></use>
      </g>
    </svg>
  ),
);
IconLang.displayName = 'IconLang';

export const IconHandburgermenu = forwardRef<SVGSVGElement, SVGProp>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
      viewBox="0 0 17 14"
      ref={ref}
      className={cn('size-6 duration-200 ease-linear', className)}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 1h15M1 7h15M1 13h15"
      ></path>
    </svg>
  ),
);
IconHandburgermenu.displayName = 'IconHandburgermenu';

export const IconUserProfileSolid = forwardRef<SVGSVGElement, SVGProp>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      ref={ref}
      className={cn('size-6', className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  ),
);
IconUserProfileSolid.displayName = 'IconUserProfileSolid';

export const IconTicketSolid = forwardRef<SVGSVGElement, SVGProp>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      ref={ref}
      className={cn('size-6', className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
        clipRule="evenodd"
      />
    </svg>
  ),
);
IconTicketSolid.displayName = 'IconTicketSolid';

export const IconHomeSolid = forwardRef<SVGSVGElement, SVGProp>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      ref={ref}
      className={cn('size-6', className)}
      {...props}
    >
      <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
      <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
    </svg>
  ),
);
IconHomeSolid.displayName = 'IconHomeSolid';

export const IconUserGroupSolid = forwardRef<SVGSVGElement, SVGProp>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      ref={ref}
      className={cn('size-6', className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
        clipRule="evenodd"
      />
      <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
    </svg>
  ),
);
IconUserGroupSolid.displayName = 'IconUserGroupSolid';

export const IconUserGroupOutline = forwardRef<SVGSVGElement, SVGProp>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      ref={ref}
      className={cn('size-6', className)}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
      />
    </svg>
  ),
);
IconUserGroupOutline.displayName = 'IconUserGroupOutline';

export const IconX = forwardRef<SVGSVGElement, SVGProp>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      ref={ref}
      className={cn('size-6 duration-200 ease-linear', className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  ),
);
IconX.displayName = 'IconX';

export const IconPhoneSolid = forwardRef<SVGSVGElement, SVGProp>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      ref={ref}
      className={cn('size-6 duration-200 ease-linear', className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
        clipRule="evenodd"
      />
    </svg>
  ),
);
IconPhoneSolid.displayName = 'IconPhoneSolid';

export const IconPhoneOutline = forwardRef<SVGSVGElement, SVGProp>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      ref={ref}
      className={cn('size-6 duration-200 ease-linear', className)}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  ),
);
IconPhoneOutline.displayName = 'IconPhoneOutline';

export const IconMail = forwardRef<SVGSVGElement, SVGProp>(
  ({ className, solid, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={solid ? 'currentColor' : 'none'}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={solid ? 'none' : 'currentColor'}
      ref={ref}
      className={cn('strokeWidthduration-200 ease-linear', className)}
      {...props}
    >
      {solid ? (
        <>
          <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
          <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
        </>
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      )}
    </svg>
  ),
);
IconMail.displayName = 'IconMail';

export const IconIdentificationCardOutline = forwardRef<SVGSVGElement, SVGProp>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      ref={ref}
      className={cn('size-6 duration-200 ease-linear', className)}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
      />
    </svg>
  ),
);
IconIdentificationCardOutline.displayName = 'IconIdentificationCardOutline';

export const IconIdentificationCardSolid = forwardRef<SVGSVGElement, SVGProp>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      ref={ref}
      className={cn('size-6 duration-200 ease-linear', className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z"
        clipRule="evenodd"
      />
    </svg>
  ),
);
IconIdentificationCardSolid.displayName = 'IconIdentificationCardSolid';

export const IconAboutUsOutline = forwardRef<SVGSVGElement, SVGProp>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      fill="currentColor"
      viewBox="0 0 50 50"
      ref={ref}
      className={cn('size-6 duration-200 ease-linear', className)}
      {...props}
    >
      <path d="M25 1C11.223 1 0 10.879 0 23.188c0 6.046 2.773 11.476 7.219 15.5-.672 2.074-2.172 3.71-3.688 4.968-.816.676-1.597 1.254-2.219 1.813-.308.277-.59.558-.812.906-.223.348-.422.844-.281 1.375l.125.406.344.219c1.289.742 2.894.871 4.625.75 1.73-.121 3.617-.52 5.468-1.031 3.594-.992 6.969-2.407 8.75-3.188 1.758.367 3.524.594 5.375.594 13.778 0 25-9.879 25-22.188C49.906 11.008 38.781 1 25 1zm0 2c12.82 0 22.906 9.215 22.906 20.313 0 11.09-10.176 20.187-23 20.187-1.828 0-3.55-.18-5.281-.563l-.344-.093L19 43c-1.672.738-5.207 2.18-8.75 3.156-1.773.489-3.54.864-5.063.969-1.019.07-1.648-.172-2.343-.344.496-.426 1.176-.933 1.969-1.593 1.742-1.446 3.832-3.458 4.562-6.438l.156-.625-.5-.375C4.625 34.016 2 28.875 2 23.187 2 12.098 12.176 3 25 3zm-1.188 9.813c-.3 0-.406.175-.406.374v2.626c0 .3.207.374.407.374h2.375c.3 0 .406-.175.406-.375v-2.624c0-.301-.207-.376-.407-.376zm.094 7.28c-.3 0-.406.208-.406.407v13.406c0 .301.207.407.406.407v.093h2.282c.3 0 .406-.207.406-.406V20.5c0-.3-.207-.406-.407-.406z"></path>
    </svg>
  ),
);
IconAboutUsOutline.displayName = 'IconAboutUsOutline';

export const IconAboutUsSolid = forwardRef<SVGSVGElement, SVGProp>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="currentColor"
      ref={ref}
      className={cn('size-6 duration-200 ease-linear', className)}
      {...props}
    >
      <path d="M15 3C7.82 3 2 7.925 2 14c0 2.676 1.132 5.126 3.01 7.033.038.095 1.001 2.574-1.852 5.102A.5.5 0 003 26.5a.5.5 0 00.5.5.5.5 0 00.107-.012c2.876-.17 5.336-1.597 6.838-2.697 1.42.45 2.95.709 4.555.709 7.18 0 13-4.925 13-11S22.18 3 15 3zm0 4.5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0115 7.5zM14 13h2v7h-2v-7z"></path>
    </svg>
  ),
);
IconAboutUsSolid.displayName = 'IconAboutUsSolid';

interface iconDotProps {
  className?: string;
  content?: string;
  danger?: boolean;
  success?: boolean;
  yellow?: boolean;
  tooltipDir?:
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'bottom-start'
    | 'bottom'
    | 'bottom-end'
    | 'left-start'
    | 'left'
    | 'left-end'
    | 'right-start'
    | 'right'
    | 'right-end';
}
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
export const IconDot = ({
  className,
  danger,
  success,
  yellow,
  tooltipDir = 'left',
  content,
}: iconDotProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={cn(
              'h-2 w-2 rounded-full bg-gray-400 ring-gray-500 ring-1 ring-offset-2  ring-offset-content1',
              danger && 'bg-red-600 ring-red-600',
              success && 'bg-green-400  ring-green-500',
              yellow && 'bg-yellow-400 ring-yellow-500',
              className,
            )}
          />
        </TooltipTrigger>
        <TooltipContent
          className="text-secondary-foreground"
          data-lide={tooltipDir}
        >
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
