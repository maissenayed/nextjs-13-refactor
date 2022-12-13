import '../styles/globals.css';
import ReactQueryWrapper from '../wrappers/ReactQueryWrapper';
import SwrQueryWrapper from '../wrappers/SwrWrapper';
import ReduxWrapper from '../wrappers/ReduxWrapper/ReduxWrapper';
const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <head>
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </head>
    <body className="font-raleway">
      <ReduxWrapper>
        {/* <SwrQueryWrapper>
          <ReactQueryWrapper>{children}</ReactQueryWrapper> */}
        {children}
        {/* </SwrQueryWrapper> */}
      </ReduxWrapper>
    </body>
  </html>
);

export default RootLayout;
