﻿import * as React from 'react';
import { FOOTER_TEXT } from '../../config/constants';

// React 16.6 introduced the ability to wrap Functional Components with React.memo which now gives us the ability to prevent functional components from
// rerendering every time and only when the props change - this is very similar to using React.PureComponent with class components
// TEST (change export default Footer; to export default React.memo(Footer); to confirm no rerenders):

//const Footer: React.FunctionComponent<{}> = () => {
//    console.log('footer rendered');
//    return (
//        <footer className='footer'>
//            <hr />
//            <div className='content has-text-centered'>
//                {FOOTER_TEXT}
//            </div>
//        </footer>
//    );
//};
//export default Footer;

// React 16.8 introduced "Hooks" which will now enable functional components to be opt in stateful by using "useState" - this means they are technically no longer
// stateless functional components (React.SFC<{}>) but are now React.FunctionComponent

const Footer: React.FunctionComponent<{}> = () => (
    <footer className='footer'>
        <hr />
        <div className='content has-text-centered'>
            {FOOTER_TEXT}
        </div>
    </footer>
);

export default React.memo(Footer);