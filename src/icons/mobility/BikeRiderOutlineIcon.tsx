// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const BikeRiderOutlineIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <path
                d="M6 13a4 4 0 110 8 4 4 0 010-8zm12 0a4 4 0 110 8 4 4 0 010-8zM6 15a2 2 0 100 4 2 2 0 000-4zm12 0a2 2 0 100 4 2 2 0 000-4zm-7-8.414l2.536 2.535a3 3 0 001.923.872l.198.007H17v2h-1.343a5 5 0 01-3.344-1.282l-.192-.182L11 9.414l-1.514 1.514.226.135a7.002 7.002 0 013.283 5.664L13 17v1h-2v-1c0-2.06-1.257-3.88-3.123-4.636l-.21-.08-.665-.235L7 10.587 11 6.586zM15 2a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};

BikeRiderOutlineIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default BikeRiderOutlineIcon;
