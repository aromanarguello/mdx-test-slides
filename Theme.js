import { future as baseTheme } from '@mdx-deck/themes';

export default {
    ...baseTheme,
    font: 'Roboto, sans-serif',
    colors: {
        code: '#3455db',
        codeBackground: '#ECECF0'
    },
    css: {
        'li, p': {
            fontSize: '22px'
        }
    },
    pre: {
        borderRadius: '12.5px',
        fontSize: '20px',
        width: '400px',
        display: 'flex',
        justifyContent: 'center',
        padding: '5px'
    }
};
