type NotificationType = 'Silent' | 'Ring' | 'default';
interface SVGProp extends React.SVGProps<SVGSVGElement> {
  solid?: boolean;
}

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

type SvgIconComponentType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type QuoteType = {
  quote: string;
  name: string;
  title: string;
};
