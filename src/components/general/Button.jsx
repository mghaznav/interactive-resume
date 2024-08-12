export default function Button({children, flip, ...props}) {
  const defaultStyles = "font-bold transition-all duration-300 md:p-4 md:text-base p-3 \
                        text-sm my-4 rounded-lg [box-shadow:_-2px_10px_20px_rgb(0_0_0_/_20%)] ";
  const primaryStyles = "bg-navy-blue hover:bg-white text-white hover:text-navy-blue";
  const secondaryStyles = "bg-white hover:bg-navy-blue text-navy-blue hover:text-white"

  let style = flip ? defaultStyles + secondaryStyles : defaultStyles + primaryStyles;

  return (
    <button className={style} {...props}>
      {children}
    </button>
  );
}