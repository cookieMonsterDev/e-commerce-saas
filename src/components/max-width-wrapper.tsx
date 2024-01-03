import { cn } from "@/lib/utils";

type MaxWidthWrapperProps = React.HTMLAttributes<HTMLDivElement> & {};

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-2xl px-2.5 md:px-20",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
