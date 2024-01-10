import classnames, { sizing } from '@frontend/tailwindcss-classnames';

export const AngleDownIcon = () => {
  return (
    <div className={classnames(sizing('h-full', 'w-full'))}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        width="100%"
        viewBox="0 0 448 512"
      >
        <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
      </svg>
    </div>
  );
};
