interface QuoteCardProps {
  item: QuoteType;
}
export default function QuoteCard({
  item: { name, quote, title },
}: QuoteCardProps) {
  return (
    <li
      className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
      style={{
        background:
          'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
      }}
    >
      <blockquote>
        <div
          aria-hidden="true"
          className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
        ></div>
        <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
          {quote}
        </span>
        <div className="relative z-20 mt-6 flex flex-row items-center">
          <span className="flex flex-col gap-1">
            <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
              {name}
            </span>
            <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
              {title}
            </span>
          </span>
        </div>
      </blockquote>
    </li>
  );
}
