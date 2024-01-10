import classnames, {
  spacing,
  typography,
} from '@frontend/tailwindcss-classnames';

export const Fallback = () => {
  return (
    <div
      className={classnames(
        spacing('mt-20'),
        typography('text-tx20', 'text-center'),
      )}
    >
      Page loading ...
    </div>
  );
};
