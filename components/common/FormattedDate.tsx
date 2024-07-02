import { format, formatDistanceToNow, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale/ko';

type FormattedDateProps = {
    dateString: string | undefined;
};

const FormattedDate: React.FC<FormattedDateProps> = ({ dateString }) => {
    if(!dateString) {
        return <span>Invalid date</span>;
    }

    const date = parseISO(dateString);
    const now = new Date();
    const isWithin24Hours = (now.getTime() - date.getTime()) < 24 * 60 * 60 * 1000;

    return (
        <time dateTime={dateString}>
            {isWithin24Hours
                ? formatDistanceToNow(date, { addSuffix: true, locale: ko })
                : format(date, 'MM월 dd일', { locale: ko})}
        </time>
    );
};

export default FormattedDate;