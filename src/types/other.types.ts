type NotificationType = 'Silent' | 'Ring' | 'default';
interface SVGProp extends React.SVGProps<SVGSVGElement> {}

type MettingListType = {
  city: string;
  day:
    | 'Sunday'
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday';
  name: string;
  from: string;
  to: string;
  time: string;
  location: string;
  gmap?: string;
  img?: string;
};
