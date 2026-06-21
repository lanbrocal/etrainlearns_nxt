type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  if (!preview) return null;

  return (
    <div className="border-b bg-neutral-50 border-neutral-200 dark:bg-slate-800">
      <div className="py-2 text-center text-sm">
        This page is a preview.{" "}
        <a
          href="/api/exit-preview"
          className="underline hover:text-teal-300 duration-200 transition-colors"
        >
          Click here
        </a>{" "}
        to exit preview mode.
      </div>
    </div>
  );
};

export default Alert;