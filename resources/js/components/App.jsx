import React from 'react';
import { render } from 'react-dom';
import User from './User';
import LaravelLogo from './LaravelLogo';
import Grid from './Grid';
import Footer from './Footer';

function App({ data }) {
    const { isAuthenticated, laravelVersion, phpVersion, url, urlRegister } = data;
    let linkText = 'Home';
    if (isAuthenticated) {
        linkText = 'Log in';
    }
    const footerData = { laravelVersion, phpVersion };
    return (
        <>
            <User />
            <div
                // eslint-disable-next-line max-len
                className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0"
            >
                {
                    url !== ''
                        ? (
                            <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                                <a href={url} className="text-sm text-gray-700 underline">{linkText}</a>
                                {
                                    urlRegister === ''
                                        ? ''
                                        : (
                                            <a href={urlRegister} className="ml-4 text-sm text-gray-700 underline">
                                                Register
                                            </a>
                                        )

                                }
                            </div>
                        )
                        : ''
                }

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <LaravelLogo />
                    <Grid />
                    <Footer data={footerData} />
                </div>
            </div>
        </>
    );
}

render(
    <App data={window.welcomeData} />,
    document.getElementById('root'),
);
