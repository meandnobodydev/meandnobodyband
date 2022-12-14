import React from "react";

function Live() {
    return (
        <div id="live-section">
            <h1 className="purple-live-header">ME + NOBODY LIVE</h1>
            <div id="live-content-container">
                {/* <div className="past-live-show">
                    <h2 className="live-date">08. 19. 2022.</h2>
                    <h2 className="live-venue">amityville music hall</h2>
                    <button className="pastshow-ticket-button" disabled={true}>SOLD OUT</button>
                </div>
                <div className="past-live-show">
                    <h2 className="live-date">11. 05. 2022.</h2>
                    <h2 className="live-venue">amityville music hall</h2>
                    <button className="pastshow-ticket-button">SOLD OUT</button>
                </div>
                <div className="live-show">
                    <h2 className="live-date">04. 22. 2023.</h2>
                    <h2 className="live-venue">pier 17</h2>
                    <button className="ticket-button">Tickets</button>
                </div>
                <div className="live-show">
                    <h2 className="live-date">11. 17. 2023.</h2>
                    <h2 className="live-venue">madison square garden</h2>
                    <button className="ticket-button">Tickets</button>
                </div>
                <div className="live-show">
                    <h2 className="live-date">11. 18. 2023.</h2>
                    <h2 className="live-venue">madison square garden</h2>
                    <button className="ticket-button">Tickets</button> */}
                    {/* <h1 id="live-text">NEW SHOW DATES TBA</h1> */}
                    <div className="live-show">
                    <h2 className="live-date">01. 15. 2023.</h2>
                    <h2 className="live-venue">MERCURY LOUNGE, NYC</h2>
                    <button className="ticket-button"><a className="ticket-link" href="https://www.ticketmaster.com/calista-garcia-blanket-approval-new-york-new-york-01-15-2023/event/00005D93C39632FF?artistid=2905749&tm_link=tm_header_search" target="_blank">Tickets</a></button>
                </div>
            </div>
                <h1 className="live-header">ME + NOBODY LIVE</h1>
                {/* <h2 className="sold-out">08. 19. 2022. @ amityville music hall - SOLD OUT</h2>
                <h2 className="sold-out">11. 05. 2022. @ amityville music hall - </h2>
                <h2>04. 22. 2023 @ pier 17 - <a href="#" className="ticket-link">tickets</a></h2> */}
                {/* <h2>11. 17. 2023 @ Madison Square Garden</h2>
                <h2>11. 18. 2023 @ Madison Square Garden</h2>
                <h2>11. 19. 2023 @ Madison Square Garden</h2> */}
            </div>
        // </div>
    )
}

export default Live;