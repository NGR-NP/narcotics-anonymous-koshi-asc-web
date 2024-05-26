import { getMettingLists } from '@/app/(home)/ui/action';
// import MettingCard from '@/components/card/mettingCard';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Map } from 'lucide-react';
import { NA_LOGO } from '@/lib/utils';
import { IconCalender, IconDot, IconLocation } from '@/components/Svg/svgicons';
import { checkMeetingStatus } from '@/lib/metting-time-status';
import Link from 'next/link';
import { ExternalLink } from '@/components/ui/ExternalLink';

interface MettingListProps {
  className?: string;
}
export default async function MettingList({ className }: MettingListProps) {
  const mettingListData: Array<MettingListType> = await getMettingLists();

  return (
    <div
      className={cn(
        'gap-2 max-w-screen-2xl grid grid-cols-1 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2',
        className,
      )}
    >
      {mettingListData.length ? (
        mettingListData.map((item, idx) => (
          <MettingCard key={idx} item={item} />
        ))
      ) : (
        <p>there aren&apos;t any metting</p>
      )}
    </div>
  );
}

const MettingCard = ({ item }: { item: MettingListType }) => {
  const status = checkMeetingStatus(item);
  return (
    <Card className="max-w-[400px] cursor-pointer rounded-lg shadow-md hover:shadow-lg outline-none border-none text-secondary-card-foreground bg-secondary-card h-auto overflow-hidden">
      <CardContent className="divide-y-2 p-0">
        <div className="pb-3 max-sm:flex-col px-4 pt-5 z-10 w-full justify-start shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large flex gap-3 items-start">
          <div className="flex justify-between max-sm:w-full">
            <Image
              alt={`${item.name} logo`}
              height={50}
              width={50}
              className="rounded-2xl "
              src={item?.img || NA_LOGO}
            />
            <p className='sm:hidden bg-accent text-accent-foreground h-fit px-2 py-1 text-sm'>{status.message}</p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between gap-3 items-center">
              <p className="text-md text-start line-clamp-2 font-sans font-bold ">
                {item?.name}{' '}
              </p>
              <IconDot
                content={status.message}
                danger={status.live === 0 && true}
                success={status.live === 2 && true}
                yellow={status.live === 1 && true}
                tooltipDir="bottom"
              />{' '}
            </div>
            <ul className="flex justify-between flex-col w-full pl-1.5 gap-3 flex-wrap">
              <div className="flex  justify-between w-full gap-3 gap-y-1 gap-x-10 flex-wrap">
                <li className="flex gap-1 items-center relative pl-4 group">
                  <IconLocation className="h-4 w-4 text-foreground/80 group-hover:text-foreground absolute top-1 -left-2" />
                  <p className="text-base text-card-foreground">{item?.city}</p>
                </li>
                <li className="flex gap-1 items-center relative pl-4 group">
                  <IconCalender className="h-4 w-4 text-foreground/80 group-hover:text-foreground absolute top-1 -left-2 " />
                  <time className="text-base text-card-foreground">
                    {item?.day}
                  </time>
                </li>
              </div>
            </ul>
          </div>
        </div>

        <div className="relative px-4 pb-5 flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
          <ul className="flex flex-col gap-y-2">
            <li className="flex justify-between group items-start gap-2 w-full">
              <div className="flex text-foreground/80 group-hover:text-foreground items-center gap-2">
                <Clock size={18} /> time: &emsp;
              </div>
              <time className="text-base text-foreground group-hover:text-foreground">
                <b>{item?.from}</b> to{' '}
                <b>
                  {item.to} {item.time}
                </b>
              </time>
            </li>
            <li className="flex w-full max-sm:flex-col max-sm:items-stretch  group justify-between items-start gap-2">
              <div className="flex text-foreground/80 group-hover:text-foreground items-center gap-2">
                <Map size={18} /> {item?.gmap ? 'Direction' : 'Location'}:&emsp;
              </div>
              <ExternalLink
                href={item.gmap}
                icon="MapPinned"
                className={`text-card-foreground line-clamp-2  group-hover:text-foreground/100  ${item?.gmap && 'underline focus-visible:underline'}`}
              >
                {item.location}
              </ExternalLink>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
