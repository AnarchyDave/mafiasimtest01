import logo from './logo.svg';
import './App.css';
import React, {Fragment, useState, useEffect} from "react";

function GameTime() {
    const [openTime, setOpenTime] = useState(50);
    useEffect(() => {
        setTimeout(() => {
            setOpenTime((openTime) => openTime + 10)
        }, 1200)
    }, [])
    return <p>Counting in tens: {openTime}</p>
}

function OpenModal() {
    const [modalState, setModalState] = useState(false);
    console.log({modalState});
    setModalState(true);
}

function DetectLogin() {
    const [login, setLogin] = useState(false);
    const showstuff = (!login) ? (<button onClick={() => OpenModal()}>Login!</button>) : <App/>
    return (<>
        <Modal />
        {showstuff}
    </>);
}

function Modal(passedProps) {
    const classes = "modal" + passedProps;
    return (<div className={classes}></div>);
}


function App() {
    const [currentPage, setCurrentPage] = useState("Page1");
    const [versionNumber] = useState("0.01");
    return (
        <Fragment>
            <header>
                <nav>
                    <ul>
                        <li onClick={() => setCurrentPage("Page1")}>Page1</li>
                        <li onClick={() => setCurrentPage("Page2")}>Page2</li>
                        <li onClick={() => setCurrentPage("Page3")}>Page3</li>
                        <li onClick={() => setCurrentPage("Page4")}>Page4</li>
                        <li onClick={() => setCurrentPage("Page5")}>Page5</li>
                    </ul>
                </nav>
            </header>
            <main>
                {currentPage === "Page1" && <Page1/>}
                {currentPage === "Page2" && <Page2/>}
                {currentPage === "Page3" && <Page3/>}
                {currentPage === "Page4" && <Page4/>}
                {currentPage === "Page5" && <Page5/>}
                {currentPage === "Page6" && <Page6/>}
                {currentPage === "PageLaw" && <PageLaw/>}
                {currentPage === "PageJobs" && <PageJobs/>}
                {currentPage === "PageOrganization" && <PageOrganization/>}
                {currentPage === "PageSocial" && <PageSocial/>}
                <p>This is Mafia Sim v{versionNumber}</p>
                <img src={logo} className="App-logo" alt="logo"/>
            </main>
            <footer>
                <nav>
                    <ul>
                        <li onClick={() => setCurrentPage("Page6")}>Page6</li>
                        <li onClick={() => setCurrentPage("PageLaw")}>Law</li>
                        <li onClick={() => setCurrentPage("PageJobs")}>JOBS</li>
                        <li onClick={() => setCurrentPage("PageOrganization")}>My Organization</li>
                        <li onClick={() => setCurrentPage("PageSocial")}>Social</li>
                    </ul>
                </nav>
            </footer>
        </Fragment>
    );
}

function Page1() {
    return <><h1>Testing a timing thing</h1><GameTime/></>;
}

function Page2() {
    return <h1>This is Page2</h1>;
}

function Page3() {
    return <h1>We talkin jobs here - page 3</h1>;
}

function Page4() {
    return <div id="page"><h1>Order Order!</h1><p>Court is in session (Page 4)</p></div>;
}

function Page5() {
    return <h1>This is Page5</h1>;
}

function Page6() {
    return <h1>This is Page6</h1>;
}

function PageLaw() {
    return <h1>This is the law page</h1>;
}

function PageJobs() {
    return <h1>This is the jobs page</h1>;
}

function PageOrganization() {
    return <h1>Your Organization</h1>;
}

function PageSocial() {
    return <h1>This is the social page</h1>;
}

export default DetectLogin;
