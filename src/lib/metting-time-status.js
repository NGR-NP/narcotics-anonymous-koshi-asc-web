import {
  format,
  isBefore,
  isAfter,
  differenceInMinutes,
  formatDistanceToNow,
  parse,
} from 'date-fns';

// Constants
const MEETING_TIME_FORMAT = 'yyyy-MM-dd hh:mm a';
const MINUTES_BEFORE_MEETING_START_TO_NOTIFY = 59;
const MINUTES_BEFORE_MEETING_END_TO_NOTIFY = 5;

function parseDateTime(date, time) {
  return parse(`${date} ${time}`, MEETING_TIME_FORMAT, new Date());
}

export function checkMeetingStatus(meeting) {
  const now = new Date();
  const today = now.toLocaleString('en-US', { timeZone: 'Asia/Kathmandu' });

  const dayOfWeek = format(today, 'EEEE').toLowerCase();
  const formatYear = (today) => {
    return format(today, 'yyyy-MM-dd');
  };
  
  // Check if today is the day of the meeting
  if (meeting.day.toLowerCase() !== dayOfWeek) {
    return { message: 'No meeting today.', remainingTime: null, live: 0 };
  }
    // console.log(meeting,"0000")

  const startTime = parseDateTime(
    formatYear(today),
    // `${"01:56"} ${meeting.time}`,
    `${meeting.from} ${meeting.time}`,
  );
  const endTime = parseDateTime(
    formatYear(today),
    // `${"2:59"} ${meeting.time}`,
    `${meeting.to} ${meeting.time}`,
  );

  // Check meeting status
  if (isBefore(today, startTime)) {
    const remainingTime = differenceInMinutes(startTime, today);
    if (remainingTime <= MINUTES_BEFORE_MEETING_START_TO_NOTIFY) {
      return {
        message: `starts in ${remainingTime} minutes`,
        remainingTime,
        live: 1,
      };
    }
    const remainingTimes = formatDistanceToNow(startTime, {
      includeSeconds: true,
    });
    return {
      message: `will start after ${remainingTimes}`,
      remainingTime: remainingTimes,
      live: 1,
    };
  } else if (isAfter(today, endTime)) {
    return { message: 'meeting has ended', remainingTime: null, live: 0 };
  } else {
    const remainingTime = differenceInMinutes(endTime, today);
    const remainingTimes = formatDistanceToNow(endTime, {
      includeSeconds: true,
    });
    if (remainingTime <= MINUTES_BEFORE_MEETING_END_TO_NOTIFY) {
      return {
        message: `ends in ${remainingTime} minutes`,
        remainingTime: remainingTimes,
        live: 3,
      };
    }
    return {
      message: 'Ongoing meeting',
      remainingTime: remainingTimes,
      live: 2,
    };
  }
}
