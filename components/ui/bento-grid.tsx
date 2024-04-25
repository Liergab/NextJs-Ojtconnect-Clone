import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[22rem] grid-cols-1 md:grid-flow-col-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  thumbnail,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  thumbnail:string;
  link:string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-melanie-800 border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <h1 className="text-xs font-semibold text-melanie-200">{header}</h1>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
      <iframe
            src={thumbnail}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="w-full"
            style={{borderRadius:'10px'}}
        ></iframe>
        <div className="font-sans font-bold text-melanie-100 dark:text-neutral-200 mb-2 mt-2">
         <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-melanie-50 hover:underline"> {title}</a>
        </div>
        <div className="font-sans font-normal text-melanie-100 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
