import React from "react";
import classNames from "../utils/class-names";

function ControlTools({
  isTimerRunning,
  handleStopButton,
  session,
  playPause,
}) {
  return (
    <div className="row">
      <div className="col">
        <div
          className="btn-group btn-group-lg"
          role="group"
          aria-label="Timer controls"
        >
          <button
            type="button"
            className="btn btn-primary"
            data-testid="play-pause"
            title="Start or pause timer"
            onClick={playPause}
          >
            <span
              className={classNames({
                oi: true,
                "oi-media-play": !isTimerRunning,
                "oi-media-pause": isTimerRunning,
              })}
            />
          </button>
          <button
            type="button"
            className="btn btn-danger"
            data-testid="stop"
            title="Stop the session"
            onClick={handleStopButton}
            disabled={!session}
          >
            <span className="oi oi-media-stop" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ControlTools;
