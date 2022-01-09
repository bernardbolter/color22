import React from 'react'

import '../styles/loading.scss'
import { randomColor } from '../helpers'

const Loading = () => {
    return (
        <>
            <div 
                className="loading-container"
                style={{
                    background: randomColor()
                }}
            >
            </div>
            <div className="loading-logo">
                <svg width="100%" height="100%" viewBox="0 0 299 26" preserveAspectRatio="xMidYMid meet">
                    <path 
                        d="M17.4550781,25 L10.8457031,25 L10.5117188,21.9941406 L7.57617188,21.9941406 L7.2421875,25 L0.650390625,25 L5.44921875,1.00585938 L12.65625,1.00585938 L17.4550781,25 Z M10.0371094,17.4941406 L9.05273438,8.49414062 L8.06835938,17.4941406 L10.0371094,17.4941406 Z" 
                        id="logo-a" 
                        fill="#A41E22" 
                    />
                    <path 
                        d="M54.9765625,17.1425781 C54.1093707,19.7089972 52.6855568,21.7011648 50.7050781,23.1191406 C48.7245995,24.5371165 46.3984509,25.2460938 43.7265625,25.2460938 C40.3867021,25.2460938 37.5507929,24.0507932 35.21875,21.6601562 C32.8867071,19.2578005 31.7207031,16.3691575 31.7207031,12.9941406 C31.7207031,9.63084256 32.8867071,6.74805889 35.21875,4.34570312 C37.5507929,1.91990975 40.3867021,0.70703125 43.7265625,0.70703125 C46.4101697,0.70703125 48.7480369,1.42772717 50.7402344,2.86914062 C52.720713,4.28711646 54.1328083,6.28514336 54.9765625,8.86328125 L49.5449219,11.5878906 C49.2753893,10.1347584 48.6074272,8.95703576 47.5410156,8.0546875 C46.4628852,7.15233924 45.1914136,6.70117188 43.7265625,6.70117188 C42.0273353,6.70117188 40.5976621,7.32811873 39.4375,8.58203125 C38.2890568,9.83594377 37.7148438,11.3066322 37.7148438,12.9941406 C37.7148438,14.6933679 38.2890568,16.1699156 39.4375,17.4238281 C40.5976621,18.6777406 42.0273353,19.3046875 43.7265625,19.3046875 C45.1914136,19.3046875 46.4628852,18.8476608 47.5410156,17.9335938 C48.6074272,17.0195267 49.2753893,15.8476634 49.5449219,14.4179688 L54.9765625,17.1425781 Z"
                        id="logo-c" 
                        fill="#F09120" 
                    />
                    <path 
                        d="M80.4121094,12.9941406 C80.4121094,16.3691575 79.2461054,19.2578005 76.9140625,21.6601562 C74.5937384,24.0507932 71.7636886,25.2460938 68.4238281,25.2460938 C65.0839677,25.2460938 62.2480585,24.0507932 59.9160156,21.6601562 C57.5839727,19.2578005 56.4179688,16.3691575 56.4179688,12.9941406 C56.4179688,9.63084256 57.5839727,6.74805889 59.9160156,4.34570312 C62.2480585,1.91990975 65.0839677,0.70703125 68.4238281,0.70703125 C71.7636886,0.70703125 74.5937384,1.91990975 76.9140625,4.34570312 C79.2461054,6.74805889 80.4121094,9.63084256 80.4121094,12.9941406 Z M74.4179688,12.9941406 C74.4179688,11.3066322 73.8378964,9.83594377 72.6777344,8.58203125 C71.5175723,7.32811873 70.0996178,6.70117188 68.4238281,6.70117188 C66.7363197,6.70117188 65.3125058,7.32811873 64.1523438,8.58203125 C62.9921817,9.83594377 62.4121094,11.3066322 62.4121094,12.9941406 C62.4121094,14.7050867 62.9921817,16.1816344 64.1523438,17.4238281 C65.3125058,18.6777406 66.7363197,19.3046875 68.4238281,19.3046875 C70.0996178,19.3046875 71.5175723,18.6777406 72.6777344,17.4238281 C73.8378964,16.1816344 74.4179688,14.7050867 74.4179688,12.9941406 Z" 
                        id="logo-o" 
                        fill="#E1B324" 
                    />
                    <polygon 
                        id="logo-l" 
                        fill="#869F66" 
                        points="94.3339844 25 82.3457031 25 82.3457031 1.00585938 88.3398438 1.00585938 88.3398438 19.0058594 94.3339844 19.0058594"
                    />
                    <path 
                        d="M119.488281,12.9941406 C119.488281,16.3691575 118.322277,19.2578005 115.990234,21.6601562 C113.66991,24.0507932 110.83986,25.2460938 107.5,25.2460938 C104.16014,25.2460938 101.32423,24.0507932 98.9921875,21.6601562 C96.6601446,19.2578005 95.4941406,16.3691575 95.4941406,12.9941406 C95.4941406,9.63084256 96.6601446,6.74805889 98.9921875,4.34570312 C101.32423,1.91990975 104.16014,0.70703125 107.5,0.70703125 C110.83986,0.70703125 113.66991,1.91990975 115.990234,4.34570312 C118.322277,6.74805889 119.488281,9.63084256 119.488281,12.9941406 Z M113.494141,12.9941406 C113.494141,11.3066322 112.914068,9.83594377 111.753906,8.58203125 C110.593744,7.32811873 109.17579,6.70117188 107.5,6.70117188 C105.812492,6.70117188 104.388678,7.32811873 103.228516,8.58203125 C102.068354,9.83594377 101.488281,11.3066322 101.488281,12.9941406 C101.488281,14.7050867 102.068354,16.1816344 103.228516,17.4238281 C104.388678,18.6777406 105.812492,19.3046875 107.5,19.3046875 C109.17579,19.3046875 110.593744,18.6777406 111.753906,17.4238281 C112.914068,16.1816344 113.494141,14.7050867 113.494141,12.9941406 Z" 
                        id="logo-o-two" 
                        fill="#4DA446" 
                    />
                    <path 
                        d="M134.921875,25 L128.910156,25 L127.416016,16 L127.416016,25 L121.421875,25 L121.421875,1.00585938 L127.416016,1.00585938 C129.478526,1.00585938 131.24218,1.74413324 132.707031,3.22070312 C134.183601,4.6855542 134.921875,6.44334912 134.921875,8.49414062 C134.921875,10.9668092 133.908213,12.9706954 131.880859,14.5058594 L134.921875,25 Z M128.910156,8.49414062 C128.910156,8.29492088 128.869141,8.1044931 128.787109,7.92285156 C128.705078,7.74121003 128.59668,7.58300849 128.461914,7.44824219 C128.327148,7.31347589 128.168946,7.20507854 127.987305,7.12304688 C127.805663,7.04101521 127.615235,7 127.416016,7 L127.416016,10.0058594 C127.615235,10.0058594 127.805663,9.96484416 127.987305,9.8828125 C128.168946,9.80078084 128.327148,9.68945383 128.461914,9.54882812 C128.59668,9.40820242 128.705078,9.24707122 128.787109,9.06542969 C128.869141,8.88378815 128.910156,8.69336037 128.910156,8.49414062 Z"
                        id="logo-r" 
                        fill="#1D9F97" 
                    />
                    <polygon 
                        id="logo-f" 
                        fill="#3482AD" 
                        points="148.914062 10.0058594 142.919922 16 142.919922 25 136.925781 25 136.925781 1.00585938 148.914062 1.00585938 148.914062 7 142.919922 7 142.919922 10.0058594" 
                    />
                    <path 
                        d="M163.873047,18.25 C163.873047,20.1601658 163.222663,21.8066337 161.921875,23.1894531 C160.621087,24.5605537 159.021494,25.2460938 157.123047,25.2460938 C155.2246,25.2460938 153.625007,24.5605537 152.324219,23.1894531 C151.023431,21.8066337 150.373047,20.1601658 150.373047,18.25 L150.373047,1.00585938 L156.367188,1.00585938 L156.367188,18.25 C156.367188,18.7539088 156.619138,19.0058594 157.123047,19.0058594 C157.615237,19.0058594 157.861328,18.7539088 157.861328,18.25 L157.861328,1.00585938 L163.873047,1.00585938 L163.873047,18.25 Z"
                        id="logo-u" 
                        fill="#3B5BA9"
                    />
                    <polygon 
                        id="logo-l-two" 
                        fill="#674D8C" 
                        points="178.058594 25 166.070312 25 166.070312 1.00585938 172.064453 1.00585938 172.064453 19.0058594 178.058594 19.0058594" 
                    />
                    <polygon 
                        id="logo-h" 
                        fill="#393A3A" 
                        opacity="0.838211287" 
                        points="205.589844 25 199.578125 25 199.578125 16 198.083984 16 198.083984 25 192.089844 25 192.089844 1.00585938 198.083984 1.00585938 198.083984 10.0058594 199.578125 10.0058594 199.578125 1.00585938 205.589844 1.00585938" 
                    />
                    <polygon 
                        id="logo-i" 
                        fill="#393A3A" 
                        opacity="0.838211287" 
                        points="213.833984 25 207.839844 25 207.839844 1.00585938 213.833984 1.00585938" 
                    />
                    <path 
                        d="M225.681641,0.970703125 L224.714844,6.31445312 C224.503905,6.23242146 224.222658,6.19140625 223.871094,6.19140625 C223.589842,6.19140625 223.323243,6.24121044 223.071289,6.34082031 C222.819335,6.44043019 222.596681,6.57519446 222.40332,6.74511719 C222.20996,6.91503991 222.057618,7.12011599 221.946289,7.36035156 C221.83496,7.60058714 221.779297,7.86132672 221.779297,8.14257812 C221.779297,8.98633234 222.417962,10.4863173 223.695312,12.6425781 C224.972663,14.7988389 225.611328,16.6093677 225.611328,18.0742188 C225.611328,20.1953231 224.855476,21.9238214 223.34375,23.2597656 C221.843742,24.583991 220.021495,25.2460938 217.876953,25.2460938 C217.244137,25.2460938 216.552738,25.1640633 215.802734,25 L216.699219,19.65625 C216.910157,19.7382817 217.191404,19.7792969 217.542969,19.7792969 C218.105472,19.7792969 218.597654,19.6035174 219.019531,19.2519531 C219.453127,18.8886701 219.669922,18.4375027 219.669922,17.8984375 C219.669922,17.2304654 219.025397,15.7949329 217.736328,13.5917969 C216.447259,11.3886609 215.802734,9.54883551 215.802734,8.07226562 C215.802734,5.91600484 216.541008,4.15235061 218.017578,2.78125 C219.505867,1.39843059 221.339833,0.70703125 223.519531,0.70703125 C224.257816,0.70703125 224.978512,0.794920996 225.681641,0.970703125 Z"
                        id="loho-s" 
                        fill="#393A3A" 
                        opacity="0.838211287" 
                    />
                    <polygon 
                        id="logo-t" 
                        fill="#393A3A" 
                        opacity="0.838211287" 
                        points="240.640625 7 236.878906 7 236.878906 25 230.884766 25 230.884766 7 227.140625 7 227.140625 1.00585938 240.640625 1.00585938" 
                    />
                    <path 
                        d="M266.076172,12.9941406 C266.076172,16.3691575 264.910168,19.2578005 262.578125,21.6601562 C260.257801,24.0507932 257.427751,25.2460938 254.087891,25.2460938 C250.74803,25.2460938 247.912121,24.0507932 245.580078,21.6601562 C243.248035,19.2578005 242.082031,16.3691575 242.082031,12.9941406 C242.082031,9.63084256 243.248035,6.74805889 245.580078,4.34570312 C247.912121,1.91990975 250.74803,0.70703125 254.087891,0.70703125 C257.427751,0.70703125 260.257801,1.91990975 262.578125,4.34570312 C264.910168,6.74805889 266.076172,9.63084256 266.076172,12.9941406 Z M260.082031,12.9941406 C260.082031,11.3066322 259.501959,9.83594377 258.341797,8.58203125 C257.181635,7.32811873 255.76368,6.70117188 254.087891,6.70117188 C252.400382,6.70117188 250.976568,7.32811873 249.816406,8.58203125 C248.656244,9.83594377 248.076172,11.3066322 248.076172,12.9941406 C248.076172,14.7050867 248.656244,16.1816344 249.816406,17.4238281 C250.976568,18.6777406 252.400382,19.3046875 254.087891,19.3046875 C255.76368,19.3046875 257.181635,18.6777406 258.341797,17.4238281 C259.501959,16.1816344 260.082031,14.7050867 260.082031,12.9941406 Z" 
                        id="logo-o-three" 
                        fill="#393A3A" 
                        opacity="0.838211287" 
                    />
                    <path 
                        d="M281.509766,25 L275.498047,25 L274.003906,16 L274.003906,25 L268.009766,25 L268.009766,1.00585938 L274.003906,1.00585938 C276.066417,1.00585938 277.830071,1.74413324 279.294922,3.22070312 C280.771492,4.6855542 281.509766,6.44334912 281.509766,8.49414062 C281.509766,10.9668092 280.496104,12.9706954 278.46875,14.5058594 L281.509766,25 Z M275.498047,8.49414062 C275.498047,8.29492088 275.457032,8.1044931 275.375,7.92285156 C275.292968,7.74121003 275.184571,7.58300849 275.049805,7.44824219 C274.915038,7.31347589 274.756837,7.20507854 274.575195,7.12304688 C274.393554,7.04101521 274.203126,7 274.003906,7 L274.003906,10.0058594 C274.203126,10.0058594 274.393554,9.96484416 274.575195,9.8828125 C274.756837,9.80078084 274.915038,9.68945383 275.049805,9.54882812 C275.184571,9.40820242 275.292968,9.24707122 275.375,9.06542969 C275.457032,8.88378815 275.498047,8.69336037 275.498047,8.49414062 Z" 
                        id="logo-r-two" 
                        fill="#393A3A" 
                        opacity="0.838211287" 
                    />
                    <polygon 
                        id="logo-y" 
                        fill="#393A3A" 
                        opacity="0.838211287" 
                        points="298.384766 1.00585938 290.28125 25 284.287109 25 287.433594 16.5097656 282.230469 1.00585938 288.787109 1.00585938 290.28125 10.0058594 291.775391 1.00585938" 
                    />
                </svg>
                <h1>Loading...</h1>
            </div>
        </>
    )
}

export default Loading