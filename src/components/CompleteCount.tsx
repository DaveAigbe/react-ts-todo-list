import React, {FC} from 'react';
interface Props {
    count: number;
}

const CompleteCount: FC<Props> = ({count}) => {
    return (
        <h2 className={'count'}>
            {count}
        </h2>
    );
};

export default CompleteCount;
