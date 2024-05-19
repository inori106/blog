import dayjs from 'dayjs';
const Editday = ({ date }: { date: string }) => {
  return <div>{dayjs(date).format('YYYY-MM-DD')}</div>;
};

export default Editday;
