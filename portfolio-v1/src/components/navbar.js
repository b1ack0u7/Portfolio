import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { Link } from 'gatsby';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import "../styles/navbar.scss"

const defaultTheme = createTheme({
    palette: {
      primary: {
        main: "#0A192F",
      },
      secondary: {
        main: '#f44336',
      },
    },
});

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function navbar(props) {
    return (
      <React.Fragment>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <HideOnScroll {...props}>
            <AppBar >
              <Toolbar >
                <div className="NB--container">
  
                <div className="NB--inner_container">
  
                  <div className="NB--home">
                    <div className="NB--home__sub">
                        <Link to="/">RESUME</Link>
  
                        <div className="NB--home__translate">
                        <svg width="2vw" height="2vw" viewBox="0 0 50 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.98 31.6581C27.3042 30.8244 27.0958 29.8749 26.4474 29.2264L21.6072 24.4557L21.6766 24.3862C25.7063 19.8934 28.578 14.729 30.2686 9.26352H34.7614C36.012 9.26352 37.0541 8.22138 37.0541 6.9708V6.92448C37.0541 5.67391 36.012 4.63176 34.7614 4.63176H20.8429V2.31588C20.8429 1.04215 19.8008 0 18.527 0C17.2533 0 16.2112 1.04215 16.2112 2.31588V4.63176H2.29272C1.04215 4.63176 0 5.67391 0 6.92448C0 8.19822 1.04215 9.21721 2.29272 9.21721H25.8684C24.3168 13.71 21.8619 17.9481 18.527 21.6535C16.6512 19.5924 15.0764 17.3459 13.7563 14.9838C13.3858 14.3121 12.7142 13.8953 11.9499 13.8953C10.352 13.8953 9.333 15.6322 10.1204 17.0217C11.5794 19.6387 13.3626 22.1398 15.4469 24.4557L5.32653 34.4372C4.40017 35.3403 4.40017 36.8225 5.32653 37.7257C6.22972 38.6289 7.68872 38.6289 8.61508 37.7257L18.527 27.7906L23.2051 32.4687C24.3862 33.6498 26.401 33.2097 26.98 31.6581ZM38.212 18.527C36.8225 18.527 35.5719 19.3839 35.0856 20.704L26.5863 43.3996C26.0305 44.8123 27.0958 46.3176 28.6011 46.3176C29.5043 46.3176 30.3149 45.7618 30.6391 44.9049L32.7002 39.37H43.7007L45.785 44.9049C46.1092 45.7386 46.9198 46.3176 47.8229 46.3176C49.3283 46.3176 50.3936 44.8123 49.8609 43.3996L41.3616 20.704C40.8521 19.3839 39.6016 18.527 38.212 18.527ZM34.4603 34.7382L38.212 24.7105L41.9638 34.7382H34.4603Z" fill="#00FFF0"/>
                        </svg>
                        </div>
                    </div>
                  </div>
  
                  <div className="NB--navigation">
                    <nav>
                      <Link to="/home">
                        <div className="NB--navigation__items">
                            <svg width="2vw" height="2vw" viewBox="0 0 31 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.9727 9.81885V1.63503H21.4727V5.64974L15.4727 0.0909119L0.472717 13.988H4.97272V26.3409H13.9727V17.0762H16.9727V26.3409H25.9727V13.988H30.4727L25.9727 9.81885ZM22.9727 23.2527H19.9727V13.988H10.9727V23.2527H7.97272V11.1931L15.4727 4.24459L22.9727 11.1931V23.2527Z" fill="#00FFF0"/>
                            <path d="M12.4727 10.8997H18.4727C18.4727 9.20121 17.1227 7.8115 15.4727 7.8115C13.8227 7.8115 12.4727 9.20121 12.4727 10.8997Z" fill="#00FFF0"/>
                            </svg>

  
                          <p style={{paddingTop: "0.3vw"}}>Home</p>
                        </div>
                      </Link>
                      
                      <Link to="/skills">
                        <div className="NB--navigation__items">
                          <svg width="2vw" height="2vw" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M25.7043 17.9899H40C39.0576 8.50251 31.5188 0.944724 22.0551 0V14.3317C23.7594 14.9548 25.0827 16.2814 25.7043 17.9899ZM26.0652 5.08543C30.0752 6.73367 33.2832 9.94975 34.9273 13.9698H28.0501C27.4887 13.2261 26.807 12.5427 26.0652 11.9799V5.08543V5.08543ZM0 20C0 30.4322 7.9198 38.995 18.0451 40V25.6683C15.7193 24.8241 14.0351 22.6131 14.0351 20C14.0351 17.3869 15.7193 15.1759 18.0451 14.3317V0C7.9198 1.00503 0 9.56784 0 20ZM14.0351 5.08543V12C11.5689 13.8492 10.0251 16.804 10.0251 20C10.0251 23.196 11.5689 26.1508 14.0351 28.0201V34.9347C8.10025 32.5427 4.01003 26.7337 4.01003 20C4.01003 13.2663 8.10025 7.45729 14.0351 5.08543ZM22.0551 25.6683V40C31.5188 39.0553 39.0576 31.4975 40 22.01H25.7043C25.0827 23.7186 23.7594 25.0452 22.0551 25.6683ZM26.0652 28.0201C26.807 27.4573 27.4887 26.794 28.0501 26.0301H34.9273C33.2832 30.0502 30.0752 33.2663 26.0652 34.9146V28.0201V28.0201Z" fill="#00FFF0"/>
                          </svg>
  
                          <p style={{paddingTop: "0.3vw"}}>Skills</p>
                        </div>
                        </Link>
  
                      <Link to="/proyects">
                        <div className="NB--navigation__items">
                          <svg width="2vw" height="2vw" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M28.2816 5.85921L34.1408 11.7184L28.2816 17.5776L22.4224 11.7184L28.2816 5.85921V5.85921ZM12.4224 6.853V15.1346H4.14079V6.853H12.4224ZM33.1263 27.5569V35.8385H24.8447V27.5569H33.1263ZM12.4224 27.5569V35.8385H4.14079V27.5569H12.4224ZM28.2816 0L16.5631 11.6977L28.2816 23.4161L40 11.6977L28.2816 0ZM16.5631 2.71222H0V19.2754H16.5631V2.71222ZM37.2671 23.4161H20.7039V39.9793H37.2671V23.4161ZM16.5631 23.4161H0V39.9793H16.5631V23.4161Z" fill="#00FFF0"/>
                          </svg>
  
                          <p style={{paddingTop: "0.3vw"}}>Proyects</p>
                        </div>
                        </Link>
                    </nav>
                  </div>
  
                </div>
  
              </div>
              </Toolbar>
            </AppBar>
          </HideOnScroll>
          <Toolbar />
        </ThemeProvider>
  
      </React.Fragment>
    );
  }