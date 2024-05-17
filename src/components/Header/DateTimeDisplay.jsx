import { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    };

    const formattedDateTime = dateTime.toLocaleString('en-US', options);

    return (
        <p>
            {formattedDateTime}
        </p>
    );
};

export default DateTimeDisplay;
